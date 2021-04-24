from django.db import models

# Create your models here.
class Producer(models.Model):
    id = models.AutoField
    user_id = models.IntegerField()
    company_name = models.CharField(max_length=128)
    confirmed = models.BooleanField(default=False)

class UserInfo(models.Model):
    user_id = models.IntegerField()
    first_name = models.CharField(max_length=128)
    second_name = models.CharField(max_length=128)
    third_name = models.CharField(max_length=128)
    passport_series = models.CharField(max_length=4)
    passport_number = models.CharField(max_length=6)
    date_of_birth = models.DateField()

    def get_param(self, param_name):
        if param_name == 'Фамилия':
            return self.first_name
        if param_name == 'Имя':
            return self.second_name
        if param_name == 'Отчество':
            return self.third_name
        if param_name == 'Серия паспорта':
            return self.passport_series
        if param_name == 'Номер паспорта':
            return self.passport_number
        if param_name == 'Дата рождения':
            return self.date_of_birth
        return None