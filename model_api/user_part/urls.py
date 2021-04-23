from django.urls import path
from . import views

urlpatterns = [
    path('personal/', views.personal, name='personal_url'),
    path('get_file/', views.get_file, name='get_file_url'),
    path('set_file/', views.set_file, name='set_file_url'),
]
