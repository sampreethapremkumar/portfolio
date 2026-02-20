import React from 'react'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a passionate and dedicated software developer with a strong foundation in Java, MySQL, and MERN stack technologies. My journey in software development has been driven by a deep passion for problem solving and creating efficient, scalable solutions that make a real impact.
            </p>
            <p>
              With a CGPA of 8.13, I have consistently demonstrated academic excellence while actively engaging in practical projects that showcase my technical skills and creativity. I thrive in backend and full-stack development environments, where I can leverage my knowledge to build robust, user-centric applications.
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
