import { Col, Row } from "antd";
import projects from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard"
import './Project.scss'

function Project() {
  return (
    <div className="project-block">
      <div className="container">
        <div className="project-title-container">
          <div data-aos="zoom-in-up" className="project-title">
            <b className="project-title">FEATURED</b>
            <b className="project-title-color">PROJECTS</b>
          </div>
          <div data-aos="zoom-in-up" data-aos-delay="100" className="project-title-line"></div>
        </div>
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