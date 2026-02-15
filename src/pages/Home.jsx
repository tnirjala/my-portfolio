import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <>
    {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-container">
          {/* Left Side - Text Content */}
          <div className="hero-left">
           <h1 className="hero-title typing-text">
              Hey There,<br />
              I am Nirjala
              </h1>
              <p className="hero-subtitle typing-text-delayed">
               who is obsessed with turning ideas into<br />
               smooth, good-looking web experiences.
              </p>
            
            <div className="hero-email">
              <span className="email-label">Email</span>
              <span className="email-address">nirjalathapaaa@gmail.com</span>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="hero-right">
            <div className="hero-image-container">
              <img 
                src="/src/assets/hero-image.png" 
                alt="Nirjala" 
                className="hero-image"
              />
              
              {/* Speech Bubble */}
              <div className="speech-bubble">
                <p>I design and code. Frontend is my comfort zone, but i can handle the backend too.</p>
                <div className="small-avatar">
                  {/* Small circular avatar - same image */}
                  <img 
                    src="/src/assets/hero-bubble.jpg" 
                    alt="Avatar" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* How I Can Help You Section */}
      <section className="help-section" id="services">
        <div className="help-container">
          {/* Left Side - Service Items */}
          <div className="help-left">
            <div className="help-item">
              <div className="help-icon teal">
                {/* Add your icon image here */}
                <img src="/src/assets/ui-ux-icon.png" alt="UI/UX Design" />
              </div>
              <div className="help-text">
                <h3>UI / UX Design</h3>
                <p>clean, user-first interfaces</p>
              </div>
            </div>

            <div className="help-item">
              <div className="help-icon yellow">
                <img src="/src/assets/responsive-icon.png" alt="Responsive Websites" />
              </div>
              <div className="help-text">
                <h3>Responsive Websites</h3>
                <p>seamless across devices</p>
              </div>
            </div>

            <div className="help-item">
              <div className="help-icon orange">
                <img src="/src/assets/interactive-icon.png" alt="Interactive Experiences" />
              </div>
              <div className="help-text">
                <h3>Interactive Experiences</h3>
                <p>smooth animations & interactions</p>
              </div>
            </div>
          </div>

          {/* Right Side - Description */}
          <div className="help-right">
            <h2>How I Can Help You?</h2>
            <p>
              I design UI/UX and build websites that are simple and easy to use, 
              so anyone can navigate them without confusion. They work perfectly 
              on desktop, tablet, and phone, feel smooth to interact with, and 
              every button, menu, and animation is designed to feel natural. 
              Clean, modern layouts make your content stand out.
            </p>
            <button className="help-btn">Know Me Better</button>
          </div>
        </div>
      </section>

