# Generated by Django 3.2 on 2023-05-05 08:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('userAuth', '0002_auto_20230504_2200'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='id_user',
        ),
    ]