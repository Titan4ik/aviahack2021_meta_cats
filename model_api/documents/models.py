from django.db import models
from model_api.settings import STATICFILES_DIRS
import os
import json
# Create your models here.
STATICFILES_PATH = STATICFILES_DIRS[0]


class Document(models.Model):
    id = models.AutoField
    doc_set_id = models.IntegerField()
    doc_name = models.CharField(max_length=128)

    def get_name(self):
        filename, file_extension = os.path.splitext(self.doc_name)
        return filename

    def get_path(self):
        path = os.path.join(STATICFILES_PATH,'documents', f'{self.doc_set_id}',self.doc_name)
        return path

    def save_file(self, file_data):
        path = os.path.join(STATICFILES_PATH,'documents', f'{self.doc_set_id}')
        try:
            os.mkdir(path)
        except OSError:
            ...

        path = os.path.join(path, self.doc_name)
        print(path)
        with open(path, 'wb') as fout:
            fout.write(file_data)

    def open_file(self):
        path = os.path.join(STATICFILES_PATH,'documents', f'{self.doc_set_id}',self.doc_name)
        return open(path, 'rb')



class DocumentSet(models.Model):
    id = models.AutoField
    producer_id = models.IntegerField(default=None)
    description = models.CharField(max_length=256)

def save_tags(doc_set_id, tags):
    path = os.path.join(STATICFILES_PATH,'documents', f'{doc_set_id}')
    try:
        os.mkdir(path)
    except OSError:
        ...
    path = os.path.join(path,'tags.json')
    with open(path, 'w', encoding='utf-8') as outfile:
        json.dump(tags, outfile)

def load_tags(doc_set_id):
    path = os.path.join(STATICFILES_PATH,'documents', f'{doc_set_id}','tags.json')
    with open(path, 'r', encoding='ascii') as outfile:
        tags = json.load(outfile)
    return tags

