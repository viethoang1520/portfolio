import React from 'react'
import './Button.scss'
import { Icon } from '@iconify/react/dist/iconify.js'
export default function Button({content, width, height, icon}) {
  return (
    <div>
      <div style={{ backgroundColor: '#ffc200', width: width, height: height }} className="contact-btn">
        <Icon icon={icon} width="24" height="24" />
        <p className='content'>{content}</p>
      </div>
    </div>
  )
}
