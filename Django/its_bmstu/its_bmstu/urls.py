from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

from its_bmstu import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v0/actions/', include('actions.urls'))
]

# На проде нужно настроить путь к медиа файлам
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
