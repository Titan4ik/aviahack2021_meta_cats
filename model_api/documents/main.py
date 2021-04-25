from docxtpl import DocxTemplate
from docxtpl import InlineImage
from docxtpl import Listing
from docx.shared import Pt
from documents.models import Document
import mammoth
import io
import time
from subprocess import Popen
from io import BytesIO
import base64
import qrcode


def fill_doc(document: Document, out_name, tags: dict, electronic_signature: str = None) -> str:
    """electronic_signature путь до картинки с электронной подписью"""
    context = tags
    doc = DocxTemplate(document.get_path())
    if electronic_signature is not None:
        doc.replace_pic('sign.png', electronic_signature)
    doc.render(context)
    doc.save(out_name)


def word2pdf(in_name, out_name):
    p = Popen(['libreoffice', '--convert-to', 'pdf', '--outdir',out_name, in_name])
    p.communicate()

def get_qr_code(text) -> str:
    img = qrcode.make(text)
    buffered = BytesIO()
    img.save(buffered, format="PNG")
    img_str = base64.b64encode(buffered.getvalue())
    return b'data:image/png;base64,'+img_str