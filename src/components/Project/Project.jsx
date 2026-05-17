import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard/ProjectCard.jsx"
import './Project.scss'
function Project() {
  return (
    <section id="project" className="project-block">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Featured Products</span>
          <h2>Real-world projects with backend engineering focus</h2>
          <p>
            Each project is presented like a product launch: cinematic visuals up front,
            with the technical story revealed on hover.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;