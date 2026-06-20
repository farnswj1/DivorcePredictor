from typing import Annotated

from pydantic import BaseModel, Field


type Rating = Annotated[int, Field(ge=1, le=5)]


class Answers(BaseModel):
    """Answers to the divorce prediction questionnaire."""

    q01: Rating
    q02: Rating
    q03: Rating
    q04: Rating
    q05: Rating
    q06: Rating
    q07: Rating
    q08: Rating
    q09: Rating
    q10: Rating
    q11: Rating
    q12: Rating
    q13: Rating
    q14: Rating
    q15: Rating
    q16: Rating
    q17: Rating
    q18: Rating
    q19: Rating
    q20: Rating
    q21: Rating
    q22: Rating
    q23: Rating
    q24: Rating
    q25: Rating
    q26: Rating
    q27: Rating
    q28: Rating
    q29: Rating
    q30: Rating
    q31: Rating
    q32: Rating
    q33: Rating
    q34: Rating
    q35: Rating
    q36: Rating
    q37: Rating
    q38: Rating
    q39: Rating
    q40: Rating
    q41: Rating
    q42: Rating
    q43: Rating
    q44: Rating
    q45: Rating
    q46: Rating
    q47: Rating
    q48: Rating
    q49: Rating
    q50: Rating
    q51: Rating
    q52: Rating
    q53: Rating
    q54: Rating
