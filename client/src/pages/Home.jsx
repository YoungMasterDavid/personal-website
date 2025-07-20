// src/pages/Home.jsx

import React from 'react';

export default function Home() {
  return (
    <section style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>David C’zar C. Porras</h1>
        <p style={styles.tagline}>Computer Science Graduate</p>

        <p style={styles.description}>
          I'm a detail-oriented Computer Science graduate from the University of the Philippines Cebu, passionate about building full-stack applications using React and Django. Currently exploring opportunities in software development and open to intensive training programs.
        </p>

        <div style={styles.links}>
          {/* <a href="mailto:dcporras008@gmail.com" style={styles.button}>📧 Email Me</a> */}
          <a href="https://github.com/YoungMasterDavid" target="_blank" rel="noopener noreferrer" style={styles.button}>💻 GitHub</a>
          <a href="https://linkedin.com/in/david-czar-porras-584324270/" target="_blank" rel="noopener noreferrer" style={styles.button}>🔗 LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

const styles = {
  container: {
    display: 'flex',
    height: '90vh',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    background: '#0d1117',
    color: '#f0f6fc',
  },
  content: {
    textAlign: 'center',
    maxWidth: '700px',
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  tagline: {
    fontSize: '1.5rem',
    color: '#58a6ff',
    marginBottom: '1.5rem',
  },
  description: {
    fontSize: '1.1rem',
    marginBottom: '2rem',
    lineHeight: '1.6',
  },
  links: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    textDecoration: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    backgroundColor: '#238636',
    color: '#fff',
    transition: '0.3s',
  },
};
