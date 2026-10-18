from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.schemas.portfolio import ResearchResponse
from app.services.portfolio_service import get_research_data

router = APIRouter()


@router.get("/research", response_model=ResearchResponse, summary="Get research interests and focus", tags=["Research"])
def get_research(db: Session = Depends(get_db)):
    return get_research_data(db)
