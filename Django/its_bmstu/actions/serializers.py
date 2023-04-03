from rest_framework import serializers

from actions.models import Action, Photo, SocialNetworkLink, Partner


class SocialNetworkLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialNetworkLink
        fields = ('name', 'url')


class PartnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Partner
        fields = ('name', 'url', 'photo')


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
    class Meta:
        model = Action
        fields = ('title', 'description', 'short_description', 'slug')
