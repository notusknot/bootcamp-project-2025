import styles from "./page.module.css";
import ProjectItem from "@/components/project"
import projects from "../projectData"

export default function Home() {
  return (
    <div>
      <h1>This is my awesome portfolio</h1>
      <hr />
      {projects.map(project =>
        <ProjectItem key={project.link} {...project} />
      )}
    </div>
  );
}
