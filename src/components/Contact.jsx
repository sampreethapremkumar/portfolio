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
                <p>sampreetha.p.developer@example.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div className="contact-details">
                <h4>Phone</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🔗</div>
              <div className="contact-details">
                <h4>LinkedIn</h4>
                <p><a href="https://linkedin.com/in/sampreetha-p" target="_blank" rel="noopener noreferrer">linkedin.com/in/sampreetha-p</a></p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🐙</div>
              <div className="contact-details">
                <h4>GitHub</h4>
                <p><a href="https://github.com/sampreetha-p" target="_blank" rel="noopener noreferrer">github.com/sampreetha-p</a></p>
              </div>
            </div>
          </div>
          <div className="contact-form-container">
            <form className="contact-form">
              <h3>Let's Work Together</h3>
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
