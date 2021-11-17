from django.contrib import admin
from .models import User, IPAddress

# Register your models here.
admin.site.register((User, IPAddress))
