from django.urls import path
from . import views

urlpatterns = [
    path("api/project-info", views.start)
]
