from django.conf.urls import patterns, include, url
from django.contrib import admin

from rest_framework import routers

from authentication.views import GroupViewSet, UserViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)

urlpatterns = patterns('',
    url(r'^admin/', include(admin.site.urls)),

    url(r'^', include(router.urls)),
    url(r'^auth/api/', include('rest_framework.urls', namespace='rest_framework')),
)