import { Icon } from '@iconify/react/dist/iconify.js'
import './Footer.scss'
export default function Footer() {
  return (
    <div className='footer-block'>
      <div className="footer-content">
        <p className='copyright'>© 2024 Viet Hoang. All rights reserved.</p>
        <a href='#home' className="button-up">
          <Icon icon="fa-solid:arrow-up" />
        </a>
      </div>
    </div>
  )
}
