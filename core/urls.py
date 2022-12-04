from django.urls import path
from core import views

urlpatterns = [
    path('', views.index, name='index'),
    path('main', views.main),
    path('drains/', views.getAllDrainData),
    path('sidebar', views.sidebar),
]
