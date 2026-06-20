import joblib
from pathlib import Path
from typing import ClassVar, Final

import pandas as pd
from sklearn.ensemble import RandomForestClassifier

from schemas import Answers


def _get_ml_model(path: str) -> RandomForestClassifier:
    """Load the machine learning model from the path."""
    model_path = Path("classifiers") / path
    return joblib.load(model_path)


class Classifier:
    """Classifier for predicting whether or not a marriage will last."""

    _model: ClassVar[RandomForestClassifier] = _get_ml_model("model.joblib")

    @staticmethod
    def predict(data: Answers) -> bool:
        """Predict whether or not a marriage will last based on the answers provided."""
        df = pd.DataFrame([data.model_dump()])
        return bool(Classifier._model.predict(df)[0])
