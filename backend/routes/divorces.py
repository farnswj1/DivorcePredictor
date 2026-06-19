from fastapi import APIRouter

from schemas import Answers
from libs.classifier import Classifier


router = APIRouter(tags=["Divorces"])


@router.post("/prediction")
async def predict(answers: Answers) -> bool:
    """Make a prediction based on the answers provided."""
    return Classifier.predict(answers)
