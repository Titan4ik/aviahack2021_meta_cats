from django.db import models
from datetime import datetime
from model_api.settings import STATICFILES_DIRS
import os


class ElectronicApplication(models.Model):
    id = models.AutoField
    doc_set_id = models.IntegerField()
    completed_date = models.DateField(default=datetime.now)
    consumer_id = models.IntegerField(blank=True, null=True)


class ElectronicApplicationDocument(models.Model):
    app_id = models.IntegerField()
    file_name = models.CharField(max_length=128)

    def get_path(self):
        path = os.path.join(
            STATICFILES_DIRS[0],
            "electronic_application",
            f"{self.app_id}",
            self.file_name,
        )
        return path

    def save_file(self, file_data):
        path = os.path.join(
            STATICFILES_DIRS[0], "electronic_application", f"{self.app_id}"
        )
        try:
            os.mkdir(path)
        except OSError:
            ...

        path = os.path.join(path, self.file_name)
        print(path)
        with open(path, "wb") as fout:
            fout.write(file_data)

    def open_file(self):
        path = os.path.join(
            STATICFILES_DIRS[0],
            "electronic_application",
            f"{self.app_id}",
            self.file_name,
        )
        return open(path, "rb")

