import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-start px-6 md:px-24 max-w-5xl mx-auto pt-20">
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[#00f2fe] font-mono tracking-widest mb-4"
      >
        Hi, my name is
      </motion.p>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-7xl font-extrabold tracking-tight text-white mb-3"
      >
        Samiya Shahid.
      </motion.h1>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl md:text-5xl font-bold text-gray-400 mb-6"
      >
        I build high-end full-stack web applications.
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-gray-400 max-w-xl text-base md:text-lg mb-8 leading-relaxed"
      >
        Specializing in the MERN stack, crafting robust backends, database logic, and engineering sleek frontend components with fluid animations.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex space-x-4"
      >
        <a href="#projects" className="px-6 py-3 border border-[#00f2fe] text-[#00f2fe] rounded font-medium hover:bg-[#00f2fe]/10 transition-all duration-300">
          View My Work
        </a>
        <a href="#contact" className="px-6 py-3 bg-white text-black rounded font-medium hover:bg-gray-200 transition-all duration-300">
          Let's Connect
        </a>
        <a href="/resume.pdf" download="Samiya_Shahid_Resume.pdf" className="px-6 py-3 bg-white text-black rounded font-medium hover:bg-gray-200 transition-all duration-300">Download Resume</a>
      </motion.div>
    </section>
  );
};

export default Hero;