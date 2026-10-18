import logging
from typing import Optional
from sqlalchemy.orm import Session
from app.models.contact import ContactMessage
from app.schemas.contact import ContactCreate, ContactResponse

logger = logging.getLogger("portfolio.contact")


def save_contact_message(
    db: Session,
    payload: ContactCreate,
    client_ip: Optional[str] = None,
) -> ContactResponse:
    """Validate, sanitize, and save a contact form submission to the database."""
    message_record = ContactMessage(
        name=payload.name,
        email=str(payload.email),
        subject=payload.subject,
        message=payload.message,
        ip_address=client_ip,
    )

    db.add(message_record)
    db.commit()
    db.refresh(message_record)

    logger.info(
        "Saved new contact message ID %s from email domain @%s (IP: %s)",
        message_record.id,
        str(payload.email).split("@")[-1] if "@" in str(payload.email) else "unknown",
        client_ip or "unknown",
    )

    return ContactResponse(
        success=True,
        message="Thank you! Your message has been received safely.",
        id=message_record.id,
        created_at=message_record.created_at,
    )
