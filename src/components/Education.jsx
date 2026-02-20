import React from 'react'

function Education() {
  const educationData = [
    {
      degree: 'Bachelor of Technology in Computer Technology',
      institution: 'Reputed University',
      period: '2022–2026',
      cgpa: '8.13',
      description: 'Pursuing advanced studies in computer technology with a focus on software engineering, data structures, and modern development practices. Active participant in coding competitions and technical workshops.'
    },
    {
      degree: 'Higher Secondary Education (Science)',
      institution: 'Reputed School',
      period: '2020–2022',
      cgpa: '82%',
      description: 'Completed with a strong foundation in mathematics and science, developing analytical thinking and problem-solving skills essential for software development.'
    },
    {
      degree: 'Secondary School Education',
      institution: 'Reputed School',
      period: '2018–2020',
      cgpa: '73.2%',
      description: 'Laid the groundwork for technical education with a focus on logical reasoning and computational thinking.'
    }
  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div key={index} className="education-item card">
              <div className="education-header">
                <div className="education-degree">{edu.degree}</div>
                <div className="education-period">{edu.period}</div>
              </div>
              <div className="education-details">
                <div className="education-institution">{edu.institution}</div>
                <div className="education-cgpa">CGPA: {edu.cgpa}</div>
              </div>
              <p className="education-description">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
