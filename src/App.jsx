import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import CV from './components/CV'

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [cvOpen, setCvOpen] = useState(false);

  // Apply dark mode to document element for Tailwind v4 compatibility
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Close CV modal on ESC
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') setCvOpen(false); };
    if (cvOpen) document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [cvOpen]);

  // Prevent body scroll when CV is open
  useEffect(() => {
    document.body.style.overflow = cvOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [cvOpen]);

  return (
    <div className={`${darkMode ? 'dark' : ''} bg-white dark:bg-neutral-950 min-h-screen text-neutral-900 dark:text-slate-50 selection:bg-brand/30 selection:text-brand dark:selection:text-white transition-colors duration-500`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero onOpenCV={() => setCvOpen(true)} />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      {cvOpen && <CV onClose={() => setCvOpen(false)} />}
    </div>
  )
}

export default App
