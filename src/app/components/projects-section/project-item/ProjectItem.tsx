import styles from "./ProjectItem.module.css";
import { useLocalization } from "@/app/hooks/useLocalization";
import { IProjectVO } from "@/app/common/types/Data";

interface ProjectsItemProps {
  project: IProjectVO;
}

export const ProjectItem: React.FC<ProjectsItemProps> = ({ project }) => {
  const { getLocalization } = useLocalization();

  return (
    <a href={project.url} target="_blank" rel="noreferrer">
      <div className={styles.projectItem}>
        <div className={styles.projectContent}>
          <div className={styles.projectInfo}>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.description}>{getLocalization(project.description)}</p>
          </div>
        </div>
        <div>
          <img className={styles.image} src={project.imageUrl} alt={project.title} />
        </div>
      </div>
    </a>
  );
};
