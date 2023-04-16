from django.urls import path

from actions import views

# api/v0/actions/...
urlpatterns = [
    path('', views.ActionList.as_view(), name='action_list'),
    path('partners/', views.PartnerList.as_view(), name='partners'),
    path('<slug:slug>/', views.ActionDetail.as_view(), name='action_detail'),
    path('<slug:slug>/photos', views.PhotoList.as_view(), name='action_photos')
]
