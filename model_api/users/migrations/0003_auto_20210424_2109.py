# Generated by Django 3.2 on 2021-04-24 21:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_authtokens'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserInfoTags',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.IntegerField()),
                ('param_name', models.CharField(max_length=128)),
                ('param_value', models.CharField(max_length=128)),
            ],
            options={
                'unique_together': {('user_id', 'param_name')},
            },
        ),
        migrations.DeleteModel(
            name='UserInfo',
        ),
    ]