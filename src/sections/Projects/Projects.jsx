import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import ProjectCard from "../../common/ProjectCard";
import hungrySibs from "../../assets/hungry_sibs.jpg";
import cataclysm from "../../assets/cataclysm.png";
import swsi from "../../assets/swsi.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Major Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={hungrySibs}
          link="https://github.com/alessgomez/CSSECDV-MCO"
          h3="The Hungry Sibs"
          p="Food Delivery Service"
        />
        <ProjectCard
          src={cataclysm}
          link="https://github.com/erik-lance/Cataclysm-Digital-Companion"
          h3="Cataclysm"
          p="Board Game Companion"
        />
        <ProjectCard
          src={swsi}
          link="https://github.com/alessgomez/CSSWENG-Team4-WebApp"
          h3="SWSI Portal"
          p="Water Utility Provider"
        />
      </div>
    </section>
  );
}

export default Projects;
