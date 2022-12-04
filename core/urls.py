from django.urls import path
from core import views

urlpatterns = [
    path('', views.index, name='index'),
    path('main', views.main),
    path('main/<int:drain_id>', views.getDrainData),
    path('drains', views.getAllDrainData, name="drains"),
]
