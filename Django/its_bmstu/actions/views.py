from rest_framework import generics
from rest_framework import views
from rest_framework.response import Response

from actions.models import Action, Photo
from actions.pagination import ActionPagination, PhotoPagination
from actions.serializers import ActionListSerializer, ActionDetailSerializer, \
    PhotoSerializer


class ActionDetail(generics.RetrieveAPIView):
    queryset = Action.objects.all()
    serializer_class = ActionDetailSerializer
    lookup_field = 'slug'


class ActionList(generics.ListAPIView):
    queryset = Action.objects.all().order_by('-pk')
    serializer_class = ActionListSerializer
    pagination_class = ActionPagination


class PhotoList(views.APIView, PhotoPagination):
    def get(self, request, slug):
        photos = Photo.objects.filter(action__slug=slug).order_by('pk')
        photos = self.paginate_queryset(photos, request, view=self)
        serializer = PhotoSerializer(photos, many=True,
                                     context={'request': request})
        return self.get_paginated_response(serializer.data)
