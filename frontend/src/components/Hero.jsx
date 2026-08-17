import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Hero() {
  return (
    <section id="home" className="container hero">
      <div className="hero-text">
        <span className="badge">Welcome to my portfolio</span>
        <h1 className="hero-title">
          Hi, I'm a <span className="gradient-text">Software Developer</span>
        </h1>
        <p className="hero-subtitle">
          Full Stack Developer | Problem Solver
        </p>
        <p className="hero-description">
          I craft modern, scalable web applications with a focus on clean code,
          exceptional user experiences, and cutting-edge technologies.
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn-primary">View Projects &rarr;</a>
          <a href="#contact" className="btn-secondary">Contact Me ✉</a>
        </div>
        <div className="hero-socials">
          <span>Connect with me:</span>
          <a href="https://github.com/alinabimali36" target="_blank" rel="noreferrer" className="social-icon-btn"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.linkedin.com/in/alina-bimali-0361b8417/"target="_blank" rel="noreferrer" className="social-icon-btn"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
      </div>
      <div className="hero-img-wrapper">
        <img src="https://img.magnific.com/premium-vector/software-developer-vector-illustration-communication-technology-cyber-security_1249867-5464.jpg?semt=ais_hybrid&w=740&q=80" alt="Developer" />
      </div>
    </section>
  );
}
export default Hero;