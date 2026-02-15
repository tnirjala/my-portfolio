import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-page" id="about">
      {/* Hero/Intro Section */}
      <div className="about-hero">
        <div className="about-hero-container">
          <div className="about-hero-image">
            <div className="image-circle">
              <img src="/assets/about-profile.png" alt="Profile" />
            </div>
            <div className="hero-decoration"></div>
          </div>
          
          <div className="about-hero-content">
            <h2>Nirjala Thapa</h2>
            <h3 className="profession">React Frontend Developer</h3>
            
            <p className="bio">
              {/* Your professional bio here */}
              I am a dedicated React Frontend Developer focused on building responsive, user-friendly and visually appealing web applications. I specialize in React, JavaScript, HTML and CSS by turning designs into clean and functional code. Through academic and personal projects, I have developed strong problem-solving skills and a passion for creating modern digital experiences. I am continuously learning and improving to deliver high-quality web solutions.
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Academic & Personal Project</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Responsive Design</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Always</span>
                <span className="stat-label">Learning & Building</span>
              </div>
            </div>

            <div className="hero-actions">
              <a href="/resume.pdf" download className="btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Resume
              </a>
              
              <div className="contact-links">
                <a href="https://www.linkedin.com/in/nirjala-thapa-a6a923258/" target="_blank" rel="noopener noreferrer" className="contact-link linkedin" title="LinkedIn">
                  <img src="/assets/linkedin-icon.png" alt="LinkedIn" />
                </a>
                <a href="mailto:nirjalathapaaa@gmail.com" className="contact-link gmail" title="Email">
                  <img src="/assets/gmail-icon.png" alt="Email" />
                </a>
                <a href="https://www.instagram.com/miss_nirjalaaaa?utm_source=qr&igsh=MXRnNXZiY2wwaGQ0eQ==" target="_blank" rel="noopener noreferrer" className="contact-link instagram" title="Instagram">
                  <img src="/assets/instagram-icon.png" alt="Instagram" />
                </a>
                <a href="https://github.com/tnirjala" target="_blank" rel="noopener noreferrer" className="contact-link github" title="GitHub">
                  <img src="/assets/git-icon.png" alt="GitHub" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

     {/* Education Section */}
<div className="about-education">
  <div className="about-container">
    <div className="section-header">
      <div className="icon-wrapper education-icon">
        <img src="/assets/education-icon.png" alt="Education" />
      </div>
      <h2>Education</h2>
    </div>

    <div className="education-grid">
      <div className="education-card">
        <div className="edu-logo">
          <img src="/assets/university-logo.png" alt="University" />
        </div>
        <div className="edu-details">
          <div className="edu-year">2021 - 2026</div>
          <h3>Bachelor's Degree</h3>
          <h4>Asia Pasific Univeristy of Science and Technology</h4>
          <p>Computer Science / Bsc. IT (Hons)</p>
        </div>
      </div>

      <div className="education-card">
        <div className="edu-logo">
          <img src="/assets/school-logo.png" alt="School" />
        </div>
        <div className="edu-details">
          <div className="edu-year">2018 - 2020</div>
          <h3>High School</h3>
          <h4>BhanuBhakta Memorial College</h4>
          <p>Management/ Computer Science</p>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Experience Section */}
      <div className="about-experience">
        <div className="about-container">
          <div className="section-header">
            <div className="icon-wrapper experience-icon">
              <img src="/assets/experience-icon.png" alt="Experience" />
            </div>
            <h2>Experience</h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">Aug 2024-Dec 2024</div>
                <h3>Software Architect Intern</h3>
                <h4> Asthetic Innovation Pvt. Ltd</h4>
                <p>
                   Assisted in UI design to enhance user experience and usability, worked with developers to implement and integrate design solutions into functional software.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date"> April 2024-May 2024</div>
                <h3>Digital Marketing Intern</h3>
                <h4>IIDE</h4>
                <p>
                  Gained hands-on experience in social media marketing ,SEO and content writing,  contributed to integrated digital marketing solutions with practical industry exposure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interests/Hobbies Section */}
      <div className="about-interests">
        <div className="about-container">
          <div className="section-header">
            <div className="icon-wrapper interests-icon">
              <img src="/assets/interests-icon.png" alt="Interests" />
            </div>
            <h2>Beyond Code</h2>
          </div>

          <div className="interests-grid">
            <div className="interest-card">
              <div className="interest-icon">
                <img src="/assets/travelling.jpg" alt="Travelling" />
              </div>
              <h3>Travelling</h3>
            </div>

            <div className="interest-card">
              <div className="interest-icon">
                <img src="/assets/storytelling.png" alt="Storytelling" />
              </div>
              <h3>StoryTelling</h3>
            </div>

            <div className="interest-card">
              <div className="interest-icon">
                <img src="/assets/yoga.jpg" alt="Yoga" />
              </div>
              <h3>Yoga</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;