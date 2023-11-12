import styles from "./SelectLanguage.module.css";
import { useLocalization } from "@/app/hooks/useLocalization";

export const SelectLanguage: React.FC = () => {
  const { changeLanguage } = useLocalization();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeLanguage(e.target.checked ? "es" : "en");
  };

  return (
    <div className={styles.switchWrapper}>
      <label className={styles.label} htmlFor="toggle">
        EN
        {/* <span className={`${styles.flag} fi fi-us`} /> */}
      </label>
      <div className={styles.toggleSwitch}>
        <input onChange={onChange} className={styles.toggleInput} id="toggle" type="checkbox" />
        <label className={styles.toggleLabel} htmlFor="toggle"></label>
      </div>
      <label className={styles.label} htmlFor="toggle">
        {/* <span className={`${styles.flag} fi fi-us`} /> */}
        ES
      </label>
    </div>
  );
};
