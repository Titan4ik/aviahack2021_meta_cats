from django.shortcuts import render
from electronic_app.models import ElectronicApplication, ElectronicApplicationDocument
from django.http import HttpResponse, FileResponse
from documents import main
from documents.models import DocumentSet, Document
import json
from model_api.auth import login_required
from django.contrib.auth.models import User
from base64 import decodestring
from model_api.settings import STATICFILES_DIRS
from users.models import Producer
import os
from electronic_app.main import send_mails


@login_required(strong_auth=False)
def create(request, add_info: dict):
    doc_set_id = request.GET["doc_set_id"]
    imagestr = request.POST["el_sign"].replace("data:image/png;base64", "")

    docs = Document.objects.filter(doc_set_id=doc_set_id)

    tags = dict(request.POST.items())
    ea = ElectronicApplication(doc_set_id=doc_set_id, consumer_id=add_info["user_id"])
    ea.save()

    image_path = os.path.join(
        STATICFILES_DIRS[0], "electronic_application", f"{ea.id}", "подпись.png"
    )
    path = os.path.dirname(image_path)
    try:
        os.mkdir(path)
    except OSError:
        ...
    with open(image_path, "wb") as f:
        f.write(decodestring(imagestr.encode()))

    files = []

    for i, doc in enumerate(docs):
        ead = ElectronicApplicationDocument(app_id=ea.id, file_name=doc.get_name())
        ead.save()

        in_name = ead.get_path()

        word_data = main.fill_doc(doc, in_name, tags, image_path)
        out_name = os.path.dirname(in_name)
        main.word2pdf(in_name, out_name)
        doc_name, _ = os.path.splitext(in_name)

        files.append(f"{doc_name}.pdf")

    doc_set = DocumentSet.objects.filter(id=doc_set_id)[0]
    producer = Producer.objects.filter(id=doc_set.producer_id)[0]
    email_producer = User.objects.filter(id=producer.user_id)[0].email
    email_user = tags["email"]

    send_mails(email_user, email_producer, files, f'Услуга №{doc_set_id} "{doc_set_name}"')

    return HttpResponse(json.dumps({"status": "ok"}), content_type="application/json",)

