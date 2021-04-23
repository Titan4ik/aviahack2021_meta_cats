from django.shortcuts import render
import json

from django.http import HttpResponse, FileResponse
from model_api.settings import STATICFILES_DIRS
# Create your views here.

def personal(request):
    response_data = {'msg': 'HELLO VLAD', 'status': 'ok'}
    return HttpResponse(json.dumps(response_data), content_type="application/json")

def get_file(request):
    return FileResponse(open(os.path.join(STATICFILES_DIRS[0],'\\1.jpg'), 'rb'))

def set_file(request):
    data = request.FILES['input_file'].read()
    with open(os.path.join(STATICFILES_DIRS[0],'\\1.jpg'), 'wb') as fout:
        fout.write(data)
    response_data = {'status': 'ok'}
    return HttpResponse(json.dumps(response_data), content_type="application/json")