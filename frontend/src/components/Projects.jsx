import ExpenseTrackerImage from "../assets/Expense-Tracker.jpg";
import SimonGameImage from "../assets/Simon-Game.png"
import DurmKitImage from "../assets/Durm-Kit.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub} from "@fortawesome/free-brands-svg-icons";

const projectsData = [
  {
    title: "Expense Tracker",
    description: "A personal finance tracker for logging income and expenses, visualizing budget breakdowns, and managing history.",
    tags: ["Node.js", "Express", "MongoDB"],
    image: ExpenseTrackerImage,
    demoLink: "https://your-expense-tracker-demo.com",
    githubLink: "https://github.com/alinabimali36/Expense-Tracker"
  },
  {
    title: "Simon Game",
    description: "An interactive memory game tracking complex arrays, color sequences, and user click patterns with sound logic.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: SimonGameImage,
    demoLink: "https://your-simon-game-demo.com",
    githubLink: "https://github.com/alinabimali36/Simon-game"
  },
  {
    title: "Drum Kit",
    description: "A dynamic musical instrument dashboard that captures keyboard events and button clicks to trigger instant audio playback.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: DurmKitImage ,
    demoLink: "https://your-drum-kit-demo.com",
    githubLink: "https://github.com/alinabimali36/Drum-Kit"
  }
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="section-header">
        <span className="section-tag">PORTFOLIO</span>
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle">
          Here are some of my recent projects that showcase my skills and creativity.
        </p>
      </div>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <div className="card-image-wrapper">
              <img src={project.image} alt={project.title} className="card-image" />
            </div>

            <div className="card-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag-pill">{tag}</span>
                ))}
              </div>

              <div className="project-actions">
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-demo"
                >
                  <span>🔗</span> Live Demo
                </a>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-github"
                >
                  <span><FontAwesomeIcon icon={faGithub} /></span> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="view-more-container">
        <a href="https://github.com/alinabimali36" target="_blank" rel="noopener noreferrer" className="btn-view-all">
        View All Projects on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;