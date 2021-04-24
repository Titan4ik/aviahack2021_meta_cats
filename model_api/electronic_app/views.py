from django.shortcuts import render
from electronic_app.models import ElectronicApplication, ElectronicApplicationDocument
from django.http import HttpResponse, FileResponse
from electronic_app import main
from documents.models import DocumentSet
import json
from model_api.auth import login_required
from django.contrib.auth.models import User


@login_required(strong_auth=False)
def create(request, add_info: dict):
    doc_set_id = request.GET["doc_set_id"]
    el_sign = request.FILES["el_sign"]

    docs = Document.objects.filter(doc_set_id=doc_set_id)

    tags = dict(request.POST.items())
    ea = ElectronicApplication(doc_set_id=doc_set_id, consumer_id=add_info["user_id"])
    ea.save()

    response_data = []

    for i, doc in enumerate(docs):
        ead = ElectronicApplicationDocument(app_id=ea.app_id, file_name=doc.get_name())
        ead.save()

        in_name = ead.get_path()

        word_data = main.fill_doc(doc, in_name, tags, el_sign)
        out_name = os.path.dirname(in_name)
        main.word2pdf(in_name, out_name)
        doc_name, _ = os.path.splitext(in_name)

        response_data.append(
            {
                "doc_name": f"{os.path.splitext(os.path.basename(in_name))}.pdf",
                "path": f"{doc_name}.pdf",
            }
        )
    email = ''
    if add_info["user_id"] is not None:
        try:
            email = User.objects.filter(id=add_info["user_id"])[0].email
        except Exception:
            ...
    return HttpResponse(
        json.dumps({"app_id": ea.app_id, "docs": response_data, "email": email}),
        content_type="application/json",
    )


# @login_required(strong_auth=False)
# def docs(request, add_info: dict):
#     app_id = request.GET["app_id"]
#     ea = ElectronicApplication.objects.filter(app_id=app_id)[0]

#     tmp = DocumentSet.objects[0].filter(
#         doc_set_id=ea.doc_set_id, producer_id=add_info["user_id"]
#     )
#     if (
#         ea.consumer_id is not None
#         and ea.consumer_id != add_info["user_id"]
#         and len(tmp) != 1
#     ):
#         raise Exception("Нет доступа для просмотра")
#     docs = ElectronicApplicationDocument.objects.filter(app_id=app_id)
#     response_data = [doc.file_name for doc in docs]
#     return HttpResponse(json.dumps(response_data), content_type="application/json")
