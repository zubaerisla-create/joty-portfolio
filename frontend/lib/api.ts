import {
  PortfolioData,
  CategorizedSkillsResponse,
  ResearchResponse,
  ContactPayload,
  ContactResponse,
} from "@/types/portfolio";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export const FALLBACK_PORTFOLIO: PortfolioData = {
  name: "Jotirmoya Bhakta Sarker",
  tagline: "Software Engineering Student. Problem Solver. Future Researcher.",
  supporting_text:
    "I’m pursuing my BSc in Software Engineering at Daffodil International University, building my problem-solving skills, exploring software development, and working toward contributing to research.",
  institution: "Daffodil International University",
  degree: "B.Sc. in Software Engineering",
  availability_status: "Undergraduate Student • Open to Collaborative Learning",
  about: {
    summary:
      "I’m a Software Engineering student at Daffodil International University with a growing interest in problem solving, software development, and academic research. I enjoy learning new technologies, strengthening my analytical thinking, and exploring how software can solve meaningful problems.",
    extended:
      "Beyond technical learning, I value communication, business thinking, and collaboration. My long-term goal is to grow as a software engineer and work toward publishing meaningful research.",
    focus_areas: [
      "Analytical Problem Solving",
      "Software Engineering Principles",
      "Academic Literature Exploration",
      "Product & Business Context",
      "Peer Collaboration",
    ],
    current_status:
      "Actively attending lectures, participating in CP club sessions, and learning web technologies.",
  },
  timeline: [
    {
      period: "Present",
      title: "BSc in Software Engineering",
      subtitle: "Daffodil International University (DIU)",
      description:
        "Immersed in undergraduate core coursework: data structures, discrete mathematics, software engineering methodologies, and academic discipline.",
      accent_color: "pink",
      order: 1,
    },
    {
      period: "Currently Exploring",
      title: "Algorithmic Problem Solving & Modern Development",
      subtitle: "Self-Directed Learning & Club Activities",
      description:
        "Deepening analytical reasoning through daily problem practice, building foundational full-stack applications, and exploring developer toolchains.",
      accent_color: "yellow",
      order: 2,
    },
    {
      period: "Growing Beyond Code",
      title: "Communication, Business Thinking & Collaboration",
      subtitle: "Holistic Engineering Development",
      description:
        "Refining professional English fluency, learning product-driven thinking, and actively engaging in student community interactions.",
      accent_color: "pink",
      order: 3,
    },
    {
      period: "Future Direction",
      title: "Research Exploration & Continuous Engineering Growth",
      subtitle: "Long-Term Vision",
      description:
        "Advancing toward research paper reading groups, undergraduate research mentorship, and high-standard software engineering craftsmanship.",
      accent_color: "yellow",
      order: 4,
    },
  ],
  community: {
    club_name: "DIU Competitive Programming (CP) Club",
    university: "Daffodil International University",
    tagline: "Sharpening logic through peer problem solving and algorithmic curiosity.",
    description:
      "Active member participating in peer problem solving, algorithmic discussions, and code review circles. The club environment provides an inspiring arena to exercise disciplined thinking, demystify data structures, and appreciate alternative solutions from peers.",
    core_values: [
      "Algorithmic Discipline",
      "Structured Reasoning",
      "Constructive Peer Review",
      "Continuous Habit of Learning",
    ],
  },
  social_links: [
    { platform: "LinkedIn", url: "https://linkedin.com", label: "LinkedIn", is_active: true },
    { platform: "GitHub", url: "https://github.com", label: "GitHub", is_active: true },
    { platform: "Email", url: "mailto:jotirmoya.swe@diu.edu.bd", label: "Email", is_active: true },
    { platform: "DIU Portal", url: "https://daffodilvarsity.edu.bd", label: "DIU Website", is_active: true },
  ],
};

export const FALLBACK_SKILLS: CategorizedSkillsResponse = {
  groups: [
    {
      category: "Problem Solving",
      tagline: "Analytical mindset, algorithmic curiosity, and structured thinking.",
      items: [
        {
          category: "Problem Solving",
          title: "Analytical Thinking",
          description: "Breaking down intricate challenges into fundamental principles and solvable elements.",
          badge: "Core Focus",
          order: 1,
        },
        {
          category: "Problem Solving",
          title: "Logical Reasoning",
          description: "Formulating structured algorithmic pathways and systematically evaluating edge conditions.",
          badge: "Core Focus",
          order: 2,
        },
        {
          category: "Problem Solving",
          title: "Structured Problem-Solving",
          description: "Approaching software bugs and algorithmic tasks with patient step-by-step methodologies.",
          badge: "Practice",
          order: 3,
        },
      ],
    },
    {
      category: "Development",
      tagline: "Foundations of programming, modularity, and applied engineering.",
      items: [
        {
          category: "Development",
          title: "Actively Learning Software Development",
          description: "Hands-on exploration of clean code, architecture patterns, and web foundations.",
          badge: "In Progress",
          order: 4,
        },
        {
          category: "Development",
          title: "Exploring Programming & SE Concepts",
          description: "Studying data structures, modularity, object-oriented principles, and version control.",
          badge: "Foundation",
          order: 5,
        },
        {
          category: "Development",
          title: "Building Practical Technical Knowledge",
          description: "Translating theory into tangible mini-projects, debugging workflows, and tools.",
          badge: "Applied",
          order: 6,
        },
      ],
    },
    {
      category: "Communication & Business",
      tagline: "Interpersonal clarity, user perspective, and collaborative spirit.",
      items: [
        {
          category: "Communication & Business",
          title: "English Communication",
          description: "Articulating ideas clearly in written and verbal forms for global collaboration.",
          badge: "Interpersonal",
          order: 7,
        },
        {
          category: "Communication & Business",
          title: "Business Mindset",
          description: "Understanding user value, real-world context, and the economic purpose of software.",
          badge: "Perspective",
          order: 8,
        },
        {
          category: "Communication & Business",
          title: "Team Collaboration",
          description: "Active listening, peer programming, knowledge exchange, and cooperative problem solving.",
          badge: "Teamwork",
          order: 9,
        },
      ],
    },
  ],
  total_count: 9,
};

export const FALLBACK_RESEARCH: ResearchResponse = {
  section_title: "Curiosity Today. Research Tomorrow.",
  philosophy:
    "Research is not about having all the answers at the beginning; it is about cultivating the rigor to ask precise questions. As an undergraduate student, I am investing time in reading foundational literature, understanding methodology, and preparing to make genuine contributions.",
  items: [
    {
      section: "Research Interests",
      title: "Emerging Software Architectures & Intelligent Systems",
      description:
        "Currently exploring academic survey papers and identifying specific domains of interest. Specific focus areas will be updated as coursework and literature reading advance.",
      status_label: "To Be Updated",
      order: 1,
    },
    {
      section: "Current Focus",
      title: "Learning Research Methodology & Technical Literature Review",
      description:
        "Reading foundational computer science papers, learning how to formulate research hypotheses, and understanding rigorous evaluation benchmarks.",
      status_label: "Active Study",
      order: 2,
    },
    {
      section: "Future Goal",
      title: "Publishing Peer-Reviewed Research & Practical Impact",
      description:
        "Aspiring to collaborate under faculty mentorship at Daffodil International University, tackle a genuine computational inquiry, and contribute to an indexed publication.",
      status_label: "Long-Term Aspiration",
      order: 3,
    },
  ],
};

export async function fetchPortfolio(): Promise<PortfolioData> {
  try {
    const res = await fetch(`${API_BASE}/api/portfolio`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Portfolio fetch failed");
    return await res.json();
  } catch (err) {
    return FALLBACK_PORTFOLIO;
  }
}

export async function fetchSkills(): Promise<CategorizedSkillsResponse> {
  try {
    const res = await fetch(`${API_BASE}/api/skills`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Skills fetch failed");
    return await res.json();
  } catch (err) {
    return FALLBACK_SKILLS;
  }
}

export async function fetchResearch(): Promise<ResearchResponse> {
  try {
    const res = await fetch(`${API_BASE}/api/research`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Research fetch failed");
    return await res.json();
  } catch (err) {
    return FALLBACK_RESEARCH;
  }
}

export async function sendContactMessage(payload: ContactPayload): Promise<ContactResponse> {
  const res = await fetch(`${API_BASE}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (!res.ok) {
    let errorMsg = "Failed to send message. Please try again.";
    if (data?.detail) {
      if (typeof data.detail === "string") {
        errorMsg = data.detail;
      } else if (Array.isArray(data.detail)) {
        errorMsg = data.detail.map((d: any) => d.msg || d.message).join(", ");
      }
    }
    throw new Error(errorMsg);
  }

  return data as ContactResponse;
}
