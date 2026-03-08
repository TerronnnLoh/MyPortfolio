/* ============================================================
   DESIGN: Glassmorphic Dark SaaS — Home Page
   - Single-page portfolio with smooth scroll sections
   - Sections: Hero, About, Skills, Experience, Projects, Education, Portfolio, Contact
   ============================================================ */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#0a0f1e" }}>
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <SkillsSection />
      <SectionDivider />
      <ExperienceSection />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <EducationSection />
      <SectionDivider />
      <PortfolioSection />
      <SectionDivider />
      <ContactSection />
      <Footer />
    </div>
  );
}
