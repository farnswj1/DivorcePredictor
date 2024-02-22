from fastapi import APIRouter, Depends
from fastapi_limiter.depends import RateLimiter
from routes.divorces import router as divorces_router


router = APIRouter(
    prefix='/api',
    dependencies=[Depends(RateLimiter(times=1, minutes=1))]
)
router.include_router(divorces_router)
