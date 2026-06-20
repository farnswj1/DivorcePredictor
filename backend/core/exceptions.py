from fastapi import HTTPException, status


class TooManyRequestsError(HTTPException):
    """Exception raised when too many requests occurred."""

    def __init__(self) -> None:
        super().__init__(
            status_code=status.HTTP_429_TOO_MANY_REQUESTS,
            detail="Too many requests",
        )
