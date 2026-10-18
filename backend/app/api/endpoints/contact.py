from fastapi import APIRouter, Depends, Request, status, HTTPException
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.core.config import settings
from app.core.rate_limiter import limiter
from app.schemas.contact import ContactCreate, ContactResponse
from app.services.contact_service import save_contact_message

router = APIRouter()


@router.post(
    "/contact",
    response_model=ContactResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Submit contact message",
    tags=["Contact"],
)
@limiter.limit(settings.RATE_LIMIT_CONTACT)
def submit_contact(
    request: Request,
    payload: ContactCreate,
    db: Session = Depends(get_db),
):
    try:
        client_ip = request.client.host if request.client else None
        response = save_contact_message(db, payload, client_ip=client_ip)
        return response
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An error occurred while saving your message. Please try again later.",
        ) from e
