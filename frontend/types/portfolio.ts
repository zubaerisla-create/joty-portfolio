export interface SkillItem {
  id?: number;
  category: string;
  title: string;
  description?: string;
  badge?: string;
  order: number;
}

export interface SkillCategoryGroup {
  category: string;
  tagline: string;
  items: SkillItem[];
}

export interface CategorizedSkillsResponse {
  groups: SkillCategoryGroup[];
  total_count: number;
}

export interface ResearchItem {
  id?: number;
  section: string;
  title: string;
  description: string;
  status_label?: string;
  order: number;
}

export interface ResearchResponse {
  section_title: string;
  philosophy: string;
  items: ResearchItem[];
}

export interface TimelineMilestone {
  id?: number;
  period: string;
  title: string;
  subtitle?: string;
  description: string;
  accent_color: "pink" | "yellow" | string;
  order: number;
}

export interface SocialLink {
  platform: string;
  url?: string;
  label: string;
  is_active: boolean;
}

export interface CommunityInfo {
  club_name: string;
  university: string;
  tagline: string;
  description: string;
  core_values: string[];
}

export interface AboutInfo {
  summary: string;
  extended: string;
  focus_areas: string[];
  current_status: string;
}

export interface PortfolioData {
  name: string;
  tagline: string;
  supporting_text: string;
  institution: string;
  degree: string;
  availability_status: string;
  about: AboutInfo;
  timeline: TimelineMilestone[];
  community: CommunityInfo;
  social_links: SocialLink[];
}

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  id: number;
  created_at: string;
}
