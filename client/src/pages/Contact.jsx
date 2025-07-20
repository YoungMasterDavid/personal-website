// src/pages/Contact.jsx

import React, { useState } from 'react';

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
    <section style={styles.container}>
      <div style={styles.formWrapper}>
        <h2 style={styles.heading}>Contact Me</h2>
        <p style={styles.subtext}>Send me a message and I’ll get back to you soon!</p>

        {submitted && <p style={styles.success}>✅ Your message was sent!</p>}

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            style={styles.textarea}
          ></textarea>

          <button type="submit" style={styles.button}>Send Message</button>
        </form>
      </div>
    </section>
  );
}

const styles = {
  container: {
    padding: '4rem 2rem',
    backgroundColor: '#161b22',
    color: '#f0f6fc',
    display: 'flex',
    justifyContent: 'center',
  },
  formWrapper: {
    maxWidth: '600px',
    width: '100%',
  },
  heading: {
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: '1rem',
    color: '#58a6ff',
  },
  subtext: {
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#8b949e',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.75rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #30363d',
    backgroundColor: '#0d1117',
    color: '#f0f6fc',
  },
  textarea: {
    padding: '0.75rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #30363d',
    backgroundColor: '#0d1117',
    color: '#f0f6fc',
    resize: 'vertical',
  },
  button: {
    backgroundColor: '#238636',
    color: '#fff',
    fontSize: '1rem',
    padding: '0.75rem',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  success: {
    color: '#3fb950',
    marginBottom: '1rem',
    textAlign: 'center',
  },
};
