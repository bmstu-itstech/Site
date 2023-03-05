from django.contrib import admin
from django.utils.html import format_html

from actions.models import Action, Photo, SocialNetworkLink


class LinkAdmin(admin.TabularInline):
    model = SocialNetworkLink
    extra = 1


class PhotoAdmin(admin.TabularInline):
    model = Photo
    extra = 1
    template = 'admin/file_inputs.html'
    # При изменении полей нужно править tabular_image.js
    fields = ('photo', 'image_tag',)
    readonly_fields = ('image_tag',)

    def image_tag(self, obj):
        return format_html(
            '<img src="{}" width="150" height="150"/>'.format(obj.photo.url)
        )

    image_tag.short_description = 'Photo'


@admin.register(Action)
class ActionAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("title",)}
    save_on_top = True
    inlines = (LinkAdmin, PhotoAdmin,)
