# Generated by Django 3.2 on 2021-04-24 21:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_auto_20210424_2109'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userinfotags',
            name='param_name',
            field=models.CharField(max_length=256),
        ),
        migrations.AlterField(
            model_name='userinfotags',
            name='param_value',
            field=models.CharField(max_length=256),
        ),
    ]