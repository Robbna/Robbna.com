import styles from "@/app/components/navbar/navbar-list/NavbarList.module.css";
import { NavbarItem } from "@/app/components/navbar/navbar-item/NavbarItem";
import { useLocalization } from "@/app/hooks/useLocalization";

interface IPropsNavbarList {
  sections: { id: string; localization: string }[];
  onItemClick?: () => void;
}

export const NavbarList: React.FC<IPropsNavbarList> = ({ sections, onItemClick }) => {
  const { getLocalization } = useLocalization();

  return (
    <div className={styles.navbarList}>
      {sections.map(({ id, localization }) => {
        return (
          <div key={id}>
            <NavbarItem id={id} section={getLocalization(localization)} onItemClick={onItemClick} />
          </div>
        );
      })}
    </div>
  );
};
