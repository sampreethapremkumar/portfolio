import React from 'react'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>your email</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div className="contact-details">
                <h4>Phone</h4>
                <p>your number</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🔗</div>
              <div className="contact-details">
                <h4>LinkedIn</h4>
                <p><a href="your profile link" target="_blank" rel="noopener noreferrer">your profile link</a></p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🐙</div>
              <div className="contact-details">
                <h4>GitHub</h4>
                <p><a href="your GitHub link" target="_blank" rel="noopener noreferrer">your GitHub link</a></p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">💻</div>
              <div className="contact-details">
                <h4>LeetCode</h4>
                <p><a href="your profile link" target="_blank" rel="noopener noreferrer">your profile link</a></p>
              </div>
            </div>
          </div>
          <div className="contact-form-container">
            <form className="contact-form">
              <h3>Feel free to reach out for collaborations, internships, or opportunities.</h3>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
