// src/pages/Skills.jsx

import React from 'react';
import '../styles/global.css';
import javaIcon from '../assets/java.png';
import csharpIcon from '../assets/csharp.svg';
import cIcon from '../assets/c.svg';
import cppIcon from '../assets/cpp.svg';
import htmlIcon from '../assets/html5.svg';
import cssIcon from '../assets/css3.svg';
import javascriptIcon from '../assets/javascript.svg';
import pythonIcon from '../assets/python.svg';

const skills = [
  { name: 'Java', icon: javaIcon },
  { name: 'C#', icon: csharpIcon },
  { name: 'C', icon: cIcon },
  { name: 'C++', icon: cppIcon },
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
  { name: 'JavaScript', icon: javascriptIcon },
  { name: 'Python', icon: pythonIcon },
];

export default function Skills() {
  return (
    <section className="skills-section">
      <h2 className="section-heading">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
