import styles from "./App.module.css";
import { Navbar } from "@/app/components/navbar/Navbar";
import { HeroSection } from "./components/hero-section/HeroSection";
import { ProjectSection } from "./components/projects-section/ProjectSection";
import { SkillSection } from "./components/skills-section/SkillSection";
import { AboutSection } from "./components/about-section/AboutSection";
import { useLocalization } from "./hooks/useLocalization";
import { ContactSection } from "./components/contact-section/ContactSection";

export const App: React.FC = () => {
  const { getLocalization } = useLocalization();
  return (
    <div className={styles.mainWrapper}>
      <Navbar />
      <div className={styles.contentWrapper}>
        <HeroSection />
        <SkillSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
        <footer className={styles.footerWrapper}>
          <span className={styles.footerLabel}>{getLocalization("elements.footer")}</span>
          <span className={styles.footerCopyright}>Robbna.com © {new Date().getFullYear()}</span>
        </footer>
      </div>
    </div>
  );
};
