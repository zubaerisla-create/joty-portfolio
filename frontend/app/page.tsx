import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Research } from "@/components/sections/Research";
import { Journey } from "@/components/sections/Journey";
import { Community } from "@/components/sections/Community";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { fetchPortfolio, fetchSkills, fetchResearch } from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [portfolio, skills, research] = await Promise.all([
    fetchPortfolio(),
    fetchSkills(),
    fetchResearch(),
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        <Hero portfolio={portfolio} />
        <About portfolio={portfolio} />
        <Skills skillsData={skills} />
        <Research researchData={research} />
        <Journey timeline={portfolio.timeline} />
        <Community community={portfolio.community} />
        <Contact socialLinks={portfolio.social_links} />
      </main>
      <Footer />
    </div>
  );
}
