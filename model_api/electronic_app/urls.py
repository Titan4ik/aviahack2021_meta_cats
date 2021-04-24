from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.create, name='create_url'),
    path('docs/', views.docs, name='docs_url'),
    path('doc/', views.doc, name='doc_url'),
]
