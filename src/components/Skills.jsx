import React from 'react'

function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Java', 'C']
    },
    {
      title: 'Frontend',
      skills: ['React', 'HTML', 'CSS']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js']
    },
    {
      title: 'Database',
      skills: ['MySQL', 'MongoDB']
    },
    {
      title: 'Tools',
      skills: ['VS Code', 'Git', 'GitHub', 'Figma', 'Canva']
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card card">
              <h3 className="skill-category">{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills