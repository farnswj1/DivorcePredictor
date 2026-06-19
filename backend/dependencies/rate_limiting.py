from typing import Any, Coroutine

from fastapi import HTTPException, Request, status
from pydantic import BaseModel, Field

from dependencies.cache import DependsCache


class RateLimiter(BaseModel):
    namespace: str = Field(min_length=1, max_length=100)
    limit: int = Field(ge=1, le=1_000_000)
    time: int = Field(ge=1, le=3_600)

    def __hash__(self) -> int:
        return hash((self.namespace, self.limit, self.time))

    async def __call__(
        self,
        request: Request,
        cache: DependsCache
    ) -> Coroutine[Any, Any, None]:
        """Verify that the user has not sent too many requests."""
        client_ip = request.client.host if request.client else ""
        key = f"ratelimiter:{self.namespace}:{client_ip}"
        count = await cache.incr(key)

        print(f"Count: {count}, Limit: {self.limit}, Time: {self.time}")
        if count == 1:
            await cache.expire(key, self.time)

        if count > self.limit:
            raise HTTPException(
                status_code=status.HTTP_429_TOO_MANY_REQUESTS,
                detail="Too many requests"
            )
