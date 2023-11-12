import styles from "./AboutSection.module.css";
import { BaseSection } from "@/app/common/components/base-section/BaseSection";
import { useDataContext } from "@/app/contexts/DataContext";
import { useLocalization } from "@/app/hooks/useLocalization";

export const AboutSection: React.FC = () => {
  const { data } = useDataContext();
  const { getLocalization } = useLocalization();

  return (
    data && (
      <BaseSection id="about" hasHeader headerTitle={getLocalization("elements.about")}>
        <div className={styles.aboutWrapper}>
          <p dangerouslySetInnerHTML={{ __html: getLocalization(data.about) }} className={styles.aboutText}></p>
        </div>
      </BaseSection>
    )
  );
};
