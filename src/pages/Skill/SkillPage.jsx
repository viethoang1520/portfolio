import { Col, Row } from 'antd';
import originalSkills from '@/data/skills';
import SkillCard from '@/components/SkillCard/SkillCard.jsx';
import './SkillPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { showAllSkills, collapseSkills } from '@/store/skill/skillSlice';
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { motion, useReducedMotion } from 'framer-motion';

function SkillPage() {
  const dispatch = useDispatch();
  const showAll = useSelector((state) => state.skill.showAll);
  const [skills, setSkills] = useState(originalSkills.slice(0, 8));
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (showAll) {
      setSkills(originalSkills);
    } else {
      setSkills(originalSkills.slice(0, 8));
    }
  }, [showAll]);

  const handleShowAllSkills = () => {
    dispatch(showAllSkills(originalSkills));
    setTimeout(() => {
      const skillSection = document.getElementById('skill');
      if (skillSection) {
        const sectionBottom = skillSection.getBoundingClientRect().bottom;
        window.scrollBy({
          top: sectionBottom - window.innerHeight + 100,
          behavior: 'smooth'
        });
      }
    }, 100);
  }

  const handleCollapseSkills = () => {
    dispatch(collapseSkills(originalSkills));
    setTimeout(() => {
      const skillSection = document.getElementById('skill');
      if (skillSection) {
        // Scroll to the top of the skill section
        skillSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start' // Align the top of the element with the top of the viewport
        });
      }
    }, 100);
  }

  return (
    <div className="skill-block" id='skill'>
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Skills</span>
          <h2>Backend stack for real products</h2>
          <p>
            A curated toolkit centered on Node.js, distributed systems, and modern product
            delivery workflows.
          </p>
          <div className="section-tags">
            <span>Node.js</span>
            <span>NestJS</span>
            <span>Realtime APIs</span>
            <span>Cloud Observability</span>
          </div>
        </div>

        <Row gutter={[16, 16]} className="skill-grid">
          {skills.map((skill) => (
            <Col data-aos="zoom-in-up" data-aos-delay={`${skill.id}00`} key={skill.id} xs={24} sm={24} md={12} lg={12} xl={6}>
              <SkillCard
                icon={skill.icon}
                name={skill.name}
                exp={skill.exp}
              />
            </Col>
          ))}
          <div data-aos="zoom-in-up" data-aos-delay={`${skills.length}00`} className="skill-size-icon">
            {showAll ? (
              <motion.div
                animate={{
                  y: shouldReduceMotion ? 0 : [0, 8, 0],
                  transition: {
                    duration: shouldReduceMotion ? 0 : 1.6,
                    repeat: 0,
                  }
                }}
              >
                <Icon
                  onClick={handleCollapseSkills}
                  className={"skill-collapse-icon"}
                  icon="lets-icons:expand-up-double"
                />
              </motion.div>
            ) : (
              <motion.div
                animate={{
                  y: shouldReduceMotion ? 0 : [0, -8, 0],
                  transition: {
                    duration: shouldReduceMotion ? 0 : 1.6,
                    repeat: 0,
                  }
                }}
              >
                <Icon
                  onClick={handleShowAllSkills}
                  className={"skill-expand-icon"}
                  icon="lets-icons:expand-down-double"
                />
              </motion.div>
            )
            }
          </div>
        </Row>
      </div>
    </div>
  );
}

export default SkillPage;