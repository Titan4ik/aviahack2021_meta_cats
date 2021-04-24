from django.shortcuts import render
from electronic_app.models import ElectronicApplication, ElectronicApplicationDocument
from django.http import HttpResponse, FileResponse
from electronic_app import main
from documents.models import DocumentSet
import json
from model_api.auth import login_required

@login_required(strong_auth=False)
def create(request, add_info: dict):
    doc_set_id = request.GET['doc_set_id']
    el_sign = request.FILES['el_sign']
    tags = json.loads(request.body)
    ea = ElectronicApplication(doc_set_id=doc_set_id, consumer_id=add_info['user_id'])
    ea.save()

    docs = Document.objects().filter(doc_set_id=doc_set_id)
    for doc in docs:
        doc1 = main.feel(doc, tags, el_sign)
        ead = ElectronicApplicationDocument(app_id=ea.app_id, file_name=doc.get_name())
        ead.save()
        ead.save_file(doc1)

    response_data = {'app_id': ea.app_id}
    return HttpResponse(json.dumps(response_data), content_type="application/json")


@login_required(strong_auth=False)
def docs(request, add_info: dict):
    app_id = request.GET['app_id']
    ea = ElectronicApplication.object.filter(app_id=app_id)

    tmp = DocumentSet.object.filter(doc_set_id=ea.doc_set_id, producer_id=add_info['user_id'])
    if ea.consumer_id is not None and ea.consumer_id != add_info['user_id'] and tmp:
        raise Exception('Нет доступа для просмотра')
    docs = ElectronicApplicationDocument.objects().filter(app_id=app_id)
    response_data = [
        doc.file_name
        for doc in docs
    ]
    return HttpResponse(json.dumps(response_data), content_type="application/json")

@login_required(strong_auth=False)
def doc(request, add_info: dict):
    app_id = request.GET['app_id']
    file_name = request.GET['file_name']
    ea = ElectronicApplication.object.filter(app_id=app_id)
    
    tmp = DocumentSet.object.filter(doc_set_id=ea.doc_set_id, producer_id=add_info['user_id'])
    if ea.consumer_id is not None and ea.consumer_id != add_info['user_id'] and tmp:
        raise Exception('Нет доступа для просмотра')
    doc = ElectronicApplicationDocument.object.filter(app_id=app_id, file_name=file_name)
    
    return FileResponse(doc.open_file())