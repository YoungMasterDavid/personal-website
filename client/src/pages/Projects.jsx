// src/pages/Projects.jsx

import React, { useEffect, useState } from 'react';
import '../styles/global.css';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_BASE = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    fetch(`${API_BASE}/api/projects/`)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="projects-container">
      <h2 className="section-heading">Projects</h2>

      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
          <p>Loading projects...</p>
        </div>
      ) : (
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-tech">
                <strong>Tech Used:</strong> {project.tech_stack}
              </p>
              {project.github_link && (
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View on GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
