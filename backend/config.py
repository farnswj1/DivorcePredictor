from pydantic import RedisDsn, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings, case_sensitive=False):
    """Application settings loaded from environment variables."""

    allowed_hosts: tuple[str, ...]
    cors_allow_origin_regex: str

    redis_url: RedisDsn

    model_config = SettingsConfigDict(enable_decoding=False)

    @field_validator("allowed_hosts", mode="before")
    @staticmethod
    def parse_str_to_tuple(value: str) -> tuple[str, ...]:
        """Convert a space-delimited string into a tuple."""
        return tuple(value.split())


settings = Settings()  # type: ignore
