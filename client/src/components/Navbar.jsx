// src/components/Navbar.jsx

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/global.css';

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills'},
    { name: 'Tools', path: '/tools'},
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">David Porras</div>
        <ul className="navbar-links">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`navbar-link ${
                  location.pathname === item.path ? 'active' : ''
                }`}
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
