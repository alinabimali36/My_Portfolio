import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <div className="logo-container">
             <div className="logo-icon">&lt;/&gt;</div>
              <span className="logo-text">Alina<span className="blue-text">Portfolio</span></span>
            </div>
            <p className="footer-desc">
              Crafting beautiful, functional web experiences with modern technologies and clean code.
            </p>
          </div>
          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">Connect</h4>
            <div className="social-icons-row" style={{ marginBottom: '1rem' }}>
              <a href="https://github.com/alinabimali36" target="_blank" rel="noreferrer" className="social-icon-btn"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.linkedin.com/in/alina-bimali-0361b8417/"target="_blank" rel="noreferrer" className="social-icon-btn"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Email: alinabimali36@gmail.com
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 AlinaPortfolio. All rights reserved.</p>
          <p>Made with ❤️ by a passionate developer</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;