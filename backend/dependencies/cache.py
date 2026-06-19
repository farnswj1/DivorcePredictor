from typing import Annotated, AsyncGenerator

from fastapi import Depends

from libs.cache import Cache


async def get_cache() -> AsyncGenerator[Cache, None]:
    """Dependency to get cache client."""
    async with Cache() as cache:
        yield cache


type DependsCache = Annotated[Cache, Depends(get_cache)]
