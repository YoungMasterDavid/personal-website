// src/pages/Contact.jsx

import React, { useState } from 'react';
import '../styles/global.css'; // Only needed if not already imported in index.js

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:8000/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await res.json();
        console.error('Submission error:', data);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <section className="contact-container">
      <div className="contact-wrapper">
        <h2 className="section-heading">Contact Me</h2>
        <p className="contact-subtext">Send me a message and I’ll get back to you soon!</p>

        {submitted && <p className="contact-success">✅ Your message was sent!</p>}

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="contact-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="contact-input"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="contact-textarea"
          ></textarea>

          <button type="submit" className="contact-button">Send Message</button>
        </form>
      </div>
    </section>
  );
}
