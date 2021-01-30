from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.api_overview),
    path('goals/list/', views.list_goals),
    path('goals/view/<str:pk>/', views.view_goal),
    path('goals/create/', views.create_goal),
    path('goals/update/<str:pk>/', views.update_goal),
    path('goals/delete/<str:pk>/', views.delete_goal),
]
