from django.shortcuts import render
from model_api import auth
import json
from django.http import HttpResponse

# Create your views here.
def sign_in(request):
    username = request.POST["username"]
    password = request.POST["password"]
    tokens = auth.sign_in(request, username, password)
    return HttpResponse(json.dumps(tokens), content_type="application/json")


def sign_up(request):
    username = request.POST["username"]
    password = request.POST["password"]
    email = request.POST["email"]
    try:
        auth.sign_up(username, password, email)
    except Exception as e:
        return HttpResponse(
            json.dumps({"status": "error", "msg": str(e)}),
            content_type="application/json",
        )
    else:
        return HttpResponse(
            json.dumps({"status": "ok"}), content_type="application/json"
        )


@auth.login_required()
def logout(request):
    json_data = json.loads(request.body)
    access_token = json_data["access_token"]
    refresh_token = json_data["refresh_token"]
    auth.logout(access_token, refresh_token)
    return HttpResponse(json.dumps({"status": "ok"}), content_type="application/json")


@auth.login_required()
def test_sign_user(request, _):
    return HttpResponse(json.dumps({"status": "ok"}), content_type="application/json")


@auth.login_required(find_producer_id=True)
def test_sign_producer(request, _):
    return HttpResponse(json.dumps({"status": "ok"}), content_type="application/json")
