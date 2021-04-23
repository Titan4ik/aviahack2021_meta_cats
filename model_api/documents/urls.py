from django.urls import path
from . import views

urlpatterns = [
    path('get_doc/', views.get_doc, name='get_doc_url'),
    path('get_docs/', views.get_docs, name='get_docs_url'),
    path('fill_doc/', views.fill_doc, name='fill_doc_url'),
    path('get_tags/', views.get_tags, name='get_tags_url'),
    path('send_docs/', views.send_docs, name='send_docs_url'),
    path('add_docs/', views.add_docs, name='add_docs_url'),
]
