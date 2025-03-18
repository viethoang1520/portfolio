import { Col, Row } from "antd";
import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard/ProjectCard"
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
        {/* <Row>
          {projects.map((project, index) => (
            <Col key={index} >
              <ProjectCard
                project={project}
              />
            </Col>
          ))}
        </Row> */}
        <Row gutter={[32, 32]}>
          <Col className="project-card-container" data-aos="fade-right" data-aos-delay="00" xs={24} sm={24} md={12} lg={12} xl={12}>
            <ProjectCard />
            <ProjectCard />
          </Col>
          <Col className="project-card-container" data-aos="fade-left" data-aos-delay="00" style={{ marginTop: '150px' }} xs={24} sm={24} md={12} lg={12} xl={12}>
            <ProjectCard />
            <ProjectCard />
          </Col>
        
        </Row>
      </div>
    </div>
  );
}

export default Project;