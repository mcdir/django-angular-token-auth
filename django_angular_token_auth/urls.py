from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.views.generic import TemplateView

from rest_framework import routers

from authentication.views import UserViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = patterns('',
    url(r'^admin/', include(admin.site.urls)),

    url(r'^api/v1/', include(router.urls)),
    url(r'^api/v1/auth/api/', include(
    	'rest_framework.urls', namespace='rest_framework'
    )),

    # Placeholder routes
    url(r'^api/v1/auth/login/', TemplateView.as_view()),
    url(r'^api/v1/auth/logout/', TemplateView.as_view()),
    url(r'^api/v1/auth/register/', TemplateView.as_view()),

    url(r'^.*$', TemplateView.as_view(template_name='index.html')),
)