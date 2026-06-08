import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 px-6 md:px-12 py-4 flex justify-between items-center">
      <div className="text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] to-[#4facfe]">
        SAMIYA.DEV
      </div>
      
      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8 text-xs uppercase tracking-widest text-gray-400">
        <a href="#hero" className="hover:text-[#00f2fe] transition-colors">Home</a>
        <a href="#skills" className="hover:text-[#00f2fe] transition-colors">Skills</a>
        <a href="#projects" className="hover:text-[#00f2fe] transition-colors">Projects</a>
        <a href="#contact" className="hover:text-[#00f2fe] transition-colors">Contact</a>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl text-gray-400 hover:text-white">
        {isOpen ? <HiX /> : <HiMenuAlt3 />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0d0d0d] border-b border-white/5 flex flex-col space-y-4 p-6 text-center text-sm uppercase tracking-widest text-gray-400 md:hidden">
          <a href="#hero" onClick={() => setIsOpen(false)} className="hover:text-[#00f2fe]">Home</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-[#00f2fe]">Skills</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-[#00f2fe]">Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-[#00f2fe]">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;