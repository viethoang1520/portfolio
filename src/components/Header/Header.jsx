import './Header.scss'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { toggle } from '@/store/theme/themeSlice'
function Header() {
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggle());
  };
  const theme = useSelector((state) => state.theme.theme);
  const [navbarSelected, setNavbarSelected] = useState('Home');

  return (
    <header className="header">
      <div className="container header-wrapper">
        <div className="logo-block">Viet Hoang</div>
        <nav className="navbar-list" aria-label="Primary">
          <a
            className={`navbar-item ${navbarSelected === 'Home' ? 'active' : ''}`}
            href="#home"
            onClick={() => setNavbarSelected('Home')}
          >
            Home
          </a>
          <a
            className={`navbar-item ${navbarSelected === 'Skills' ? 'active' : ''}`}
            href="#skill"
            onClick={() => setNavbarSelected('Skills')}
          >
            Skills
          </a>
          <a
            className={`navbar-item ${navbarSelected === 'Experience' ? 'active' : ''}`}
            href="#experience"
            onClick={() => setNavbarSelected('Experience')}
          >
            Experience
          </a>
          <a
            className={`navbar-item ${navbarSelected === 'Projects' ? 'active' : ''}`}
            href="#project"
            onClick={() => setNavbarSelected('Projects')}
          >
            Projects
          </a>
          <a
            className={`navbar-item ${navbarSelected === 'Contact' ? 'active' : ''}`}
            href="#contact"
            onClick={() => setNavbarSelected('Contact')}
          >
            Contact
          </a>
        </nav>
        <div className="header-actions">
          <span className="status-pill">
            <span className="status-dot" aria-hidden="true"></span>
            Open to Work
          </span>
          <button type="button" onClick={handleToggle} className="theme-toggle" aria-label="Toggle theme">
            {theme === 'light-theme' ? (
              <Icon className='toggle-icon' icon="material-symbols:light-mode" width="20" height="20" />
            ) : (
              <Icon className='toggle-icon' icon="material-symbols:dark-mode" width="20" height="20" />
            )}
          </button>
          <a className="header-cta" href="#contact">
            Let's talk
            <Icon icon="material-symbols:arrow-right-alt-rounded" width="18" height="18" />
          </a>
        </div>

        <button className='mobile-button' type="button" aria-label="Open menu">
          <Icon icon="material-symbols:menu-rounded" width="28" height="28" />
        </button>
      </div>
    </header>

  );
}

export default Header;
