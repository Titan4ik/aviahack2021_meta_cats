from django.shortcuts import render
import json
import os
from django.http import HttpResponse, FileResponse
from model_api.settings import STATICFILES_DIRS
from django.views.decorators.csrf import csrf_exempt
from documents.models import load_tags, Document, DocumentSet, save_tags
from model_api.auth import login_required
from users.models import Producer
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
            'doc_id': doc.doc_id,
            'doc_name': doc.doc_name
        }
        for doc in docs
    ]
    return HttpResponse(json.dumps(response_data), content_type="application/json")

def get_doc(request):
    '''
        вернет документ, и если указан flg_feel true, то заполнит его
    '''
    doc_id = request.GET['doc_id']
    doc_set_id = request.GET['doc_set_id']
    doc = Document.object.filter(doc_id=doc_id, doc_set_id=doc_set_id)
    return FileResponse(doc.open_file())
    
@login_required(strong_auth=False)
def fill_doc(request, add_info: dict):
    '''
        вернет документ, и если указан flg_feel true, то заполнит его
    '''
    doc_id = request.GET['doc_id']
    doc_set_id = request.GET['doc_set_id']
    data_from = request.GET['data_from']
    doc = Document.object.filter(doc_id=doc_id, doc_set_id=doc_set_id)
    file_data = doc.open_file()
    # TODO добавить заполнение файла
    return FileResponse(file_data)

def get_tags(request):
    response_data = load_tags(request.GET['doc_set_id'])
    return HttpResponse(json.dumps(response_data), content_type="application/json")

@login_required()
def send_docs(request, add_info: dict):
    '''
        
    '''
    response_data = ['не реализован']
    return HttpResponse(json.dumps(response_data), content_type="application/json")

@login_required(find_producer_id=True)
def add_docs(request, add_info: dict):
    file_count = request.GET['file_count']
    description = request.GET['description']
    producer_id = Producer.object.filter(user_id=request.GET['user_id'])
    doc_set = DocumentSet(description=description,producer_id=producer_id)
    doc_set.save()
    doc_set_id = doc_set.doc_set_id

    for i in range(file_count):
        file_data = request.FILES[f'file_{i}']
        doc_name=file_data['name']
        doc = Document(doc_set_id=doc_set_id, doc_name=doc_name)
        doc.save()
        filename, file_extension = os.path.splitext(doc_name)
        doc.save_file(file_data.read(), file_extension)
    tags = []
    save_tags(doc_set_id, tags)

    response_data = {'doc_set_id': doc_set_id}
    return HttpResponse(json.dumps(response_data), content_type="application/json")
