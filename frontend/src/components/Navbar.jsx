import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -50% 0px', threshold: 0.1 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navItems = ['home', 'about', 'skills', 'projects', 'contact'];

  return (
    <nav className="navbar">
      <div className="nav-left">
        <button 
          className="menu-toggle" 
          onClick={() => setIsOpen(true)} 
          aria-label="Open menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className="logo-container">
          <div className="logo-icon">&lt;/&gt;</div>
          <span className="logo-text">Alina's <span className="blue-text">Portfolio</span>
          </span>
        </div>
      </div>

      {isOpen && <div className="sidebar-backdrop" onClick={() => setIsOpen(false)}></div>}

      <div className={`sidebar-drawer ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo-container">
            <div className="logo-icon">&lt;/&gt;</div>
            <span className="logo-text">Alina's Portfolio</span>
          </div>
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <ul className="sidebar-links">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={activeSection === item ? 'nav-link active' : 'nav-link'}
                onClick={() => setIsOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <ul className="desktop-nav-links">
        {navItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className={activeSection === item ? 'nav-link active' : 'nav-link'}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <ThemeToggle />
    </nav>
  );
}

export default Navbar;