<section className="toolbox-section">
  <h2>My Toolbox</h2>
  <div className="toolbox-carousel">
    <div className="toolbox-track">
      {/* First set */}
      <div className="toolbox-item">
        <div className="toolbox-icon html">
          <img src="/src/assets/html-icon.png" alt="HTML" />
        </div>
        <p>HTML</p>
      </div>
      <div className="toolbox-item">
        <div className="toolbox-icon css">
          <img src="/src/assets/css-icon.png" alt="CSS" />
        </div>
        <p>CSS</p>
      </div>
      <div className="toolbox-item">
        <div className="toolbox-icon js">
          <img src="/src/assets/js-icon.png" alt="JavaScript" />
        </div>
        <p>JavaScript</p>
      </div>
      <div className="toolbox-item">
        <div className="toolbox-icon react">
          <img src="/src/assets/react-icon.png" alt="React" />
        </div>
        <p>React</p>
      </div>
      <div className="toolbox-item">
        <div className="toolbox-icon node">
          <img src="/src/assets/node-icon.png" alt="Node" />
        </div>
        <p>Node</p>
      </div>
      <div className="toolbox-item">
        <div className="toolbox-icon dotnet">
          <img src="/src/assets/dotnet-icon.png" alt=".NET" />
        </div>
        <p>.NET</p>
      </div>
      <div className="toolbox-item">
        <div className="toolbox-icon sql">
          <img src="/src/assets/sql-icon.png" alt="SQL" />
        </div>
        <p>SQL</p>
      </div>
        <div className="toolbox-item">
        <div className="toolbox-icon figma">
          <img src="/src/assets/figma-icon.png" alt="Figma" />
        </div>
        <p>Figma</p>
      </div>
       <div className="toolbox-item">
        <div className="toolbox-icon git">
          <img src="/src/assets/git-icon.png" alt="Git" />
        </div>
        <p>Git</p>
      </div>
      <div className="toolbox-item">
        <div className="toolbox-icon vercel">
          <img src="/src/assets/vercel-icon.png" alt="Vercel" />
        </div>
        <p>Vercel</p>
      </div>

      {/* Duplicate set for infinite scroll */}
      <div className="toolbox-item">
        <div className="toolbox-icon html">
          <img src="/src/assets/html-icon.png" alt="HTML" />
        </div>
        <p>HTML</p>
      </div>
      <div className="toolbox-item">
        <div className="toolbox-icon css">
          <img src="/src/assets/css-icon.png" alt="CSS" />
        </div>
        <p>CSS</p>
      </div>
      <div className="toolbox-item">
        <div className="toolbox-icon js">
          <img src="/src/assets/js-icon.png" alt="JavaScript" />
        </div>
        <p>JavaScript</p>
      </div>
      <div className="toolbox-item">
        <div className="toolbox-icon react">
          <img src="/src/assets/react-icon.png" alt="React" />
        </div>
        <p>React</p>
      </div>
      <div className="toolbox-item">
        <div className="toolbox-icon node">
          <img src="/src/assets/node-icon.png" alt="Node" />
        </div>
        <p>Node</p>
      </div>
      <div className="toolbox-item">
        <div className="toolbox-icon dotnet">
          <img src="/src/assets/dotnet-icon.png" alt=".NET" />
        </div>
        <p>.NET</p>
      </div>
      <div className="toolbox-item">
        <div className="toolbox-icon sql">
          <img src="/src/assets/sql-icon.png" alt="SQL" />
        </div>
        <p>SQL</p>
      </div>
       <div className="toolbox-item">
        <div className="toolbox-icon figma">
          <img src="/src/assets/figma-icon.png" alt="Figma" />
        </div>
        <p>Figma</p>
      </div>
       <div className="toolbox-item">
        <div className="toolbox-icon git">
          <img src="/src/assets/git-icon.png" alt="Git" />
        </div>
        <p>Git</p>
      </div>
       <div className="toolbox-item">
        <div className="toolbox-icon vercel">
          <img src="/src/assets/vercel-icon.png" alt="Vercel" />
        </div>
        <p>Vercel</p>
      </div>
    </div>
  </div>
</section>

<section className="projects-section" id="projects">
  <div className="projects-header">
    <h2>My Projects</h2>
    <p>Things I've worked on</p>
  </div>
  
  <div className="projects-grid">
    <div className="project-card design" onClick={() => window.location.href = '#design-projects'}>
      <h3>Design Concepts</h3>
      <div className="project-card-image">
        <img src="/src/assets/design-preview.png" alt="Design Concepts" />
      </div>
    </div>

    <div className="project-card frontend" onClick={() => window.location.href = '#frontend-projects'}>
      <h3>Frontend Builds</h3>
      <div className="project-card-image">
        <img src="/src/assets/frontend-preview.png" alt="Frontend Builds" />
      </div>
    </div>

    <div className="project-card fullstack" onClick={() => window.location.href = '#fullstack-projects'}>
      <h3>Full Web Apps</h3>
      <div className="project-card-image">
        <img src="/src/assets/fullstack-preview.png" alt="Full Web Apps" />
      </div>
    </div>
  </div>
</section>
         </>
  );
};

export default Home;