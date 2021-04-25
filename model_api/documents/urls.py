from django.urls import path
from . import views

urlpatterns = [
    path("get_docs/", views.get_docs, name="get_docs_url"),
    path("fill_docs/", views.fill_docs, name="fill_docs_url"),
    path("get_tags/", views.get_tags, name="get_tags_url"),
    path("add_docs/", views.add_docs, name="add_docs_url"),
    path("get_doc_sets/", views.get_doc_sets, name="get_doc_sets_url"),
    path("get_doc_set_info/", views.get_doc_set_info, name="get_doc_set_info_url"),
    path("create_qr_code/", views.create_qr_code, name="create_qr_code_url"),
    
]
