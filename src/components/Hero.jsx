import React from 'react'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm Sampreetha P</h1>
            <h2>Full-Stack Developer & Problem Solver</h2>
            <p>
              Passionate software developer with expertise in Java, MERN stack, and modern web technologies. 
              Dedicated to creating efficient, scalable solutions and continuously expanding my technical skills.
              Currently pursuing B.Tech in Computer Technology with a strong academic record.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn">View Projects</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-circle">
              <div className="profile-initials">SP</div>
            </div>
          </div>
        </div>
        <div className="social-icons">
          <a href="https://linkedin.com/in/sampreetha-p" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/sampreetha-p" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://leetcode.com/u/sampreetha_p/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
            <i className="fab fa-leetcode"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
