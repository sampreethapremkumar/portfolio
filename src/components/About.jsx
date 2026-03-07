import React from 'react'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a B.Tech Computer Technology student with a CGPA of 8.13, passionate about backend and full-stack development. I have hands-on experience building applications using Java and the MERN stack. I enjoy problem-solving, writing clean code, and continuously learning new technologies to improve my development skills.
            </p>
            <p>
              My focus areas include Object-Oriented Programming, REST APIs, Database Management, and Full-Stack Web Development. I thrive in backend and full-stack development environments, where I can leverage my knowledge to build robust, user-centric applications.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <h3>8.13</h3>
                <p>CGPA</p>
              </div>
              <div className="stat-item">
                <h3>Full-Stack</h3>
                <p>Developer</p>
              </div>
              <div className="stat-item">
                <h3>Problem</h3>
                <p>Solver</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="about-circle">
              <div className="about-circle-inner">
                <span>Innovation</span>
                <span>Technology</span>
                <span>Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
