import './ProjectCard.scss'
import PropTypes from 'prop-types'
import { Icon } from '@iconify/react'
import { motion, useReducedMotion } from 'framer-motion'
import Tech from './Tech/Tech'

function ProjectCard({ project }) {
  const shouldReduceMotion = useReducedMotion()

  const cardVariants = shouldReduceMotion
    ? { hidden: { opacity: 0, y: 0 }, visible: { opacity: 1, y: 0 }, hover: { opacity: 1, y: 0 } }
    : { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 }, hover: { opacity: 1, y: -6 } }

  const mediaVariants = shouldReduceMotion
    ? { rest: { scale: 1, filter: 'blur(0px)' }, hover: { scale: 1, filter: 'blur(0px)' } }
    : { rest: { scale: 1, filter: 'blur(0px)' }, hover: { scale: 1.05, filter: 'blur(2px)' } }

  const revealVariants = shouldReduceMotion
    ? { rest: { opacity: 0, y: 0 }, hover: { opacity: 1, y: 0 } }
    : { rest: { opacity: 0, y: 24 }, hover: { opacity: 1, y: 0 } }

  return (
    <motion.article
      className="project-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: 'easeOut' }}
    >
      <div className="project-card-media">
        <motion.img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          variants={mediaVariants}
          transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: 'easeOut' }}
        />
      </div>
      <div className="project-card-gradient"></div>
      <div className="project-card-footer">
        <div className="project-title">
          <h3>{project.name}</h3>
          <p>{project.tagline}</p>
        </div>
        <div className="project-badges">
          {project.badges.map((badge, index) => (
            <span key={index} className="badge">
              {badge}
            </span>
          ))}
        </div>
      </div>
      <motion.div
        className="project-card-reveal"
        variants={revealVariants}
        transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: 'easeOut' }}
      >
        <div className="reveal-content">
          <div className="reveal-block">
            <h4>Problem</h4>
            <p>{project.problem}</p>
          </div>
          <div className="reveal-block">
            <h4>Solution</h4>
            <p>{project.solution}</p>
          </div>
          <div className="reveal-block">
            <h4>Architecture Highlights</h4>
            <ul>
              {project.architecture.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="reveal-tech">
            {project.techs.map((tech, index) => (
              <Tech key={index} techName={tech} />
            ))}
          </div>
          <div className="reveal-actions">
            <a className="action ghost" href={project.github} target="_blank" rel="noreferrer">
              <Icon icon="mdi:github" width="16" height="16" />
              GitHub
            </a>
            <a className="action" href={project.link} target="_blank" rel="noreferrer">
              Live demo
              <Icon icon="material-symbols:arrow-right-alt-rounded" width="16" height="16" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object
}

export default ProjectCard;