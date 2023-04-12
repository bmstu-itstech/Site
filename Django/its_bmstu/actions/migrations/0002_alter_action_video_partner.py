# Generated by Django 4.1.7 on 2023-04-12 14:25

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('actions', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='action',
            name='video',
            field=models.FileField(blank=True, upload_to='actions/video', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['MOV', 'avi', 'mp4', 'webm', 'mkv'])], verbose_name='Видео'),
        ),
        migrations.CreateModel(
            name='Partner',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='Название')),
                ('icon', models.ImageField(unique=True, upload_to='actions/photo_partner', verbose_name='Иконка')),
                ('url', models.URLField(max_length=255, verbose_name='Ссылка')),
                ('actions', models.ManyToManyField(related_name='partners', to='actions.action')),
            ],
            options={
                'verbose_name': 'Партнёр',
                'verbose_name_plural': 'Партнёры',
            },
        ),
    ]