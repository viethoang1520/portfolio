import { Col, Row } from 'antd';
import originalSkills from '../../data/skills';
import SkillCard from '../../components/SkillCard/SkillCard';
import './SkillPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { showAllSkills, collapseSkills } from '../../store/skill/skillSlice';
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

function SkillPage() {
  const dispatch = useDispatch();
  const showAll = useSelector((state) => state.skill.showAll);
  const [skills, setSkills] = useState(originalSkills.slice(0, 8));

  useEffect(() => {
    if (showAll) {
      setSkills(originalSkills);
    } else {
      setSkills(originalSkills.slice(0, 8));
    }
  }, [showAll]);

  return (
    <div className="skill-block" id='skill'>
      <div className="container">
        <h1 className="skill-title">
          <p data-aos="zoom-in-up">Tech stack I'm currently working with</p>
          <div data-aos="zoom-in-up" data-aos-delay={`100`} className="skill-title-underline">
            <div className="skill-title-underline-line"></div>
          </div>
        </h1>
        
        <Row gutter={[16, 16]} className="skill">
          {skills.map((skill) => (
            <Col data-aos="zoom-in-up" data-aos-delay={`${skill.id}00`} key={skill.id} xs={24} sm={24} md={12} lg={12} xl={6}>
              <SkillCard
                icon={skill.icon}
                name={skill.name}
                exp={skill.exp}
              />
            </Col>
          ))}
          {showAll ? (
              <Icon
                onClick={() => dispatch(collapseSkills(originalSkills))}
                className={"skill-collapse-icon"}
                icon="lets-icons:expand-up-double"
              />
            ) : (
              <Icon
                onClick={() => dispatch(showAllSkills(originalSkills))}
                className={"skill-expand-icon"}
                icon="lets-icons:expand-down-double"
              />
            )
          }
        </Row>
      </div>
    </div>
  );
}

export default SkillPage;