// src/pages/Tools.jsx

import React from 'react';
import '../styles/global.css';
import vscodeIcon from '../assets/vscode.svg';
import msvsIcon from '../assets/msvs.svg';
import figmaIcon from '../assets/figma.svg';
import gitIcon from '../assets/git.svg';
import githubIcon from '../assets/github.svg';
import netFrameworkIcon from '../assets/netframework.svg';
import nextjsIcon from '../assets/nextjs.svg';
import reactIcon from '../assets/react.png';
import mapboxIcon from '../assets/mapbox.svg';
import tailwindIcon from '../assets/tailwind.svg';
import mysqlIcon from '../assets/mysql.svg';
import unityIcon from '../assets/unity.svg';
import djangoIcon from '../assets/django.svg';

const tools = [
  { name: 'VS Code', icon: vscodeIcon },
  { name: 'Visual Studio', icon: msvsIcon },
  { name: 'Figma', icon: figmaIcon },
  { name: 'Git', icon: gitIcon },
  { name: 'GitHub', icon: githubIcon },
  { name: '.NET Framework', icon: netFrameworkIcon },
  { name: 'React', icon: nextjsIcon },
  { name: 'Next.js', icon: reactIcon },
  { name: 'Mapbox', icon: mapboxIcon },
  { name: 'Tailwind CSS', icon: tailwindIcon },
  { name: 'MySQL', icon: mysqlIcon },
  { name: 'Unity Engine', icon: unityIcon },
  { name: 'Django', icon:  djangoIcon},
];

export default function Tools() {
  return (
    <section className="tools-section">
      <h2 className="section-heading">Tools & Technologies</h2>
      <div className="tools-grid">
        {tools.map((tool, index) => (
          <div key={index} className="tool-card">
            <img src={tool.icon} alt={tool.name} className="tool-icon" />
            <p>{tool.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
