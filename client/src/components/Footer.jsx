// src/components/Footer.jsx

import React from 'react';
import '../styles/global.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        © {new Date().getFullYear()} David C’zar C. Porras. All rights reserved.
      </p>
    </footer>
  );
}
