function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#home" className="logo">
          <span className="logo-icon">&lt;/&gt;</span> DevPortfolio
        </a>
        <ul className="nav-links">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;