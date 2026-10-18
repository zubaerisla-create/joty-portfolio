from typing import List
from sqlalchemy.orm import Session
from app.models.portfolio import Skill, ResearchItem, TimelineMilestone
from app.schemas.portfolio import (
    PortfolioResponse,
    AboutSchema,
    CommunitySchema,
    SocialLinkSchema,
    CategorizedSkillsResponse,
    SkillCategoryGroup,
    SkillItemSchema,
    ResearchResponse,
    ResearchItemSchema,
    TimelineMilestoneSchema,
)

DEFAULT_SKILLS = [
    # Problem Solving
    {"category": "Problem Solving", "title": "Analytical Thinking", "description": "Breaking down intricate challenges into fundamental principles and solvable elements.", "badge": "Core Focus", "order": 1},
    {"category": "Problem Solving", "title": "Logical Reasoning", "description": "Formulating structured algorithmic pathways and systematically evaluating edge conditions.", "badge": "Core Focus", "order": 2},
    {"category": "Problem Solving", "title": "Structured Problem-Solving", "description": "Approaching software bugs and algorithmic tasks with patient step-by-step methodologies.", "badge": "Practice", "order": 3},

    # Development
    {"category": "Development", "title": "Actively Learning Software Development", "description": "Hands-on exploration of clean code, architecture patterns, and web foundations.", "badge": "In Progress", "order": 4},
    {"category": "Development", "title": "Exploring Programming & SE Concepts", "description": "Studying data structures, modularity, object-oriented principles, and version control.", "badge": "Foundation", "order": 5},
    {"category": "Development", "title": "Building Practical Technical Knowledge", "description": "Translating theory into tangible mini-projects, debugging workflows, and tools.", "badge": "Applied", "order": 6},

    # Communication & Business
    {"category": "Communication & Business", "title": "English Communication", "description": "Articulating ideas clearly in written and verbal forms for global collaboration.", "badge": "Interpersonal", "order": 7},
    {"category": "Communication & Business", "title": "Business Mindset", "description": "Understanding user value, real-world context, and the economic purpose of software.", "badge": "Perspective", "order": 8},
    {"category": "Communication & Business", "title": "Team Collaboration", "description": "Active listening, peer programming, knowledge exchange, and cooperative problem solving.", "badge": "Teamwork", "order": 9},
]

DEFAULT_RESEARCH = [
    {
        "section": "Research Interests",
        "title": "Emerging Software Architectures & Intelligent Systems",
        "description": "Currently exploring academic survey papers and identifying specific domains of interest. Specific focus areas will be updated as coursework and literature reading advance.",
        "status_label": "To Be Updated",
        "order": 1,
    },
    {
        "section": "Current Focus",
        "title": "Learning Research Methodology & Technical Literature Review",
        "description": "Reading foundational computer science papers, learning how to formulate research hypotheses, and understanding rigorous evaluation benchmarks.",
        "status_label": "Active Study",
        "order": 2,
    },
    {
        "section": "Future Goal",
        "title": "Publishing Peer-Reviewed Research & Practical Impact",
        "description": "Aspiring to collaborate under faculty mentorship at Daffodil International University, tackle a genuine computational inquiry, and contribute to an indexed publication.",
        "status_label": "Long-Term Aspiration",
        "order": 3,
    },
]

DEFAULT_TIMELINE = [
    {
        "period": "Present",
        "title": "BSc in Software Engineering",
        "subtitle": "Daffodil International University (DIU)",
        "description": "Immersed in undergraduate core coursework: data structures, discrete mathematics, software engineering methodologies, and academic discipline.",
        "accent_color": "pink",
        "order": 1,
    },
    {
        "period": "Currently Exploring",
        "title": "Algorithmic Problem Solving & Modern Development",
        "subtitle": "Self-Directed Learning & Club Activities",
        "description": "Deepening analytical reasoning through daily problem practice, building foundational full-stack applications, and exploring developer toolchains.",
        "accent_color": "yellow",
        "order": 2,
    },
    {
        "period": "Growing Beyond Code",
        "title": "Communication, Business Thinking & Collaboration",
        "subtitle": "Holistic Engineering Development",
        "description": "Refining professional English fluency, learning product-driven thinking, and actively engaging in student community interactions.",
        "accent_color": "pink",
        "order": 3,
    },
    {
        "period": "Future Direction",
        "title": "Research Exploration & Continuous Engineering Growth",
        "subtitle": "Long-Term Vision",
        "description": "Advancing toward research paper reading groups, undergraduate research mentorship, and high-standard software engineering craftsmanship.",
        "accent_color": "yellow",
        "order": 4,
    },
]


