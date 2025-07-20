from django.urls import path
from .views import ProjectListAPIView, ContactMessageAPIView, create_admin

urlpatterns = [
    path('projects/', ProjectListAPIView.as_view()),
    path('contact/', ContactMessageAPIView.as_view()),  # new contact endpoint
    path('create-admin/', create_admin)
]
