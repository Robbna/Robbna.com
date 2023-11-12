import styles from "@/app/components/navbar/navbar-switch/NavbarSwitch.module.css";

interface INavbarSwitchProps {
  onClick: () => void;
}

export const NavbarSwitch: React.FC<INavbarSwitchProps> = ({ onClick }) => {
  return (
    <div>
      <label className={styles.burger}>
        <input id="navbarSwitch" type="checkbox" onChange={onClick} />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
  );
};
