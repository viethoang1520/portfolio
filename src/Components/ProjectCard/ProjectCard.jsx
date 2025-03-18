import './ProjectCard.scss'
import PropTypes from 'prop-types'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import { Image } from 'antd';
import portfolio from '@/assets/images/portfolio.png'

function ProjectCard() {
  return (
    // <div className="project-card">
    //   <h1 className="name">{project.name}</h1>
    //   <p className="description">{project.description}</p>
    //   <ul className="tech-list">
    //     {project.techs.map((tech, index) => (
    //       <li key={index} className="tech-item">{tech}</li>
    //     ))}
    //   </ul>
    //   <div className="icon-block">
    //     <Link className='link-icon github-icon'>
    //       <Icon icon="line-md:github" className='icon github-icon' />
    //       <p>GitHub</p>
    //     </Link>
    //     <Link className='link-icon live-demo'>
    //       <Icon icon="eva:external-link-fill" className='icon ex-link' />
    //       <p>Live Demo</p>
    //     </Link>
    //   </div>
    // </div >
    <div className='project-card-container'>
      <div className="project-card">
        <div className='project-card-image-container'>  
          <Image src={portfolio} alt="portfolio" />
        </div>
      </div>
    </div>
  );
}


ProjectCard.propTypes = {
  projects: PropTypes.object
}

export default ProjectCard;