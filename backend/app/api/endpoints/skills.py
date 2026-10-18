from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.schemas.portfolio import CategorizedSkillsResponse
from app.services.portfolio_service import get_categorized_skills

router = APIRouter()


@router.get("/skills", response_model=CategorizedSkillsResponse, summary="Get categorized skills", tags=["Skills"])
def get_skills(db: Session = Depends(get_db)):
    return get_categorized_skills(db)
