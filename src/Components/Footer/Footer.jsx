import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import './Footer.scss'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div className='footer-block'>
      <div className="footer-content">
        <p className='copyright'>© 2024 Viet Hoang Company. All rights reserved.</p>
        <a href='#home' className="button-up">
          <Icon icon="fa-solid:arrow-up" />
        </a>
      </div>
    </div>
  )
}
