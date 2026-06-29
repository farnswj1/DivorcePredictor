from typing import Final

from fastapi import APIRouter, Depends

from dependencies.rate_limiting import RateLimiter
from routes.v1 import router as v1_router


router: Final[APIRouter] = APIRouter(
    prefix="/api",
    dependencies=[Depends(RateLimiter(namespace="api", limit=1, time=60))],
)
router.include_router(v1_router)
