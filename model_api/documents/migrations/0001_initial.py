# Generated by Django 3.2 on 2021-04-23 21:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Document',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('doc_set_id', models.IntegerField()),
                ('doc_name', models.CharField(max_length=128)),
            ],
        ),
        migrations.CreateModel(
            name='DocumentSet',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(max_length=256)),
            ],
        ),
    ]
