import { Col, Row } from "antd";
import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard/ProjectCard.jsx"
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
        <Row gutter={[70, 70]}>
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