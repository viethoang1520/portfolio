import { Col, Row } from "antd";
import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard/ProjectCard.jsx"
import './Project.scss'
import { useState } from "react";
function Project() {
  const projectLength = projects.length;
  const [leftSideProjectList, setLeftSideProjectList] = useState(projects.slice(0, projectLength / 2));
  const [rightSideProjectList, setRightSideProjectList] = useState(projects.slice(projectLength / 2, projectLength));
  return (
    <div id="project" className="project-block">
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
            {leftSideProjectList.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </Col>
          <Col className="project-card-container" data-aos="fade-left" data-aos-delay="00" style={{ marginTop: '150px' }} xs={24} sm={24} md={12} lg={12} xl={12}>
            {rightSideProjectList.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Project;