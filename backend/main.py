from typing import Final

from fastapi import FastAPI

from core.app import create_app


app: Final[FastAPI] = create_app()
