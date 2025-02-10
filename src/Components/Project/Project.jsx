import { Col, Row } from "antd";
import projects from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard"
import './Project.scss'

function Project() {
  return (
    <div className="project-block">
      <div className="container">
        <h1 className="project-title"><b>FEATURED</b><b className="project-title-color">PROJECTS</b></h1>
        <Row gutter={[16, 16]}>
          {projects.map((project, index) => (
            <Col key={index} xs={12} sm={12} md={12} lg={12} xl={12}>
              <ProjectCard
                project={project}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Project;