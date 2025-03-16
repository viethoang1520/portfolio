import { Col, Row } from 'antd';
import skills from '../../data/skills';
import SkillCard from '../../components/SkillCard/SkillCard';
import './SkillPage.scss';
function SkillPage() {
  return (
    <div className="skill-block" id='skill'>
      <div className="container">
        <h1 className="skill-title">
          <p data-aos="zoom-in-up">Tech stack I'm currently working with</p>
          <div data-aos="zoom-in-up" data-aos-delay={`100`} className="skill-title-underline">
            <div className="skill-title-underline-line"></div>
          </div>
        </h1>
        
        <Row  gutter={[16, 16]} className="skill">
          {skills.map((skill) => (
            <Col data-aos="zoom-in-up" data-aos-delay={`${skill.id}00`} key={skill.id} xs={24} sm={24} md={12} lg={12} xl={6}>
              <SkillCard
                icon={skill.icon}
                name={skill.name}
                exp={skill.exp}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default SkillPage;