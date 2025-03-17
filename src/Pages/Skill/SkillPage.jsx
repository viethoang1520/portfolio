import { Col, Row } from 'antd';
import originalSkills from '../../data/skills';
import SkillCard from '../../components/SkillCard/SkillCard';
import './SkillPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { showAllSkills, collapseSkills } from '../../store/skill/skillSlice';
import { useEffect, useState } from 'react';

function SkillPage() {
  const dispatch = useDispatch();
  const showAll = useSelector((state) => state.skill.showAll);
  const [skills, setSkills] = useState(originalSkills.slice(0, 8));

  useEffect(() => {
    if (showAll) {
      setSkills(originalSkills);
      console.log("Show all được thực hiện")
      console.log("Có " + originalSkills.length + " skills")
    } else {
      setSkills(originalSkills.slice(0, 8));
      console.log("Slice được thực hiện")
      console.log("Có " + originalSkills.slice(0, 8).length + " skills")
    }
  }, [showAll]);

  console.log("Tóm lại có " + skills.length + " skills")
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
          {showAll ? 
            <button onClick={() => dispatch(collapseSkills(originalSkills))}>Show less</button>:
            <button onClick={() => dispatch(showAllSkills(originalSkills))}>Show more</button> 
          }
        </Row>
      </div>
    </div>
  );
}

export default SkillPage;