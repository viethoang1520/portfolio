import React from 'react'
import './Button.scss'
import { Icon } from '@iconify/react/dist/iconify.js'
export default function Button({content, width, height}) {
  return (
    <div>
      <div style={{ backgroundColor: '#ffc200', width: width, height: height }} className="contact-btn">
        <Icon icon="material-symbols:download" width="24" height="24" />
        <p className='content'>{content}</p>
      </div>
    </div>
  )
}
