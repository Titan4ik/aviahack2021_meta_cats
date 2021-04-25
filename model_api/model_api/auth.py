from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate
import datetime
import jwt
from django.conf import settings
from users.models import Producer, AuthTokens
import json


def _generate_access_token(user):
    access_token_payload = {
        "user_id": user.id,
        "exp": datetime.datetime.utcnow() + datetime.timedelta(days=0, minutes=5),
        "iat": datetime.datetime.utcnow(),
    }
    token = jwt.encode(access_token_payload, settings.SECRET_KEY, algorithm="HS256")
    return token


def _generate_refresh_token(user):
    refresh_token_payload = {
        "user_id": user.id,
        "exp": datetime.datetime.utcnow() + datetime.timedelta(days=7),
        "iat": datetime.datetime.utcnow(),
    }
    refresh_token = jwt.encode(
        refresh_token_payload, settings.REFRESH_TOKEN_SECRET, algorithm="HS256"
    )

    return refresh_token


def _generate_tokens(user):
    access_token = _generate_access_token(user)
    refresh_token = _generate_refresh_token(user)
    au = AuthTokens(user_id=user.id, access_token=access_token, refresh_token=refresh_token)
    au.save()
    return (access_token, refresh_token)


def logout(access_token, refresh_token):
    AuthTokens.objects.filter(access_token=access_token,refresh_token=refresh_token).delete()


def sign_in(request, username, password):
    user = authenticate(username=username, password=password)
    if user is None:
        raise Exception('Ошибка авторизации')
    login(request, user)
    tokens = _generate_tokens(user)
    return {"access_token": tokens[0], "refresh_token": tokens[1]}


def sign_up(username, password, email):
    user = User.objects.create_user(username=username, email=email, password=password)
    user.save()
    pro = Producer(user_id=user.id, company_name="meta_cats", confirmed=False)
    pro.save()


def login_required(*, strong_auth=True, find_producer_id=False, strong_auth_producer=True):
    def wrapper0(func):
        def wrapper(request):
            add_param = {}
            try:
                try:
                    access_token = request.POST["access_token"]
                    refresh_token = request.POST["refresh_token"]
                except KeyError:
                    json_data = json.loads(request.body)
                    access_token = json_data["access_token"]
                    refresh_token = json_data["refresh_token"]
                user_id = AuthTokens.objects.filter(access_token=access_token,refresh_token=refresh_token)[0].user_id
                add_param["user_id"] = user_id
            except Exception:
                if strong_auth:
                    raise Exception("need auth")
                else:
                    add_param["user_id"] = None
            if find_producer_id:
                producer = Producer.objects.filter(user_id=add_param["user_id"])
                try:
                    if len(producer) != 1:
                        raise Exception("Этот метод доступен только заказчикам")
                    add_param["producer_id"] = producer[0].id
                except Exception as e:
                    if strong_auth_producer:
                        raise e
                    add_param["producer_id"] = None

            return_value = func(request, add_param)
            return return_value

        return wrapper

    return wrapper0
