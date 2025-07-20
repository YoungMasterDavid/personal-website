// src/pages/Home.jsx

import React from 'react';
import '../styles/global.css'; // Optional if already imported globally

export default function Home() {
  return (
    <section className="home-container">
      <div className="home-content">
        <h1 className="home-heading">David C’zar C. Porras</h1>
        <p className="home-tagline">Computer Science Graduate</p>

        <p className="home-description">
          I'm a detail-oriented Computer Science graduate from the University of the Philippines Cebu, passionate about building full-stack applications using React and Django. Currently exploring opportunities in software development and open to intensive training programs.
        </p>

        <div className="home-links">
          {/* <a href="mailto:dcporras008@gmail.com" className="home-button">📧 Email Me</a> */}
          <a href="https://github.com/YoungMasterDavid" target="_blank" rel="noopener noreferrer" className="home-button">💻 GitHub</a>
          <a href="https://linkedin.com/in/david-czar-porras-584324270/" target="_blank" rel="noopener noreferrer" className="home-button">🔗 LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
