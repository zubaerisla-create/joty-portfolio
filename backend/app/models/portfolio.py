from sqlalchemy import Column, Integer, String, Text
from app.core.database import Base


class Skill(Base):
    __tablename__ = "skills"

    id = Column(Integer, primary_key=True, index=True)
    category = Column(String(50), nullable=False, index=True)  # Problem Solving, Development, Communication & Business
    title = Column(String(100), nullable=False)
    description = Column(String(255), nullable=True)
    badge = Column(String(50), nullable=True)
    order = Column(Integer, default=0)


class ResearchItem(Base):
    __tablename__ = "research_items"

    id = Column(Integer, primary_key=True, index=True)
    section = Column(String(50), nullable=False)  # Interests, Current Focus, Future Goal
    title = Column(String(150), nullable=False)
    description = Column(Text, nullable=False)
    status_label = Column(String(50), nullable=True)
    order = Column(Integer, default=0)


class TimelineMilestone(Base):
    __tablename__ = "timeline_milestones"

    id = Column(Integer, primary_key=True, index=True)
    period = Column(String(50), nullable=False)  # Present, Currently Exploring, Growing Beyond Code, Future Direction
    title = Column(String(150), nullable=False)
    subtitle = Column(String(150), nullable=True)
    description = Column(Text, nullable=False)
    accent_color = Column(String(20), default="pink")  # "pink" or "yellow"
    order = Column(Integer, default=0)
