// src/components/Navbar.jsx

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <div style={styles.brand}>David Porras</div>
        <ul style={styles.navList}>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                style={{
                  ...styles.link,
                  ...(location.pathname === item.path ? styles.activeLink : {}),
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: '#0d1117',
    borderBottom: '1px solid #30363d',
    padding: '1rem 0',
    position: 'sticky',
    top: 0,
    zIndex: 10,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 1rem',
  },
  brand: {
    color: '#58a6ff',
    fontWeight: 'bold',
    fontSize: '1.3rem',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
  },
  link: {
    color: '#c9d1d9',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.2s',
  },
  activeLink: {
    color: '#58a6ff',
    fontWeight: 'bold',
  },
};
