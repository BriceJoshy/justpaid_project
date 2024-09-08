from django.contrib import admin
from .models import Tutor


@admin.register(Tutor)
class TutorAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "location",
        # "latitude",
        # "longitude",
        "subjects",
        "rating",
        "profile_pics",
    )
