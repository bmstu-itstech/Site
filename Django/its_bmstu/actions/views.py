from drf_spectacular.utils import extend_schema_view, extend_schema, \
    inline_serializer, OpenApiParameter
from rest_framework import generics, status, serializers
from rest_framework import views

from actions.models import Action, Photo, Partner
from actions.pagination import ActionPagination, PhotoPagination, \
    PartnerPagination
from actions.serializers import ActionListSerializer, ActionDetailSerializer, \
    PhotoSerializer, PartnerSerializer

# -------- FOR DOCS --------
SLUG_PARAMETER = OpenApiParameter(name='slug',
                                  location=OpenApiParameter.PATH,
                                  description='Название мероприятия',
                                  required=True,
                                  type=str
                                  )
PAGE_PARAMETER = OpenApiParameter(name='page',
                                  location=OpenApiParameter.QUERY,
                                  description='Номер страницы',
                                  required=False,
                                  type=int
                                  )
PAGE_SIZE_PARAMETER = OpenApiParameter(name='page_size',
                                       location=OpenApiParameter.QUERY,
                                       description='Количество элементов '
                                                   'на странице',
                                       required=False,
                                       type=int
                                       )


@extend_schema_view(
    get=extend_schema(
        summary="Получить информацию о мероприятии",
        parameters=[SLUG_PARAMETER]
    )
)
class ActionDetail(generics.RetrieveAPIView):
    queryset = Action.objects.all()
    serializer_class = ActionDetailSerializer
    lookup_field = 'slug'


@extend_schema_view(
    get=extend_schema(
        summary="Получить список мероприятий",
        parameters=[PAGE_PARAMETER, PAGE_SIZE_PARAMETER]
    )
)
class ActionList(generics.ListAPIView):
    queryset = Action.objects.all().order_by('-pk')
    serializer_class = ActionListSerializer
    pagination_class = ActionPagination


@extend_schema_view(
    get=extend_schema(
        summary="Получить список партнеров",
        parameters=[PAGE_PARAMETER, PAGE_SIZE_PARAMETER]
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
                name='PaginatedPhotosList',
                fields={
                    # TODO Examples
                    "count": serializers.IntegerField(default=10),
                    "next": serializers.URLField(
                        default="https://api.example.org/accounts/?page=4"
                    ),
                    "previous": serializers.URLField(
                        default="https://api.example.org/accounts/?page=2"
                    ),
                    "results": PhotoSerializer(
                        default={'photo': 'https://api.example.org/'
                                          'actions/photo/8_FYAHEaq.jpg',
                                 'width': 1920, 'height': 1080},
                    ),
                }
            ),
        },
        parameters=[SLUG_PARAMETER, PAGE_PARAMETER, PAGE_SIZE_PARAMETER],
    )
    def get(self, request, slug):
        photos = Photo.objects.filter(action__slug=slug).order_by('pk')
        photos = self.paginate_queryset(photos, request, view=self)
        serializer = PhotoSerializer(photos, many=True,
                                     context={'request': request})
        return self.get_paginated_response(serializer.data)
