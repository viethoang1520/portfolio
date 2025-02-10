import { Switch } from 'antd';
import './Header.scss'
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
        <Switch defaultChecked  />

      </div>
    </div>

  );
}

export default Header;