import { Switch } from 'antd';
import './Header.scss'
import { Icon } from '@iconify/react/dist/iconify.js';
import('./Header.scss')
function Header() {
  return (
    <div className="header">
      <div className="logo-block">
       Portfolio.
      </div>
      <ul className="navbar-list">
        
        <a href='#introduction'><li className='navbar-items'>HOME</li></a>
        <a href='#skill'><li className='navbar-items'>SKILLS</li></a>
        <a href='#projects'><li className='navbar-items'>PROJECTS</li></a>
        <a href='#contact'><li className='navbar-items'>CONTACT</li></a>
      </ul>
      <div className="right-block">
        <Icon className='toggle-icon' icon="material-symbols:light-mode" width="25" height="25" />
        <Icon className='toggle-icon' icon="material-symbols:dark-mode" width="25" height="25" />
      </div>
    </div>

  );
}

export default Header;