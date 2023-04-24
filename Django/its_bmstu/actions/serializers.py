from django.http import request
from rest_framework import serializers

from .models import Action, Photo, SocialNetworkLink, Partner


class SocialNetworkLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialNetworkLink
        fields = ('name', 'url')


class PartnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Partner
        fields = ('name', 'url', 'icon')


class PhotoSerializer(serializers.ModelSerializer):
    width = serializers.IntegerField(source='get_width')
    height = serializers.IntegerField(source='get_height')

    class Meta:
        model = Photo
        fields = ('photo', 'width', 'height')


class ActionDetailSerializer(serializers.ModelSerializer):
    links = SocialNetworkLinkSerializer(many=True)
    partners = PartnerSerializer(many=True)

    class Meta:
        model = Action
        fields = ('title', 'description', 'short_description',
                  'main_organizer', 'links', 'partners', 'video', 'slug')


class ActionListSerializer(serializers.ModelSerializer):
    preview = serializers.SerializerMethodField()

    class Meta:
        model = Action
        fields = ('title', 'description', 'short_description', 'slug',
                  'preview')

    def get_preview(self, action):
        request = self.context.get('request')
        photo = Photo.objects.filter(action=action).order_by('pk').first()
        return request.build_absolute_uri(photo.photo.url)
