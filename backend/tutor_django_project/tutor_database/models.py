from django.db import models
from geopy.geocoders import Nominatim


class Tutor(models.Model):
    name = models.CharField(max_length=80)
    location = models.CharField(max_length=255)
    latitude = models.FloatField(null=True, blank=True)
    longitude = models.FloatField(null=True, blank=True)
    subjects = models.CharField(max_length=255)
    rating = models.DecimalField(max_digits=3, decimal_places=2)
    profile_pics = models.ImageField(upload_to="tutor_profiles/", null=True, blank=True)

    def save(self, *args, **kwargs):
        if self.location and (not self.latitude or not self.longitude):
            geolocator = Nominatim(user_agent="tutor_locator")
            location = geolocator.geocode(self.location)
            if location:
                self.latitude = location.latitude
                self.longitude = location.longitude
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name
