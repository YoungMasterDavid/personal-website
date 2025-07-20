import React, { useEffect, useState } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/projects/')
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>Projects</h2>
      <div style={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.cardTitle}>{project.title}</h3>
            <p style={styles.description}>{project.description}</p>
            <p style={styles.tech}><strong>Tech Used:</strong> {project.tech_stack}</p>
            {project.github_link && (
              <a href={project.github_link} target="_blank" rel="noopener noreferrer" style={styles.link}>
                View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  container: {
    backgroundColor: '#0d1117',
    color: '#f0f6fc',
    padding: '4rem 2rem',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#58a6ff',
    marginBottom: '3rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
  },
  card: {
    backgroundColor: '#161b22',
    borderRadius: '12px',
    padding: '2rem',
    textAlign: 'left',
    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
  },
  cardTitle: {
    fontSize: '1.5rem',
    color: '#c9d1d9',
    marginBottom: '0.5rem',
  },
  description: {
    fontSize: '1rem',
    marginBottom: '1rem',
  },
  tech: {
    fontSize: '0.9rem',
    color: '#8b949e',
    marginBottom: '1rem',
  },
  link: {
    color: '#58a6ff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};
