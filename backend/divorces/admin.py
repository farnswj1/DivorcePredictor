from django.contrib.admin import ModelAdmin, register
from django.utils.translation import gettext_lazy as _
from divorces.models import DivorceCase


# Register your models here.
@register(DivorceCase)
class IPAddressAdmin(ModelAdmin):
    pass
