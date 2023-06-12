from celery import Celery
from celery.schedules import crontab
import os


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

app = Celery('backend')
app.config_from_object('django.conf:settings', namespace='CELERY')
app.conf.beat_schedule = {
    'clean-ip-addresses-list': {
        'task': 'core.clean_ip_addresses_list',
        'schedule': crontab(minute='*/2')
    }
}
app.autodiscover_tasks()
