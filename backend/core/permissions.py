from rest_framework.permissions import BasePermission
from django.utils import timezone
from core.models import IPAddress
from core.functions import get_client_ip
from datetime import timedelta


class HasPermittedIPAddress(BasePermission):
    def has_permission(self, request, view):
        current_time = timezone.now()
        client_ip = get_client_ip(request)
        ip_address, created = IPAddress.objects.get_or_create(ip_address=client_ip)

        if not created:
            if current_time <= ip_address.last_valid_request + timedelta(minutes=1):
                return False
            else:
                ip_address.last_valid_request = current_time
                ip_address.save()

        return True
