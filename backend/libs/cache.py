from typing import Self

from redis.asyncio import ConnectionPool, Redis

from config import settings


_pool = ConnectionPool.from_url(str(settings.redis_url), decode_responses=True)


class Cache:
    """Cache client wrapper for async operations."""

    def __init__(self) -> None:
        self._client = Redis(connection_pool=_pool)

    async def expire(self, key: str, time: int) -> None:
        """Set the key's expiry time."""
        await self._client.expire(key, time)

    async def incr(self, key: str) -> int:
        """Increment the key's value by 1. If the key doesn't exist, the value is set to 1."""
        return int(await self._client.incrby(key))

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(self, *args, **kwargs) -> None:
        await self._client.aclose()
