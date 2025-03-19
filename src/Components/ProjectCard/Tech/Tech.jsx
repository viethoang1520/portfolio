import React from 'react'
import './Tech.scss'
export default function Tech({techName}) {
  return (
    <>
      <div className='tech-container'>
        <div className='tech-item'>
          <p>{techName}</p>
        </div>
      </div>
    </>
  )
}
