import { ProjectItem } from "../project-item/ProjectItem";
import styles from "./ProjectList.module.css";
import { IProjectVO } from "@/app/common/types/Data";

interface ProjectsListProps {
  projects: IProjectVO[];
}

export const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
  return (
    <div className={styles.projectList}>
      {projects.map((project) => {
        return project.highlighted && <ProjectItem key={project.url} project={project} />;
      })}
    </div>
  );
};
