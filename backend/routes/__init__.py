from fastapi import APIRouter, Depends

from dependencies.rate_limiting import RateLimiter
from routes.divorces import router as divorces_router


router = APIRouter(
    prefix="/api",
    dependencies=[Depends(RateLimiter(namespace="api", limit=1, time=60))],
)
router.include_router(divorces_router)
