from docxtpl import DocxTemplate
from docxtpl import InlineImage
from docxtpl import Listing
from docx.shared import Pt
# myimage = InlineImage(tpl,'test_files/python_logo.png',width=Mm(20))

available_tags = {'tag_1', 'tag_2', 'tag_4', 'image'}

doc = DocxTemplate("data.docx")
tags_in_docx = doc.get_undeclared_template_variables()

unavailable_tags = set(tags_in_docx)-set(available_tags)
print("Данные теги не доступны:", unavailable_tags)

#тут всякие фишечки
context = {**{ 'tag_1' : "INSERT TEXT" }, **{'tag_6' : '{{ tag_6 }}'}, **{'image' : InlineImage(doc,'dsdsa.svg',width=Pt(100), height=Pt(200))}}
doc.render(context)
doc.save("generated_doc.docx")