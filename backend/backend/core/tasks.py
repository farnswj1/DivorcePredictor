from django.utils import timezone
from celery import shared_task
from core.models import IPAddress
from datetime import timedelta
import logging

logger = logging.getLogger(__name__)


@shared_task(name="core.clean_ip_addresses_list")
def clean_ip_addresses_list():
    threshold = timezone.now() - timedelta(minutes=5)
    IPAddress.objects.filter(last_valid_request__lte=threshold).delete()
