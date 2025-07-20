// src/components/Footer.jsx

import React from 'react';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© {new Date().getFullYear()} David C’zar C. Porras. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#0d1117',
    padding: '1rem 0',
    textAlign: 'center',
    borderTop: '1px solid #30363d',
  },
  text: {
    color: '#8b949e',
    fontSize: '0.9rem',
  },
};
