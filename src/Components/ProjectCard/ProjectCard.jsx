import './ProjectCard.scss'
import PropTypes from 'prop-types'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import { Image } from 'antd';
import portfolio from '@/assets/images/portfolio.png'
import Tech from './Tech/Tech'

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
          <Image className='project-card-image' preview={false} src={portfolio} alt="portfolio" />
        </div>
        <div className="project-card-content">
          <div className="project-card-title">
            <h1>My Portfolio</h1>
          </div>
        <div className="project-card-desc">
          <p>This is my portfolio website that I created using React, TypeScript, and Tailwind CSS. It is a simple and clean portfolio website that showcases my projects and skills.</p>
        </div>
        <div className="project-card-tech">
          <ul className='project-card-tech-list'>
            <li>React</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>React Router</li>
            <li>React Hook Form</li>
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