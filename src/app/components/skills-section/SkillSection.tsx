import styles from "./SkillSection.module.css";
import { BaseSection } from "@/app/common/components/base-section/BaseSection";
import { useDataContext } from "@/app/contexts/DataContext";
import { useLocalization } from "@/app/hooks/useLocalization";

export const SkillSection = () => {
  const { getLocalization } = useLocalization();
  const { data } = useDataContext();

  return (
    <BaseSection id="skills" hasHeader headerTitle={getLocalization("elements.navbar.skills")}>
      <div className={styles.grid}>
        {data &&
          data.skills.map((skill) => {
            return (
              <a key={skill.name} href={skill.url} target="_blank" rel="noreferrer" className={styles.skill}>
                <i className={`${styles.icon} ${skill.icon}`} />
              </a>
            );
          })}
      </div>
    </BaseSection>
  );
};
