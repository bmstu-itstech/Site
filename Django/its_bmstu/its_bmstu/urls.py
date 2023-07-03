from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

from its_bmstu import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v0/actions/', include('actions.urls')),

    # OpenAPI paths
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/docs/', SpectacularSwaggerView.as_view(url_name='schema'),
         name='docs'),
]

# На проде нужно настроить путь к медиа файлам
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
