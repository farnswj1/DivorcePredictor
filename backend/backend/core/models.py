from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.
class User(AbstractUser):
    pass


class IPAddress(models.Model):
    ip_address = models.GenericIPAddressField()
    last_valid_request = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.ip_address

    class Meta:
        ordering = ("ip_address", "last_valid_request")
        verbose_name = "IP Address"
        verbose_name_plural = "IP Addresses"
