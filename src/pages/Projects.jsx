import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const projectsPerPage = 6;

  const getImageIndex = (projectId) => {
    return currentImageIndex[projectId] || 0;
  };

  const nextImage = (projectId, totalImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: (prev[projectId] || 0) < totalImages - 1 ? (prev[projectId] || 0) + 1 : 0
    }));
  };

  const prevImage = (projectId, totalImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: (prev[projectId] || 0) > 0 ? (prev[projectId] || 0) - 1 : totalImages - 1
    }));
  };

  // Check if coming from home page with a specific filter
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    if (category) {
      setActiveFilter(category);
      setCurrentPage(1); 
    }
  }, [location]);

 
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  // Project data 
  const projects = [
    {
      id: 1,
      title: "VR Website UI",
      category: "design",
      description: "Designed a VR website UI in Figma, focusing on consistent layout, typography, color balance and user experience principles",
      images: [
        "/my-portfolio/projects/project-1-1.png"
      ],
      techStack: ["Figma"],
      liveLink: "",
      githubLink: "",
      figmaLink: "https://www.figma.com/proto/gjm8OVp1Ix74f0r4I2RWrU/Signup-and-Login?node-id=67-35&t=w502Fzk9BkWXPy6U-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=67%3A35"
    },
    {
      id: 2,
      title: "Portfolio Website",
      category: "frontend",
      description: "Responsive portfolio website built with React and modern CSS animations for smooth user interactions.",
      images: [
        "/my-portfolio/projects/project-2-1.png"
      ],
      techStack: ["React", "CSS3", "JavaScript"],
      liveLink: "https://tnirjala.github.io/my-portfolio/",
      githubLink: "https://github.com/tnirjala/my-portfolio",
      figmaLink: "https://www.figma.com/proto/uB9WulJOwNFoO7x0jfprqr/My-portfolio?node-id=3-2&t=zts247utyIO87aXl-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
    },
    {
      id: 3,
      title: "KiranaHub",
      category: "fullstack",
      description: "An online grocery platform that enables users to browse, order and track groceries with secure authentication and an admin pannel.",
      images: [
        "/my-portfolio/projects/project-3-1.png",
        "/my-portfolio/projects/project-3-2.png",
        "/my-portfolio/projects/project-3-3.png",
        "/my-portfolio/projects/project-3-4.png",
        "/my-portfolio/projects/project-3-5.png"
      ],
      techStack: ["HTML", "CSS", "ASP.NET", "SQL Server"],
      liveLink: "",
      githubLink: "https://github.com/tnirjala/KiranaHub",
      figmaLink: "https://www.figma.com/proto/tFWLqA7BAjMnlzXyLLJLe8/Grocery-Shop?node-id=6-25&p=f&t=nVA2tlx1hm9YlHef-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=6%3A25"
    },
    {
      id: 4,
      title: "TutorsLinker",
      category: "fullstack",
      description: "A platform connecting students and parents with verified home tutors in Nepal with AI based tutor verification mechanism.",
      images: [
        "/my-portfolio/projects/project-4-1.png",
        "/my-portfolio/projects/project-4-2.png",
        "/my-portfolio/projects/project-4-3.png",
        "/my-portfolio/projects/project-4-4.png",
        "/my-portfolio/projects/project-4-5.png"
      ],
      techStack: [".NET Core","HTML","CSS","JS","SQL Server"],
      liveLink: "",
      githubLink: "",
      figmaLink: "https://www.figma.com/design/uKXWMjYhbzLMqq7OtwaIhU/Wireframes?node-id=0-1&t=wAcWHsZLqojm42HS-1"
    },
    {
      id: 5,
      title: "Zconnect-Counselling Platform",
      category: "fullstack",
      description: "Interactive weather dashboard with real-time data visualization and location-based forecasts.",
      images: [
        "/my-portfolio/projects/project-5-1.png",
        "/my-portfolio/projects/project-5-2.png",
        "/my-portfolio/projects/project-5-3.png",
        "/my-portfolio/projects/project-5-4.png",
        "/my-portfolio/projects/project-5-5.png"
      ],
      techStack: ["React", "Node JS", "MS SQL"],
      liveLink: "",
      githubLink: "https://github.com/tnirjala/zconnect_portal",
      figmaLink: ""
    },
    {
      id: 6,
      title: "Shree Pashupati Gaushala Dharamshala",
      category: "frontend",
      description: "Website designed to present accommodation, services and enhance user experience across devices.",
      images: [
        "/my-portfolio/projects/project-6-1.png"
        
      ],
      techStack: ["HTML", "CSS", "JS"],
      liveLink: "",
      githubLink: "https://github.com/tnirjala/College_Projects/tree/master/Pashupati_Gausala_Dharamsala/Pashupati_Gaushala_Dharamsala",
      figmaLink: ""
    },
    {
      id: 7,
      title: "TabboandTatto",
      category: "design",
      description: "Created a landing page to showcase brand identity elements like logo, color palette, and typography",
      images: [
        "/my-portfolio/projects/project-7-1.png"
        
      ],
      techStack: ["Photoshop", "Figma"],
      liveLink: "",
      githubLink: "",
      figmaLink: "https://www.figma.com/proto/eId8Z9pl5bRKzmmwmJnD0a/TabboandTattoo?t=IbJBa7QfPC9Vp5ku-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=2-2"
    },
    {
      id: 8,
      title: "To Do List",
      category: "design",
      description: "UI design in progress for a To Do List app.",
      images: [
        "/my-portfolio/projects/project-8-1.png"
      ],
      techStack: ["Figma"],
      liveLink: "",
      githubLink: "",
      figmaLink: "https://www.figma.com/proto/1BtUVlf7T9cgxDQ7diyzRI/To--Do-List?t=ZrfKmG5iZSx4gtL9-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=85-29&starting-point-node-id=18%3A39"
    }
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Pagination calculations
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top of projects
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="projects-page">
      {/* Header */}
      <div className="projects-header">
        <h1>My Projects</h1>
        <p>A collection of my best work and creative efforts</p>
      </div>

      {/* Filter Tabs */}
      <div className="filter-tabs">
        <button 
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          All Projects
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'design' ? 'active' : ''}`}
          onClick={() => setActiveFilter('design')}
        >
          Design Concepts
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'frontend' ? 'active' : ''}`}
          onClick={() => setActiveFilter('frontend')}
        >
          Frontend Builds
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'fullstack' ? 'active' : ''}`}
          onClick={() => setActiveFilter('fullstack')}
        >
          Full Web Apps
        </button>
      </div>

      {/* Project Count */}
      <div className="project-count">
        Showing {indexOfFirstProject + 1}-{Math.min(indexOfLastProject, filteredProjects.length)} of {filteredProjects.length} projects
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {currentProjects.map(project => (
          <div key={project.id} className="project-card">
            {/* Category Tag */}
            <div className={`category-tag ${project.category}`}>
              {project.category === 'design' && 'Design'}
              {project.category === 'frontend' && 'Frontend'}
              {project.category === 'fullstack' && 'Fullstack'}
            </div>

            {/* Project Image Carousel */}
            <div className="project-image">
              <img src={project.images[getImageIndex(project.id)]} alt={project.title} />
              
              {/* Image Overlay with Eye Icon */}
              <div className="image-overlay" onClick={() => setSelectedImage(project.images[getImageIndex(project.id)])}>
                <div className="eye-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
              </div>

              {/* Navigation Arrows - Only show if more than 1 image */}
              {project.images.length > 1 && (
                <>
                  <button 
                    className="image-nav prev" 
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage(project.id, project.images.length);
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  <button 
                    className="image-nav next" 
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage(project.id, project.images.length);
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </>
              )}

              {/* Image Counter Dots */}
              {project.images.length > 1 && (
                <div className="image-dots">
                  {project.images.map((_, index) => (
                    <span 
                      key={index} 
                      className={`dot ${getImageIndex(project.id) === index ? 'active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(prev => ({ ...prev, [project.id]: index }));
                      }}
                    ></span>
                  ))}
                </div>
              )}
            </div>

            {/* Project Info */}
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              {/* Tech Stack */}
              <div className="tech-stack">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>

              {/* Project Links */}
              <div className="project-links">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link live">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link github">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    GitHub
                  </a>
                )}
                {project.figmaLink && (
                  <a href={project.figmaLink} target="_blank" rel="noopener noreferrer" className="project-link figma">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                    </svg>
                    Figma
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="empty-state">
          <h3>No projects found</h3>
          <p>No projects in this category yet. Check back soon!</p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button 
            className="pagination-btn prev"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            Previous
          </button>

          <div className="pagination-numbers">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                className={`pagination-number ${currentPage === index + 1 ? 'active' : ''}`}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button 
            className="pagination-btn next"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img src={selectedImage} alt="Project preview" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;