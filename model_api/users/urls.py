from django.urls import path
from . import views

urlpatterns = [
    path('sign_in/', views.sign_in, name='sign_in_url'),
    path('sign_up/', views.sign_up, name='sign_up_url'),
    path('logout/', views.logout, name='logout_url'),
    path('test_sign_user/', views.test_sign_user, name='test_sign_user_url'),
    path('test_sign_producer/', views.test_sign_producer, name='test_sign_producer_url'),
]
