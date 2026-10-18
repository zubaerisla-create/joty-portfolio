from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.schemas.portfolio import PortfolioResponse
from app.services.portfolio_service import get_portfolio_overview

router = APIRouter()


@router.get("/portfolio", response_model=PortfolioResponse, summary="Get portfolio details", tags=["Portfolio"])
def get_portfolio(db: Session = Depends(get_db)):
    return get_portfolio_overview(db)
