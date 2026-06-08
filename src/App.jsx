import React from 'react';

import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen selection:bg-[#00f2fe]/20 selection:text-[#00f2fe]">
      <Navbar/>
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="text-center py-8 text-xs font-mono text-gray-600 border-t border-white/5">
        Designed & Built by Samiya Shahid © {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;