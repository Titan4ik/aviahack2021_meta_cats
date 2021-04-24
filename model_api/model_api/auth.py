from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate
import datetime
import jwt
from django.conf import settings

user_logins = {}

def _generate_access_token(user):
    access_token_payload = {
        'user_id': user.id,
        'exp': datetime.datetime.utcnow() + datetime.timedelta(days=0, minutes=5),
        'iat': datetime.datetime.utcnow(),
    }
    token = jwt.encode(access_token_payload, settings.SECRET_KEY, algorithm='HS256')
    return token

def _generate_refresh_token(user):
    refresh_token_payload = {
        'user_id': user.id,
        'exp': datetime.datetime.utcnow() + datetime.timedelta(days=7),
        'iat': datetime.datetime.utcnow()
    }
    refresh_token = jwt.encode(refresh_token_payload, settings.REFRESH_TOKEN_SECRET, algorithm='HS256')

    return refresh_token

def _generate_tokens(user):
    access_token = generate_access_token(user)
    refresh_token = _generate_refresh_token(user)
    user_logins[(access_token, refresh_token)] = user.id
    return (access_token, refresh_token)


def logout(access_token, refresh_token):
    if (access_token, refresh_token) in user_logins:
        del user_logins[(access_token, refresh_token)]


def sign_in(request, username, password):
    user = authenticate(username=username, password=password)
    login(request, user)
    tokens = _generate_tokens(user)
    return tokens

def sign_up(username, password, email):
    user = User.objects.create_user(username=username, email=email, password=password)
    user.save()

def login_required(*,strong_auth=True, find_producer_id=False):
    def wrapper0(func):
        def wrapper(request):
            add_param = {}
            try:
                access_token = request.COOKIES['access_token']
                refresh_token = request.COOKIES['refresh_token']
                user_id = user_logins[(access_token, refresh_token)]
                add_param['user_id'] = user_id
            except KeyError():
                if strong_auth:
                    raise Exception('need auth')
                else:
                    add_param['user_id'] = None
            if find_producer_id:
                producer_id = Producer.object.filter(user_id=request.GET['user_id'])
                add_param['producer_id'] = producer_id.id

            return_value = func(request, add_param)
            return return_value
        return wrapper
    return wrapper0
