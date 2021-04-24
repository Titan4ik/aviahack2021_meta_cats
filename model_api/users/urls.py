from django.urls import path
from . import views

urlpatterns = [
    path('sign_in/', views.sign_in, name='sign_in_url'),
    path('sign_up/', views.sign_up, name='sign_up_url'),
    path('logout/', views.logout, name='logout_url'),
]
