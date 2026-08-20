import { useState, useEffect } from 'react';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

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

  return (
    <nav className="navbar">
      <div className="logo-container">
        <div className="logo-icon">&lt;/&gt;</div>
        <span className="logo-text">
          Alina<span className="blue-text">Portfolio</span>
        </span>
      </div>

      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className={activeSection === item ? 'nav-link active' : 'nav-link'}
              onClick={() => setActiveSection(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;