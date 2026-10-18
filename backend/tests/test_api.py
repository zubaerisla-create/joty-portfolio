import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool

from app.main import app
from app.core.database import Base, get_db

# Use an in-memory SQLite database with StaticPool so all connections share the same memory database
SQLALCHEMY_TEST_DATABASE_URL = "sqlite:///:memory:"

test_engine = create_engine(
    SQLALCHEMY_TEST_DATABASE_URL,
    connect_args={"check_same_thread": False},
    poolclass=StaticPool,
)
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=test_engine)


@pytest.fixture(scope="session", autouse=True)
def setup_test_db():
    Base.metadata.create_all(bind=test_engine)
    from app.services.portfolio_service import seed_portfolio_data
    db = TestingSessionLocal()
    seed_portfolio_data(db)
    db.close()
    yield
    Base.metadata.drop_all(bind=test_engine)


def override_get_db():
    db = TestingSessionLocal()
    try:
        yield db
    finally:
        db.close()


app.dependency_overrides[get_db] = override_get_db
client = TestClient(app)


def test_root():
    response = client.get("/")
    assert response.status_code == 200
    assert "Jotirmoya" in response.json()["message"]


def test_health_check():
    response = client.get("/api/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "healthy"
    assert "service" in data


def test_get_portfolio():
    response = client.get("/api/portfolio")
    assert response.status_code == 200
    data = response.json()
    assert data["name"] == "Jotirmoya Bhakta Sarker"
    assert "Daffodil International University" in data["institution"]
    assert "about" in data
    assert len(data["timeline"]) >= 4
    assert data["community"]["club_name"] == "DIU Competitive Programming (CP) Club"


def test_get_skills():
    response = client.get("/api/skills")
    assert response.status_code == 200
    data = response.json()
    assert data["total_count"] >= 9
    categories = [g["category"] for g in data["groups"]]
    assert "Problem Solving" in categories
    assert "Development" in categories
    assert "Communication & Business" in categories


def test_get_research():
    response = client.get("/api/research")
    assert response.status_code == 200
    data = response.json()
    assert data["section_title"] == "Curiosity Today. Research Tomorrow."
    assert len(data["items"]) >= 3


def test_contact_validation_failure():
    # Missing required fields
    response = client.post("/api/contact", json={"name": "A"})
    assert response.status_code == 422


def test_contact_invalid_email():
    response = client.post(
        "/api/contact",
        json={
            "name": "Jane Doe",
            "email": "not-an-email",
            "subject": "Inquiry about research",
            "message": "Hello, I would love to connect and talk about your research aspirations.",
        },
    )
    assert response.status_code == 422


def test_contact_success_submission():
    payload = {
        "name": "Prof. Rahman",
        "email": "rahman@example.edu",
        "subject": "Research Collaboration Inquiry",
        "message": "We would like to invite you to our upcoming academic reading group on distributed systems.",
    }
    response = client.post("/api/contact", json=payload)
    assert response.status_code == 201
    data = response.json()
    assert data["success"] is True
    assert "id" in data
    assert data["message"] == "Thank you! Your message has been received safely."
