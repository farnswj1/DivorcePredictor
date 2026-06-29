from typing import Final

from fastapi import APIRouter

from routes.v1.divorces import router as divorces_router


router: Final[APIRouter] = APIRouter(prefix="/v1")
router.include_router(divorces_router)
