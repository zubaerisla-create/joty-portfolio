import html
from datetime import datetime
from pydantic import BaseModel, EmailStr, Field, field_validator


class ContactCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100, description="Full name of sender")
    email: EmailStr = Field(..., max_length=255, description="Valid email address")
    subject: str = Field(..., min_length=3, max_length=200, description="Subject of the message")
    message: str = Field(..., min_length=10, max_length=5000, description="Message body")

    @field_validator("name", "subject", "message", mode="before")
    @classmethod
    def sanitize_strings(cls, value: str) -> str:
        if isinstance(value, str):
            cleaned = value.strip()
            # Escape basic HTML to sanitize against stored XSS
            return html.escape(cleaned)
        return value


class ContactResponse(BaseModel):
    success: bool
    message: str
    id: int
    created_at: datetime

    model_config = {"from_attributes": True}
