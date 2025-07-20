// src/components/Footer.jsx

import React from 'react';
import '../styles/global.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        © {new Date().getFullYear()} David C’zar C. Porras. All rights reserved.
      </p>
      <p className="footer-text">📞 09193101391</p>
      <p className="footer-text">
        📧 <a href="mailto:hiraishin.porras@gmail.com">hiraishin.porras@gmail.com</a> |{' '}
        <a href="mailto:dcporras008@gmail.com">dcporras008@gmail.com</a>
      </p>
    </footer>
  );
}
