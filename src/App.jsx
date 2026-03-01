import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certification from './components/Certification'
import Contact from './components/Contact'

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Apply dark mode to document element for Tailwind v4 compatibility
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`${darkMode ? 'dark' : ''} bg-white dark:bg-neutral-950 min-h-screen text-neutral-900 dark:text-slate-50 selection:bg-brand/30 selection:text-brand dark:selection:text-white transition-colors duration-500`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certification />
        <Contact />
      </main>
    </div>
  )
}

export default App
