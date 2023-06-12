from django.conf import settings
import joblib
import os


def get_ml_model():
    if os.path.exists(settings.MODEL_DIR):
        try:
            return joblib.load(settings.MODEL_DIR)
        except:
            return None
    return None
