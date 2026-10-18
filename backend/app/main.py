import logging
from contextlib import asynccontextmanager
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from slowapi import _rate_limit_exceeded_handler
from slowapi.errors import RateLimitExceeded

from app.core.config import settings
from app.core.database import Base, engine, SessionLocal
from app.core.rate_limiter import limiter
from app.api.api import api_router
from app.services.portfolio_service import seed_portfolio_data

# Configure logging
logging.basicConfig(
    level=logging.INFO if not settings.DEBUG else logging.DEBUG,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
)
logger = logging.getLogger("portfolio.main")


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: create tables and seed default portfolio data
    logger.info("Initializing database tables...")
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    try:
        seed_portfolio_data(db)
        logger.info("Portfolio database seeded successfully.")
    finally:
        db.close()
    yield
    # Shutdown
    logger.info("Shutting down application...")


app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    description="Clean, academic REST API backend for Jotirmoya Bhakta Sarker's personal portfolio.",
    docs_url="/docs",
    redoc_url="/redoc",
    lifespan=lifespan,
)

# SlowAPI Rate Limiting setup
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# Secure CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

# Mount API routes under /api
app.include_router(api_router, prefix="/api")


@app.get("/", tags=["Root"])
def root():
    return {
        "message": "Welcome to Jotirmoya Bhakta Sarker's Portfolio API",
        "documentation": "/docs",
        "health": "/api/health",
        "status": "online",
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host=settings.HOST, port=settings.PORT, reload=settings.DEBUG)
