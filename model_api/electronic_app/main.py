from docxtpl import DocxTemplate
from docxtpl import InlineImage
from docxtpl import Listing
from docx.shared import Pt
# from docx2pdf import convert
# from documents.models import Document
import io
class Document:
    def get_path():
        return 'A:\education\aviahack\aviahack2021_meta_cats\tets\data.docx'

def convert_word_to_pdf(word_data):
    ...
def fill():
    ...

def fill_doc(document: Document, tags: dict, electronic_signature: str = None):
    """electronic_signature путь до картинки с электронной подписью"""
    context = tags
    doc = DocxTemplate(document.get_path())
    if electronic_signature is not None:
        context["электронная подпись"] = InlineImage(
            doc, electronic_signature, width=Pt(100), height=Pt(200)
        )
    doc.render(context)

    file_stream = io.BytesIO()
    # Save the .docx to the buffer
    doc.save(file_stream)
    # Reset the buffer's file-pointer to the beginning of the file
    file_stream.seek(0)
    return file_stream
