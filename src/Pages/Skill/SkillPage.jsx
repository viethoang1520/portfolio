import { Col, Row } from 'antd';
import skills from '../../data/skills';
import SkillCard from '../../../../openai-agents-python/SkillCard/SkillCard';
import('./SkillPage.scss')
function SkillPage() {
  return (
    <div className="skill-block" id='skill'>
      <div className="container">
        <h1 className="skill-title">WHAT I DO ?</h1>
        <Row gutter={[16, 16]} className="skill">
          {skills.map((skill) => (
            <Col key={skill.id} xs={24} sm={24} md={12} lg={12} xl={6}>
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