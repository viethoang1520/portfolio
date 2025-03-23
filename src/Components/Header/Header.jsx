import './Header.scss'
import { Icon } from '@iconify/react/dist/iconify.js';
import('./Header.scss')
import { useDispatch } from 'react-redux';
import { toggle } from '@/store/theme/themeSlice';
import { useSelector } from 'react-redux';
import { useState } from 'react';
function Header() {
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggle());
  };
  const theme = useSelector((state) => state.theme.theme);
  const [navbarSelected, setNavbarSelected] = useState('Home');

  return (
    <header className="header">
      <div className="logo-block">
       Portfolio.
      </div>
      <ul className="navbar-list">
        <a href='#home'><li className={`navbar-items ${navbarSelected === 'Home' ? 'active' : ''}`} onClick={() => setNavbarSelected('Home')}>Home</li></a>
        <a href='#skill'><li className={`navbar-items ${navbarSelected === 'Skills' ? 'active' : ''}`} onClick={() => setNavbarSelected('Skills')}>Skills</li></a>
        <a href='#projects'><li className={`navbar-items ${navbarSelected === 'Projects' ? 'active' : ''}`} onClick={() => setNavbarSelected('Projects')}>Projects</li></a>
        <a href='#contact'><li className={`navbar-items ${navbarSelected === 'Contact' ? 'active' : ''}`} onClick={() => setNavbarSelected('Contact')}>Contact</li></a>
      </ul>
      <div onClick={handleToggle} className="right-block">
        {theme === 'light-theme' ?(
          <Icon className='toggle-icon' icon="material-symbols:light-mode" width="25" height="25" />
        ) : (
          <Icon className='toggle-icon' icon="material-symbols:dark-mode" width="25" height="25" />
        )}
      </div>

      <div className='mobile-button'>
        <button>Open</button>
      </div>
    </header>

  );
}

export default Header;
