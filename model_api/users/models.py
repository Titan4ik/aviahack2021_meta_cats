from django.db import models

# Create your models here.
class Producer(models.Model):
    id = models.AutoField
    user_id = models.IntegerField()
    company_name = models.CharField(max_length=128)
    confirmed = models.BooleanField(default=False)


class UserInfoTags(models.Model):
    class Meta:
        unique_together = (("user_id", "param_name"),)

    user_id = models.IntegerField()
    param_name = models.CharField(max_length=256)
    param_value = models.CharField(max_length=256)


def get_user_tags(user_id):
    tags = UserInfoTags.objects.filter(user_id=user_id)
    return {tag.param_name: tag.param_value for tag in tags}


class AuthTokens(models.Model):
    user_id = models.IntegerField()
    access_token = models.CharField(max_length=256)
    refresh_token = models.CharField(max_length=256)
