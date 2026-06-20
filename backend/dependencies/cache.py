from collections.abc import AsyncGenerator
from typing import Annotated

from fastapi import Depends

from libs.cache import Cache


async def get_cache() -> AsyncGenerator[Cache]:
    """Dependency to get cache client."""
    async with Cache() as cache:
        yield cache


type DependsCache = Annotated[Cache, Depends(get_cache)]
