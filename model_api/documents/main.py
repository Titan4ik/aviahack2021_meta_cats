from docxtpl import DocxTemplate
from docxtpl import InlineImage
from docxtpl import Listing
from docx.shared import Pt
from documents.models import Document
import mammoth
import io


def fill_doc(document: Document, tags: dict, electronic_signature: str = None) -> str:
    """electronic_signature путь до картинки с электронной подписью"""
    context = tags
    doc = DocxTemplate(document.get_path())
    if electronic_signature is not None:
        context["image"] = InlineImage(
            doc, electronic_signature, width=Pt(100), height=Pt(200)
        )
    doc.render(context)

    file_stream = io.BytesIO()
    doc.save(file_stream)
    file_stream.seek(0)
    return file_stream
    

def word2html(word):
    style_map = """
        p[style-name='Section Title'] => h1:fresh
        p[style-name='Subsection Title'] => h2:fresh
        """
    return mammoth.convert_to_html(word, style_map=style_map) # возврашает html страницу
