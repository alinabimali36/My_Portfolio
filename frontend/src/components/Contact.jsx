import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: 'info', text: 'Sending...' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', text: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', text: data.error || 'Failed to send message.' });
      }
    } catch (err) {
        console.error('Contact submit error:', err);
      setStatus({ 
        type: 'error', 
        text: 'Server unreachable. Ensure your Node/Express server is running on port 5000.' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="container contact">
      <span className="section-tag">Get In Touch</span>
      <h2 className="section-title">
        Let's <span className="gradient-text">Work Together</span>
      </h2>
      <p className="section-subtitle">
        Have a project in mind? Feel free to reach out. I'm always open to discussing new opportunities.
      </p>

      <div className="contact-wrapper">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="abc@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Your Message</label>
            <textarea
              rows="5"
              name="message"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="btn-primary" 
            style={{ justifyContent: 'center' }} 
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message ✈'}
          </button>
          {status.text && (
            <p style={{
              fontSize: '0.85rem',
              textAlign: 'center',
              marginTop: '0.5rem',
              color: status.type === 'success' ? '#10b981' : status.type === 'error' ? '#ef4444' : '#3b82f6'
            }}>
              {status.text}
            </p>
          )}
        </form>

        <div className="contact-info-container">
          <div className="card contact-info-list">
            <h3>Contact Information</h3>
            <div className="info-item">
              <div className="info-icon"> <FontAwesomeIcon icon={faEnvelope} /></div>
              <div className="info-text">
                <label>Email <br></br></label>
                <span>alinabimali36@gmail.com</span>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon"><FontAwesomeIcon icon={faPhone} /></div>
              <div className="info-text">
                <label>Phone <br></br></label>
                <span>9863605079</span>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon"><FontAwesomeIcon icon={faLocationDot} /></div>
              <div className="info-text">
                <label>Location <br></br></label>
                <span>Birtamod-Jhapa</span>
              </div>
            </div>
          </div>

          <div className="card socials-box">
            <h4>Follow Me</h4>
            <div className="social-icons-row">
             <a href="https://github.com/alinabimali36" target="_blank" rel="noreferrer" className="social-icon-btn"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.linkedin.com/in/alina-bimali-0361b8417/"target="_blank" rel="noreferrer" className="social-icon-btn"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;