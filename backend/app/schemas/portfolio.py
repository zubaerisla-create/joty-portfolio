from typing import List, Optional
from pydantic import BaseModel


class SkillItemSchema(BaseModel):
    id: Optional[int] = None
    category: str
    title: str
    description: Optional[str] = None
    badge: Optional[str] = None
    order: int = 0

    model_config = {"from_attributes": True}


class SkillCategoryGroup(BaseModel):
    category: str
    tagline: str
    items: List[SkillItemSchema]


class CategorizedSkillsResponse(BaseModel):
    groups: List[SkillCategoryGroup]
    total_count: int


class ResearchItemSchema(BaseModel):
    id: Optional[int] = None
    section: str
    title: str
    description: str
    status_label: Optional[str] = None
    order: int = 0

    model_config = {"from_attributes": True}


class ResearchResponse(BaseModel):
    section_title: str = "Curiosity Today. Research Tomorrow."
    philosophy: str
    items: List[ResearchItemSchema]


class TimelineMilestoneSchema(BaseModel):
    id: Optional[int] = None
    period: str
    title: str
    subtitle: Optional[str] = None
    description: str
    accent_color: str = "pink"
    order: int = 0

    model_config = {"from_attributes": True}


class SocialLinkSchema(BaseModel):
    platform: str
    url: Optional[str] = None
    label: str
    is_active: bool = True


class CommunitySchema(BaseModel):
    club_name: str
    university: str
    tagline: str
    description: str
    core_values: List[str]


class AboutSchema(BaseModel):
    summary: str
    extended: str
    focus_areas: List[str]
    current_status: str


class PortfolioResponse(BaseModel):
    name: str
    tagline: str
    supporting_text: str
    institution: str
    degree: str
    availability_status: str
    about: AboutSchema
    timeline: List[TimelineMilestoneSchema]
    community: CommunitySchema
    social_links: List[SocialLinkSchema]
