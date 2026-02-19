import React from 'react'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a passionate and dedicated B.Tech Computer Technology student with a strong foundation in Java, MySQL, and MERN stack technologies. My journey in software development has been driven by a deep passion for problem solving and creating efficient, scalable solutions.
            </p>
            <p>
              With a CGPA of 8.13, I have consistently demonstrated academic excellence while actively engaging in practical projects that showcase my technical skills and creativity. I thrive in backend and full-stack development environments, where I can leverage my knowledge to build robust applications.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <h3>8.13</h3>
                <p>CGPA</p>
              </div>
              <div className="stat-item">
                <h3>Backend</h3>
                <p>Focus</p>
              </div>
              <div className="stat-item">
                <h3>Full-Stack</h3>
                <p>Development</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="about-circle">
              <div className="about-circle-inner">
                <span>Code</span>
                <span>Logic</span>
                <span>Creativity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About