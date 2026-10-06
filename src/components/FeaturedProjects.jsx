import { Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import "../styles/projects.css";

function FeaturedProjects() {
  const projectClasses = {
    1: "education",
    2: "ramadan",
    3: "attonirbhor",
    4: "tree",
    5: "flood",
    6: "ushnota",
    7: "cleanup",
    8: "workshop",
  };

  const projectRoutes = {
    1: "/projects/education-for-all",
    2: "/projects/spirit-of-ramadan",
    3: "/projects/attonirbhor",
    4: "/projects/tree-plantation",
    5: "/projects/flood-drive",
    6: "/projects/ushnota",
    7: "/projects/clean-up",
    8: "/projects/workshop",
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Our Projects</h2>

        <div className="cards">
          {projectsData.map((project) => (
            <Link
              to={projectRoutes[project.id]}
              className={`card ${projectClasses[project.id]}`}
              key={project.id}
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="project-name">
                {project.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;