from django.shortcuts import render
from model_api import auth
import json
# Create your views here.
def sign_in(request):
    username = request.POST['username']
    password = request.POST['password']
    tokens = auth.sign_in(request, username, password)
    return HttpResponse(json.dumps(tokens), content_type="application/json")

def sign_up(request):
    username = request.POST['username']
    password = request.POST['password']
    email = request.POST['email']
    try:
        auth.sign_up(username, password, email)
    except Exception as e:
        return HttpResponse(json.dumps({'status': 'error', 'msg': str(e)}), content_type="application/json")
    else:
        return HttpResponse(json.dumps({'status': 'ok'}), content_type="application/json")

def logout(request):
    access_token = request.COOKIES['access_token']
    refresh_token = request.COOKIES['refresh_token']
    auth.logout(access_token, refresh_token)
