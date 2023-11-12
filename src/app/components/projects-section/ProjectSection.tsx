import styles from "./ProjectSection.module.css";
import { useDataContext } from "@/app/contexts/DataContext";
import { ProjectsList } from "./project-list/ProjectList";
import { BaseSection } from "@/app/common/components/base-section/BaseSection";
import { useLocalization } from "@/app/hooks/useLocalization";

export const ProjectSection = () => {
  const { data } = useDataContext();
  const { getLocalization } = useLocalization();

  if (!data) return null;

  return (
    <BaseSection id="projects" hasHeader headerTitle={getLocalization("elements.project")}>
      <div className={styles.projectWrapper}>
        <ProjectsList projects={data.projects} />
      </div>
    </BaseSection>
  );
};
