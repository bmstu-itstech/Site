from drf_spectacular.utils import extend_schema_view, extend_schema, \
    inline_serializer
from rest_framework import generics, status, serializers
from rest_framework import views

from actions.models import Action, Photo, Partner
from actions.pagination import ActionPagination, PhotoPagination, \
    PartnerPagination
from actions.serializers import ActionListSerializer, ActionDetailSerializer, \
    PhotoSerializer, PartnerSerializer


@extend_schema_view(
    get=extend_schema(
        summary="Получить информацию о мероприятии",
    )
)
class ActionDetail(generics.RetrieveAPIView):
    queryset = Action.objects.all()
    serializer_class = ActionDetailSerializer
    lookup_field = 'slug'


@extend_schema_view(
    get=extend_schema(
        summary="Получить список мероприятий",
    )
)
class ActionList(generics.ListAPIView):
    queryset = Action.objects.all().order_by('-pk')
    serializer_class = ActionListSerializer
    pagination_class = ActionPagination


@extend_schema_view(
    get=extend_schema(
        summary="Получить список партнеров",
    )
)
class PartnerList(generics.ListAPIView):
    queryset = Partner.objects.all()
    serializer_class = PartnerSerializer
    pagination_class = PartnerPagination


class PhotoList(views.APIView, PhotoPagination):
    @extend_schema(
        summary="Получить список фотографий",
        responses={
            status.HTTP_200_OK: inline_serializer(
                name='{}',
                fields={
                    # 'title': serializers.CharField(),
                    "count": serializers.IntegerField(),
                    "next": serializers.URLField(),
                    "previous": serializers.URLField(),
                    "results": PhotoSerializer(),
                }
            ),
        }
    )
    def get(self, request, slug):
        photos = Photo.objects.filter(action__slug=slug).order_by('pk')
        photos = self.paginate_queryset(photos, request, view=self)
        serializer = PhotoSerializer(photos, many=True,
                                     context={'request': request})
        return self.get_paginated_response(serializer.data)
