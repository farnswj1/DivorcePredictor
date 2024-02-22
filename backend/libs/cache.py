import redis.asyncio as aioredis
from config import settings


redis = aioredis.from_url(
    settings.REDIS_URL,
    encoding='utf-8',
    decode_responses=True
)
