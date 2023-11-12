import styles from "@/app/components/navbar/navbar-item/NavbarItem.module.css";

interface IPropsNavbarItem {
  id: string;
  section: string;
  onItemClick?: () => void;
}

export const NavbarItem: React.FC<IPropsNavbarItem> = ({ id, section, onItemClick }) => {
  return (
    <a href={`#${id.trim().replace(" ", "").toLowerCase()}`}>
      <button className={styles.navbarItem} onClick={onItemClick}>
        <strong>{section}</strong>
      </button>
    </a>
  );
};
