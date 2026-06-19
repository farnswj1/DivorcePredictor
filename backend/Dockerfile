FROM ghcr.io/astral-sh/uv:python3.13-bookworm
ENV PYTHONUNBUFFERED=1
EXPOSE 8000
WORKDIR /opt/app

COPY pyproject.toml uv.lock ./
RUN uv sync --frozen
COPY . ./

ENTRYPOINT ["uv", "run"]
CMD ["fastapi", "run", "--workers", "4", "main.py"]
