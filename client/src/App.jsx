// src/App.jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  const toggleTheme = () => {
    document.body.classList.toggle('light');
  };

  return (
    <BrowserRouter>
      <div className="theme-toggle">
        <label className="switch">
          <input type="checkbox" onChange={toggleTheme} />
          <span className="slider"></span>
        </label>
      </div>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
