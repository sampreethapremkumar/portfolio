import React from 'react'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm Sampreetha P</h1>
            <h2>Aspiring Java & MERN Stack Developer</h2>
            <p>
              Passionate about problem solving with a strong foundation in Java, MySQL, and MERN stack technologies. 
              Currently pursuing B.Tech in Computer Technology with a CGPA of 8.13, focused on backend and full-stack development.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn">View Projects</a>
              <a href="#contact" className="btn btn-secondary">Contact Me</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-circle">
              <div className="profile-initials">SP</div>
            </div>
          </div>
        </div>
        <div className="social-icons">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
            <i className="fab fa-leetcode"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero