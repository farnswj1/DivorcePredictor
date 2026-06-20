from typing import Final

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from uvicorn.middleware.proxy_headers import ProxyHeadersMiddleware

from config import settings
from routes import router


app: Final[FastAPI] = FastAPI(
    title="Divorce Predictor API",
    description="This is the API for the Divorce Predictor application.",
    version="1.0.0",
    docs_url="/api/docs",
    redoc_url="/api/redoc",
    openapi_url="/api/openapi.json",
)
app.add_middleware(ProxyHeadersMiddleware, trusted_hosts=settings.allowed_hosts)
app.add_middleware(TrustedHostMiddleware, allowed_hosts=settings.allowed_hosts)
app.add_middleware(
    CORSMiddleware,
    allow_origin_regex=settings.cors_allow_origin_regex,
    allow_methods=["POST"],
)
app.include_router(router)
