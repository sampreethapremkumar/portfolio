import React from 'react'

function Projects() {
  const projects = [
    {
      title: 'Student Result Management System',
      tech: 'Core Java',
      description: 'A comprehensive desktop application built with Core Java that manages student records, course enrollment, and grade tracking. Features include data persistence, user authentication, and detailed reporting capabilities.',
      github: 'https://github.com/sampreetha-p/student-result-system'
    },
    {
      title: 'Alumni Network Platform',
      tech: 'MERN Stack',
      description: 'A full-stack web application connecting alumni with current students and faculty. Built with MongoDB, Express.js, React, and Node.js, featuring user profiles, networking tools, and event management.',
      github: 'https://github.com/sampreetha-p/alumni-network'
    },
    {
      title: 'Social Media Music Platform',
      tech: 'MERN Stack',
      description: 'A frontend-focused social media platform for music enthusiasts. Developed with React and Node.js, allowing users to share music, create playlists, and connect with other music lovers.',
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