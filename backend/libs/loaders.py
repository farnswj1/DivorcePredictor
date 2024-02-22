from sklearn.ensemble import RandomForestClassifier
from pathlib import Path
import joblib


def get_ml_model() -> RandomForestClassifier:
    model_path = Path('classifiers') / 'model.joblib'
    return joblib.load(model_path)
