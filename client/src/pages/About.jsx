// src/pages/About.jsx

import React from 'react';
import '../styles/global.css'; // Only needed if not already imported in index.js

export default function About() {
  return (
    <section className="about-container">
      <div className="about-content">
        <h2 className="section-heading">About Me</h2>

        <p className="about-paragraph">
          Hello! I'm <strong>David C’zar C. Porras</strong>, a Computer Science graduate (cum laude) from the University of the Philippines Cebu. I'm passionate about solving real-world problems through software development and committed to continuous learning and improvement.
        </p>

        <p className="about-paragraph">
          My academic journey exposed me to key areas such as <strong>Data Structures</strong>, <strong>Software Engineering</strong>, and <strong>Computer Networks</strong>. For my capstone, I built a <strong>Bitcoin price forecasting model using Neural ODEs</strong>, which challenged me to blend machine learning with time-series data.
        </p>

        <p className="about-paragraph">
          I'm most confident using <strong>Java, C++, and Django</strong>, and have hands-on experience building full-stack applications using <strong>React</strong> and <strong>Next.js</strong>. I'm also actively learning Japanese and fascinated by the intersection of culture and technology.
        </p>

        <p className="about-paragraph">
          I thrive in collaborative environments, love debugging complex problems, and am always ready to undergo intensive training to grow as a developer.
        </p>
      </div>
    </section>
  );
}
