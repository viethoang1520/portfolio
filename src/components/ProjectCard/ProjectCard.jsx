import './ProjectCard.scss'
import PropTypes from 'prop-types'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import { Image } from 'antd';
import portfolio from '@/assets/images/portfolio.png'
import Tech from './Tech/Tech'

function ProjectCard({ project }) {
  return (
    <div className='project-card-container'>
      <div className="project-card">
        <div className='project-card-image-container'>  
          <Image className='project-card-image' preview={false} src={portfolio} alt="portfolio" />
        </div>
        <div className="project-card-content">
          <div className="project-card-title">
            <h1>{project.name}</h1>
          </div>
        <div className="project-card-desc">
          <p>{project.description}</p>
        </div>
        <div className="project-card-tech">
          <ul className='project-card-tech-list'>
            {project.techs.map((tech, index) => (
              <Tech key={index} techName={tech} />
            ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


ProjectCard.propTypes = {
  projects: PropTypes.object
}

export default ProjectCard;