def seed_portfolio_data(db: Session):
    """Seed initial skills, research, and timeline data if tables are empty."""
    if db.query(Skill).count() == 0:
        for s in DEFAULT_SKILLS:
            db.add(Skill(**s))
        db.commit()

    if db.query(ResearchItem).count() == 0:
        for r in DEFAULT_RESEARCH:
            db.add(ResearchItem(**r))
        db.commit()

    if db.query(TimelineMilestone).count() == 0:
        for t in DEFAULT_TIMELINE:
            db.add(TimelineMilestone(**t))
        db.commit()


def get_categorized_skills(db: Session) -> CategorizedSkillsResponse:
    seed_portfolio_data(db)
    skills = db.query(Skill).order_by(Skill.order).all()

    category_tags = {
        "Problem Solving": "Analytical mindset, algorithmic curiosity, and structured thinking.",
        "Development": "Foundations of programming, modularity, and applied engineering.",
        "Communication & Business": "Interpersonal clarity, user perspective, and collaborative spirit.",
    }

    groups = []
    for cat_name, tagline in category_tags.items():
        items = [s for s in skills if s.category == cat_name]
        groups.append(
            SkillCategoryGroup(
                category=cat_name,
                tagline=tagline,
                items=[SkillItemSchema.model_validate(item) for item in items],
            )
        )

    return CategorizedSkillsResponse(
        groups=groups,
        total_count=len(skills),
    )


def get_research_data(db: Session) -> ResearchResponse:
    seed_portfolio_data(db)
    items = db.query(ResearchItem).order_by(ResearchItem.order).all()
    return ResearchResponse(
        section_title="Curiosity Today. Research Tomorrow.",
        philosophy=(
            "Research is not about having all the answers at the beginning; it is about cultivating "
            "the rigor to ask precise questions. As an undergraduate student, I am investing time in "
            "reading foundational literature, understanding methodology, and preparing to make genuine contributions."
        ),
        items=[ResearchItemSchema.model_validate(item) for item in items],
    )


def get_portfolio_overview(db: Session) -> PortfolioResponse:
    seed_portfolio_data(db)
    milestones = db.query(TimelineMilestone).order_by(TimelineMilestone.order).all()

    return PortfolioResponse(
        name="Jotirmoya Bhakta Sarker",
        tagline="Software Engineering Student. Problem Solver. Future Researcher.",
        supporting_text=(
            "I’m pursuing my BSc in Software Engineering at Daffodil International University, "
            "building my problem-solving skills, exploring software development, and working "
            "toward contributing to research."
        ),
        institution="Daffodil International University",
        degree="B.Sc. in Software Engineering",
        availability_status="Undergraduate Student • Open to Collaborative Learning",
        about=AboutSchema(
            summary=(
                "I’m a Software Engineering student at Daffodil International University with a growing "
                "interest in problem solving, software development, and academic research. I enjoy learning "
                "new technologies, strengthening my analytical thinking, and exploring how software can "
                "solve meaningful problems."
            ),
            extended=(
                "Beyond technical learning, I value communication, business thinking, and collaboration. "
                "My long-term goal is to grow as a software engineer and work toward publishing meaningful research."
            ),
            focus_areas=[
                "Analytical Problem Solving",
                "Software Engineering Principles",
                "Academic Literature Exploration",
                "Product & Business Context",
                "Peer Collaboration",
            ],
            current_status="Actively attending lectures, participating in CP club sessions, and learning web technologies.",
        ),
        timeline=[TimelineMilestoneSchema.model_validate(m) for m in milestones],
        community=CommunitySchema(
            club_name="DIU Competitive Programming (CP) Club",
            university="Daffodil International University",
            tagline="Sharpening logic through peer problem solving and algorithmic curiosity.",
            description=(
                "Active member participating in peer problem solving, algorithmic discussions, and code review circles. "
                "The club environment provides an inspiring arena to exercise disciplined thinking, demystify data structures, "
                "and appreciate alternative solutions from peers."
            ),
            core_values=[
                "Algorithmic Discipline",
                "Structured Reasoning",
                "Constructive Peer Review",
                "Continuous Habit of Learning",
            ],
        ),
        social_links=[
            SocialLinkSchema(platform="LinkedIn", url="https://linkedin.com", label="LinkedIn", is_active=True),
            SocialLinkSchema(platform="GitHub", url="https://github.com", label="GitHub", is_active=True),
            SocialLinkSchema(platform="Email", url="mailto:jotirmoya.swe@diu.edu.bd", label="Email", is_active=True),
            SocialLinkSchema(platform="DIU Portal", url="https://daffodilvarsity.edu.bd", label="Daffodil International University", is_active=True),
        ],
    )
