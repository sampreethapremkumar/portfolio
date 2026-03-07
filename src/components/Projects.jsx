import React from 'react'

function Projects() {
  const projects = [
    {
      title: 'Student Result Management System',
      tech: 'Core Java',
      description: 'A Java-based application developed to manage student academic records, grades, and performance reports. The system allows adding, updating, and retrieving student data efficiently using object-oriented principles and file handling.',
      github: 'https://github.com/sampreetha-p/student-result-system'
    },
    {
      title: 'Alumni Network Platform',
      tech: 'MERN Stack',
      description: 'A full-stack web application designed to connect alumni and students. Features include user authentication, profile management, messaging, and event announcements. Implemented secure login functionality and REST APIs for data management.',
      github: 'https://github.com/sampreetha-p/alumni-network'
    },
    {
      title: 'Social Media Music Platform',
      tech: 'MERN Stack',
      description: 'A real-time music sharing platform where users can listen to the same song together, chat, and share music experiences. Built responsive UI components and implemented authentication using JWT for secure access.',
      github: 'https://github.com/sampreetha-p/music-social-platform'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-tech">{project.tech}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-actions">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects