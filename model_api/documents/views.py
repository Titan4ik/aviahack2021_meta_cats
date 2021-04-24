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
import time
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
    response_data = []
    for doc in docs:
        filename, file_extension = os.path.splitext(doc.get_path())
        doc_name, _ = os.path.splitext(doc.doc_name)
        out_name = f'{filename}.pdf'
        response_data.append(
            {
                'doc_id': doc.id,
                'doc_name': f'{doc_name}.pdf',
                'path': out_name.split('/static')[1],
            }
        )
    
    return HttpResponse(json.dumps(response_data), content_type="application/json")

def get_doc(request):
    ...
    
@login_required(strong_auth=False)
def fill_docs(request, add_info: dict):
    doc_set_id = request.GET['doc_set_id']
    docs = Document.objects.filter(doc_set_id=doc_set_id)
    
    tags = dict(request.POST.items())
    
    ts = time.time()

    response_data = []
    for i, doc in enumerate(docs):
        in_name = os.path.join(STATICFILES_DIRS[0],'tmp_doc',f'{ts}_{i}.docx')
        word_data = main.fill_doc(doc, in_name, tags)
        out_name = os.path.join(STATICFILES_DIRS[0],'tmp_doc')
        main.word2pdf(in_name, out_name)
        doc_name, _ = os.path.splitext(doc.doc_name)
        response_data.append(
            {
                'doc_id': doc.id,
                'doc_name': f'{doc_name}.pdf',
                'path': os.path.join('tmp_doc',f'{ts}_{i}.pdf')
            }
        )
    
    return HttpResponse(json.dumps(response_data), content_type="application/json")

@login_required(strong_auth=False)
def get_tags(request, add_info: dict):
    response_data = load_tags(request.GET['doc_set_id'])
    if 'подпись' in response_data:
        response_data.remove('подпись')

    tags = {} 
    return HttpResponse(json.dumps(response_data), content_type="application/json")



@login_required(find_producer_id=True)
def add_docs(request, add_info: dict):
    description = request.POST['description']
    doc_set = DocumentSet(description=description,producer_id=add_info['producer_id'])
    doc_set.save()
    doc_set_id = doc_set.id

    tags = []
    for file_data in request.FILES.getlist('files'):
        doc_name=file_data.name
        doc = Document(doc_set_id=doc_set_id, doc_name=doc_name)
        doc.save()
        filename, file_extension = os.path.splitext(doc_name)
        doc.save_file(file_data.read())

        filename, file_extension = os.path.splitext(doc.get_path())
        out_name = f'{filename}.pdf'
        main.word2pdf(doc.get_path(), os.path.dirname(out_name))

        tags_in_docx = DocxTemplate(doc.get_path()).get_undeclared_template_variables()
        tags += tags_in_docx
    save_tags(doc_set_id, list(set(tags)))

    response_data = {'doc_set_id': doc_set_id}
    return HttpResponse(json.dumps(response_data), content_type="application/json")

def get_doc_sets(request):
    prods = Producer.objects.all()
    response_data = []
    for prod in prods:
        res = {
            'producer_name': prod.company_name,
            'offers': [],
        }
        docs = DocumentSet.objects.filter(producer_id=prod.id)
        for doc in docs:
            res['offers'].append({
                'description': doc.description,
                'id': doc.id
            })
        response_data.append(res)

    return HttpResponse(json.dumps(response_data), content_type="application/json")
