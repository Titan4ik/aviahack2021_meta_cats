from docxtpl import DocxTemplate
from docxtpl import InlineImage
from docxtpl import Listing
from docx.shared import Pt
from documents.models import Document
import mammoth
import io
import time;

def fill_doc(document: Document, out_name, tags: dict, electronic_signature: str = None) -> str:
    """electronic_signature путь до картинки с электронной подписью"""
    context = tags
    doc = DocxTemplate(document.get_path())
    if electronic_signature is not None:
        context["image"] = InlineImage(
            doc, electronic_signature, width=Pt(100), height=Pt(200)
        )
    doc.render(context)
    doc.save(out_name)


def word2pdf(in_name, out_name):
    ts = time.time()
    path = ''
    with open(path, 'wb') as f:
        f.write(input_docx)
    p = Popen(['librepffice', '--convert-to', 'pdf', '--outdir',out_name, in_name])
    p.communicate()
