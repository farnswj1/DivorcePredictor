from typing import Final

from fastapi import APIRouter

from libs.classifier import Classifier
from schemas import Answers


router: Final[APIRouter] = APIRouter(tags=["Divorces"])


@router.post("/prediction")
async def predict(answers: Answers) -> bool:
    """Make a prediction based on the answers provided."""
    return Classifier.predict(answers)
