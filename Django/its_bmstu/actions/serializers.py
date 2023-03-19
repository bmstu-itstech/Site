from rest_framework import serializers

from actions.models import Action, Photo


class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ('photo',)


class ActionDetailSerializer(serializers.ModelSerializer):
    photos = PhotoSerializer(many=True)

    class Meta:
        model = Action
        fields = ('title', 'description', 'short_description',
                  'main_organizer', 'video', 'photos', 'slug')


class ActionListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Action
        fields = ('title', 'description', 'short_description',
                  'slug')
