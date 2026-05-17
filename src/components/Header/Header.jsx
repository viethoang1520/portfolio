import './Header.scss'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { toggle } from '@/store/theme/themeSlice'
function Header() {
  const dispatch = useDispatch();
  const handleToggle = () => {
    // dispatch(toggle());
  };
  const theme = useSelector((state) => state.theme.theme);
  const [navbarSelected, setNavbarSelected] = useState('Home');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleMobileToggle = () => {
    setIsMobileOpen((prev) => !prev);
  };

  const handleMobileNav = (label) => {
    setNavbarSelected(label);
    setIsMobileOpen(false);
  };

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

        <button
          className='mobile-button'
          type="button"
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-nav"
          onClick={handleMobileToggle}
        >
          <Icon icon={isMobileOpen ? 'material-symbols:close-rounded' : 'material-symbols:menu-rounded'} width="28" height="28" />
        </button>
      </div>
      <div className={`mobile-menu ${isMobileOpen ? 'is-open' : ''}`} role="dialog" aria-modal="true">
        <div className="mobile-menu-surface">
          <div className="mobile-menu-header">
            <span className="logo-block">Viet Hoang</span>
            <button type="button" className="mobile-close" aria-label="Close menu" onClick={handleMobileToggle}>
              <Icon icon="material-symbols:close-rounded" width="24" height="24" />
            </button>
          </div>
          <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile">
            <a
              className={`mobile-link ${navbarSelected === 'Home' ? 'active' : ''}`}
              href="#home"
              onClick={() => handleMobileNav('Home')}
            >
              Home
            </a>
            <a
              className={`mobile-link ${navbarSelected === 'Skills' ? 'active' : ''}`}
              href="#skill"
              onClick={() => handleMobileNav('Skills')}
            >
              Skills
            </a>
            <a
              className={`mobile-link ${navbarSelected === 'Experience' ? 'active' : ''}`}
              href="#experience"
              onClick={() => handleMobileNav('Experience')}
            >
              Experience
            </a>
            <a
              className={`mobile-link ${navbarSelected === 'Projects' ? 'active' : ''}`}
              href="#project"
              onClick={() => handleMobileNav('Projects')}
            >
              Projects
            </a>
            <a
              className={`mobile-link ${navbarSelected === 'Contact' ? 'active' : ''}`}
              href="#contact"
              onClick={() => handleMobileNav('Contact')}
            >
              Contact
            </a>
          </nav>
          <div className="mobile-cta">
            <a className="header-cta" href="#contact" onClick={() => handleMobileNav('Contact')}>
              Let's talk
              <Icon icon="material-symbols:arrow-right-alt-rounded" width="18" height="18" />
            </a>
          </div>
        </div>
      </div>
    </header>

  );
}

export default Header;
