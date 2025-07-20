from django.urls import path
from .views import ProjectListAPIView, ContactMessageAPIView

urlpatterns = [
    path('projects/', ProjectListAPIView.as_view()),
    path('contact/', ContactMessageAPIView.as_view()),  # new contact endpoint
]
