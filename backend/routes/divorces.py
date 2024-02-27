from fastapi import APIRouter
from schemas import Answers
from libs.loaders import get_ml_model
import pandas as pd


MODEL = get_ml_model()

router = APIRouter(tags=['Divorces'])


@router.post('/prediction')
async def predict(answers: Answers) -> bool:
    """Make a prediction based on the answers provided."""
    data = pd.DataFrame([answers.model_dump()])
    prediction = bool(MODEL.predict(data)[0])
    return prediction
