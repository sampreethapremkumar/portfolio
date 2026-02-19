import React from 'react'

function Education() {
  const educationData = [
    {
      degree: 'B.Tech Computer Technology',
      institution: 'University Name',
      period: '2022–2026',
      cgpa: '8.13',
      description: 'Currently pursuing Bachelor of Technology in Computer Technology with a strong focus on software development and problem-solving.'
    },
    {
      degree: '12th Grade',
      institution: 'School Name',
      period: '2020–2022',
      cgpa: '82%',
      description: 'Completed higher secondary education with a focus on science and mathematics.'
    },
    {
      degree: '10th Grade',
      institution: 'School Name',
      period: '2018–2020',
      cgpa: '73.2%',
      description: 'Completed secondary education with a strong foundation in core subjects.'
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