import styles from "@/app/components/navbar/Navbar.module.css";
import { NavbarList } from "@/app/components/navbar/navbar-list/NavbarList";
import { ThemeSwitch } from "@/app/components/theme-switch/ThemeSwitch";
import { SelectLanguage } from "@/app/components/select-language/SelectLanguage";
import { BaseSeparator } from "@/app/common/components/base-separator/BaseSeparator";
import { useState, useRef, useMemo, useCallback } from "react";
import { gsap } from "gsap";
import { NavbarSwitch } from "@/app/components/navbar/navbar-switch/NavbarSwitch";

interface INavbarSection {
  id: string;
  localization: string;
}

const NAVBAR_SECTIONS: INavbarSection[] = [
  {
    id: "home",
    localization: "elements.navbar.home",
  },
  {
    id: "skills",
    localization: "elements.navbar.skills",
  },
  {
    id: "about",
    localization: "elements.navbar.about",
  },
  {
    id: "projects",
    localization: "elements.navbar.projects",
  },
  {
    id: "contact",
    localization: "elements.navbar.contact",
  },
];

const NAVBAR_ANIMATION_DURATION = 0.6;

export const Navbar: React.FC = () => {
  const NAVBAR_TRANSLATE_X = -window.innerWidth;

  const [isNavbarHidden, setIsNavbarHidden] = useState(true);
  const navbar = useRef<HTMLDivElement>(null);

  const animationTimeline = useMemo(() => {
    return gsap.timeline();
  }, []);

  const changeNavbarAnimation = useCallback(() => {
    // If is desktop, do not animate
    if (window.innerWidth > 1024) {
      return;
    }
    setIsNavbarHidden(!isNavbarHidden);

    // Close navbar on click
    document.getElementById("navbarSwitch")?.click();

    // Prevent scrolling when navbar is open
    document.body.style.overflow = isNavbarHidden ? "hidden" : "auto";

    // Animate navbar
    animationTimeline.clear();
    animationTimeline.to(navbar.current, {
      x: isNavbarHidden ? 0 : NAVBAR_TRANSLATE_X,
      duration: isNavbarHidden ? NAVBAR_ANIMATION_DURATION : 0.5,
    });
  }, [isNavbarHidden]);

  return (
    <div>
      <div ref={navbar} style={{ transform: `translateX(${NAVBAR_TRANSLATE_X}px)` }} className={styles.navbarWrapper}>
        <div className={styles.navbarGroup}>
          <SelectLanguage />
          <BaseSeparator />
          <NavbarList sections={NAVBAR_SECTIONS} onItemClick={changeNavbarAnimation} />
          <BaseSeparator />
          <ThemeSwitch />
        </div>
      </div>
      <div className={styles.navbarButton}>
        <NavbarSwitch onClick={changeNavbarAnimation} />
      </div>
    </div>
  );
};
