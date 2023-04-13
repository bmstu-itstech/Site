from django.core.validators import FileExtensionValidator
from django.db import models

from its_bmstu import settings


# TODO change the order of saving so as not to lose photos after validation
class Action(models.Model):
    class Meta:
        verbose_name = "Мероприятие"
        verbose_name_plural = "Мероприятия"

    title = models.CharField(verbose_name="Название",
                             max_length=255)
    slug = models.SlugField(verbose_name="Ссылка на веб-страницу мероприятия",
                            max_length=255, unique=True, db_index=True)
    description = models.TextField(verbose_name="Описание",
                                   blank=True)
    short_description = models.TextField(verbose_name="Краткое описание",
                                         blank=True)
    main_organizer = models.URLField(verbose_name="Главный организатор",
                                     max_length=255, blank=True)
    video = models.FileField(verbose_name="Видео",
                             upload_to='actions/videos',
                             blank=True,
                             validators=[FileExtensionValidator(
                                 allowed_extensions=['MOV', 'avi', 'mp4',
                                                     'webm', 'mkv'])])

    def __str__(self):
        return str(self.title)


class SocialNetworkLink(models.Model):
    class Meta:
        verbose_name = "Ссылка на посты в соц. сетях"
        verbose_name_plural = "Ссылки на посты в соц. сетях"

    action = models.ForeignKey("Action", on_delete=models.CASCADE,
                               related_name="links")
    name = models.CharField(verbose_name="Название соц. сети", max_length=127)
    url = models.URLField(verbose_name="Ссылка", max_length=255)


class Photo(models.Model):
    class Meta:
        verbose_name = "Фото"
        verbose_name_plural = "Фотографии"

    action = models.ForeignKey("Action", on_delete=models.CASCADE,
                               related_name="photos")

    photo = models.ImageField(verbose_name="Фотография",
                              upload_to='actions/photo',
                              blank=False, unique=True)

    def get_width(self):
        return self.photo.width

    def get_height(self):
        return self.photo.height
