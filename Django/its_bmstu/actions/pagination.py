from rest_framework.pagination import PageNumberPagination

ACTIONS_PAGINATION_SIZE = 5
PHOTOS_PAGINATION_SIZE = 15


class ActionPagination(PageNumberPagination):
    page_size = ACTIONS_PAGINATION_SIZE
    page_size_query_param = 'page_size'


class PhotoPagination(PageNumberPagination):
    page_size = PHOTOS_PAGINATION_SIZE
    page_size_query_param = 'page_size'
