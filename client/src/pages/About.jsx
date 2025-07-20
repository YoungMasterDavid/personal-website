// src/pages/About.jsx

import React from 'react';

export default function About() {
  return (
    <section style={styles.container}>
      <div style={styles.content}>
        <h2 style={styles.heading}>About Me</h2>

        <p style={styles.paragraph}>
          Hello! I'm <strong>David C’zar C. Porras</strong>, a Computer Science graduate (cum laude) from the University of the Philippines Cebu. I'm passionate about solving real-world problems through software development and committed to continuous learning and improvement.
        </p>

        <p style={styles.paragraph}>
          My academic journey exposed me to key areas such as <strong>Data Structures</strong>, <strong>Software Engineering</strong>, and <strong>Computer Networks</strong>. For my capstone, I built a <strong>Bitcoin price forecasting model using Neural ODEs</strong>, which challenged me to blend machine learning with time-series data.
        </p>

        <p style={styles.paragraph}>
          I'm most confident using <strong>Java, C++, and Django</strong>, and have hands-on experience building full-stack applications using <strong>React</strong> and <strong>Next.js</strong>. I'm also actively learning Japanese and fascinated by the intersection of culture and technology.
        </p>

        <p style={styles.paragraph}>
          I thrive in collaborative environments, love debugging complex problems, and am always ready to undergo intensive training to grow as a developer.
        </p>
      </div>
    </section>
  );
}

const styles = {
  container: {
    backgroundColor: '#161b22',
    color: '#c9d1d9',
    padding: '4rem 2rem',
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    maxWidth: '800px',
    textAlign: 'left',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#58a6ff',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    marginBottom: '1.5rem',
  },
};
