from rest_framework import generics, serializers, viewsets

from actions.models import Action
from actions.pagination import ActionPagination
from actions.serializers import ActionListSerializer, ActionDetailSerializer


class ActionDetail(generics.RetrieveAPIView):
    queryset = Action.objects.all()
    serializer_class = ActionDetailSerializer
    lookup_field = 'slug'


class ActionList(generics.ListAPIView):
    queryset = Action.objects.all()
    serializer_class = ActionListSerializer
    pagination_class = ActionPagination
