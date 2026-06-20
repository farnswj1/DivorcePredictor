from typing import ClassVar

from fastapi import Request
from pydantic import BaseModel, ConfigDict, Field

from core.exceptions import TooManyRequestsError
from dependencies.cache import DependsCache


class RateLimiter(BaseModel):
    """Rate limiter for the API that uses Redis as the storage backend."""

    namespace: str = Field(min_length=1, max_length=100)
    limit: int = Field(ge=1, le=1_000_000)
    time: int = Field(ge=1, le=3_600)

    model_config: ClassVar[ConfigDict] = ConfigDict(frozen=True)

    async def __call__(self, request: Request, cache: DependsCache) -> None:
        """Verify that the user has not sent too many requests."""
        client_ip = request.client.host if request.client else ""
        key = f"ratelimiter:{self.namespace}:{client_ip}"
        count = await cache.incr_with_expiry(key, self.time)

        if count > self.limit:
            raise TooManyRequestsError()
