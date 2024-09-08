from rest_framework.routers import DefaultRouter
from tutor_database.api.urls import tutor_router
from django.urls import path, include


router = DefaultRouter()

# Tutors
router.registry.extend(tutor_router.registry)


urlpatterns = [
    path("", include(router.urls)),
]
