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
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -50% 0px',
        threshold: 0.1
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navItems = ['home', 'about', 'skills', 'projects', 'contact'];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (item) => {
    setActiveSection(item);
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <div className="logo-icon">&lt;/&gt;</div>
        <span className="logo-text"> Alina's <span className="blue-text">Portfolio</span>
        </span>
      </div>

      <div className="nav-controls">
        <button 
          className="menu-toggle" 
          onClick={toggleMenu} 
          aria-label="Toggle navigation menu"
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </button>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={activeSection === item ? 'nav-link active' : 'nav-link'}
                onClick={() => handleNavClick(item)}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;