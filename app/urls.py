from django.urls import path
from . import views


urlpatterns = [
	path('', views.members, name="members"),
 path('carInfo/', views.carInfo, name='carInfo'),
	]