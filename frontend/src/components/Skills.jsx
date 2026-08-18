  const frontendSkills = [
    { name: 'HTML5', level: '95%' },
    { name: 'CSS3', level: '92%' },
    { name: 'JavaScript', level: '90%' },
    { name: 'React', level: '88%' },
  ];

  const backendSkills = [
    { name: 'Node.js', level: '85%' },
    { name: 'Express', level: '82%' },
    { name: 'REST APIs', level: '88%' },
  ];

  const databaseSkills = [
    { name: 'MongoDB', level: '85%' },
  ];

  const toolsSkills = [
    { name: 'Git & GitHub', level: '90%' },
    { name: 'VS Code', level: '95%' },
  ];

  const techStack = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB',
    'Git','Express', 'REST API',
  ];
function Skills(){
  return (
    <section className="skills container" id="skills">
      <span className="section-tag">SKILLS &amp; EXPERTISE</span>
      <h2 className="section-title">
        My <span className="gradient-text">Tech Stack</span>
      </h2>
      <p className="section-subtitle">
        Proficient in modern web technologies and frameworks, constantly expanding my skill set.
      </p>

      <div className="skills-grid">
        <div className="card skill-card">
          <div className="skill-category-title cyan-title">
            <span className="category-icon cyan-icon">📱</span>
            <h3>Frontend</h3>
          </div>
          {frontendSkills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-info">
                <span>{skill.name}</span>
                <span className="cyan-text">{skill.level}</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress cyan-bar" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="card skill-card">
          <div className="skill-category-title blue-title">
            <span className="category-icon blue-icon">⚙️</span>
            <h3>Backend</h3>
          </div>
          {backendSkills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-info">
                <span>{skill.name}</span>
                <span className="blue-text">{skill.level}</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress blue-bar" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="card skill-card">
          <div className="skill-category-title purple-title">
            <span className="category-icon purple-icon">🗄️</span>
            <h3>Database</h3>
          </div>
          {databaseSkills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-info">
                <span>{skill.name}</span>
                <span className="purple-text">{skill.level}</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress purple-bar" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="card skill-card">
          <div className="skill-category-title cyan-title">
            <span className="category-icon cyan-icon">🔧</span>
            <h3>Tools &amp; Others</h3>
          </div>
          {toolsSkills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-info">
                <span>{skill.name}</span>
                <span className="cyan-text">{skill.level}</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress cyan-bar" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="tech-section">
        <h3 className="tech-icons-title">Technologies I Work With</h3>
        <div className="tech-grid">
          {techStack.map((tech, index) => (
            <div key={index} className="card tech-item">
              <span className="tech-icon">&lt;/&gt;</span>
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;