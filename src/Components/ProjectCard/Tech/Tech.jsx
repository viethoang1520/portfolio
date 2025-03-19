import React from 'react'
import './Tech.scss'
export default function Tech() {
  const techs = [
    'React',
    'TypeScript', 
    'Tailwind CSS',
    'NestJS',
    'MongoDB',
  ]
  return (
    <>
      <div className='tech-container'>
        <div className='tech-item'>
          {techs.map((item, index) => (
            <div key={index} className='tech-item-content'>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}
