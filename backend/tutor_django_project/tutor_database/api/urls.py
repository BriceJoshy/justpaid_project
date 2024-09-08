from rest_framework.routers import DefaultRouter
from .views import TutorViewSet

tutor_router = DefaultRouter()
tutor_router.register(r"tutor_database", TutorViewSet)
