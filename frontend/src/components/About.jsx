import { Code2, Lightbulb, Rocket, Target } from "lucide-react";
function About() {
  return (
    <section id="about" className="container about">
      <span className="section-tag">About Me</span>
      <h2 className="section-title">
        Passionate About <span className="gradient-text">Building Solutions</span>
      </h2>
      <p className="section-subtitle">
        I'm a full-stack developer with a passion for creating beautiful, functional, and user-friendly applications.
        With expertise in modern web technologies, I transform ideas into reality through clean code and innovative thinking.
      </p>

      <div className="about-cards">
        <div className="card feature-card">
          <div className="feature-icon"><Code2 /> </div>
          <h3>Clean Code</h3>
          <p>Writing maintainable, efficient, and well-documented code is my priority.</p>
        </div>
        <div className="card feature-card">
          <div className="feature-icon"><Lightbulb /> </div>
          <h3>Problem Solver</h3>
          <p>I love tackling complex challenges and finding elegant solutions.</p>
        </div>
        <div className="card feature-card">
          <div className="feature-icon"> <Rocket /> </div>
          <h3>Fast Learner</h3>
          <p>Constantly learning new technologies and best practices in development.</p>
        </div>
        <div className="card feature-card">
          <div className="feature-icon"> <Target /></div>
          <h3>Goal-Driven</h3>
          <p>Focused on delivering high-quality results that exceed expectations.</p>
        </div>
      </div>
    </section>
  );
}

export default About;