from django.shortcuts import render
import json
import os
from django.http import HttpResponse, FileResponse
from model_api.settings import STATICFILES_DIRS
from django.views.decorators.csrf import csrf_exempt
from documents.models import load_tags, Document, DocumentSet, save_tags
from model_api.auth import login_required
from users.models import Producer
from documents import main
from docxtpl import DocxTemplate
# Create your views here.

def get_docs(request):
    '''
        вернуть список 
        [
            {doc_id, doc_name},
            {doc_id, doc_name},
        ]
    '''
    doc_set_id = request.GET['doc_set_id']
    docs = Document.objects.filter(doc_set_id=doc_set_id)
    response_data = [
        {
            'doc_id': doc.id,
            'doc_name': doc.doc_name
        }
        for doc in docs
    ]
    return HttpResponse(json.dumps(response_data), content_type="application/json")

def get_doc(request):
    doc_id = request.GET['doc_id']
    doc_set_id = request.GET['doc_set_id']
    doc = Document.objects.filter(id=doc_id, doc_set_id=doc_set_id)[0]
    return FileResponse(doc.open_file())
    
@login_required(strong_auth=False)
def fill_doc(request, add_info: dict):
    doc_id = request.GET['doc_id']
    doc_set_id = request.GET['doc_set_id']
    doc = Document.objects.filter(id=id, doc_set_id=doc_set_id)[0]

    tags = json.loads(request.body)

    word_data = main.fill_doc(doc, tags)

    return HttpResponse(main.word2html(word_data))

def get_tags(request):
    response_data = load_tags(request.GET['doc_set_id'])
    return HttpResponse(json.dumps(response_data), content_type="application/json")



@login_required(find_producer_id=True)
def add_docs(request, add_info: dict):
    description = request.POST['description']
    doc_set = DocumentSet(description=description,producer_id=add_info['producer_id'])
    doc_set.save()
    doc_set_id = doc_set.id

    tags = []
    for f in request.FILES.getlist('files'):
        file_data = f
        doc_name=file_data.name
        doc = Document(doc_set_id=doc_set_id, doc_name=doc_name)
        doc.save()
        filename, file_extension = os.path.splitext(doc_name)
        doc.save_file(file_data.read())
    
        tags_in_docx = DocxTemplate(doc.get_path()).get_undeclared_template_variables()
        tags += tags_in_docx
    save_tags(doc_set_id, list(set(tags)))

    response_data = {'doc_set_id': doc_set_id}
    return HttpResponse(json.dumps(response_data), content_type="application/json")

