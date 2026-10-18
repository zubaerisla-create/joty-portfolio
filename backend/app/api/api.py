from fastapi import APIRouter
from app.api.endpoints import health, portfolio, skills, research, contact

api_router = APIRouter()

api_router.include_router(health.router)
api_router.include_router(portfolio.router)
api_router.include_router(skills.router)
api_router.include_router(research.router)
api_router.include_router(contact.router)
