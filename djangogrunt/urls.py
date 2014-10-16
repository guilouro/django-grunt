from django.conf.urls import patterns, include, url
from django.contrib import admin
from core.views import HomeView, InnerView

urlpatterns = patterns('',
    # Examples:
    url(r'^$', HomeView.as_view(), name='home'),
    url(r'^inner/$', InnerView.as_view(), name='inner'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
)
