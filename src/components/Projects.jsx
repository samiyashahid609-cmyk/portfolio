import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projectList = [
    {
      title: "Full-Stack E-Commerce Platform",
      description: "Advanced architecture with secure JWT authentication, Redux toolkit state management, and custom automated email verification systems.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Redux"],
      github: "#",
      live: "#"
    },
    {
      title: "Cinematic Automotive Platform",
      description: "A premium car presentation interface built focused on fluid performance metrics, modern minimalist layouts, and responsive micro-interactions.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      github: "#",
      live: "#"
    },
    {
      title: "Interactive UI Showcase Hub",
      description: "A sleek Single Page Application showcasing modern frontend design trends, responsive navigation modules, clean grid patterns, and premium card layouts.",
      tech: ["React", "Tailwind CSS", "React Icons"],
      github: "#",
      live: "#"
    },
    {
      title: "Product Management Dashboard",
      description: "An isolated client-side SPA focused on high-speed dynamic filtering, operational database views simulation, and streamlined user action control.",
      tech: ["React", "Context API", "CSS Modules"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 flex items-center gap-4">
  <span className="text-[#00f2fe] font-mono text-xl">01.</span> Technologies & Tools
</h2>
      
      {/* Grid Layout to handle multiple cards cleanly */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectList.map((project, index) => (
          <div key={index} className="bg-[#121212] border border-white/5 rounded-lg p-6 flex flex-col justify-between hover:border-[#00f2fe]/30 hover:y-[-4px] transition-all duration-300 group">
            <div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00f2fe] transition-colors">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="bg-[#0a0a0a] text-[11px] text-[#00f2fe] font-mono px-2.5 py-1 rounded border border-[#00f2fe]/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4 text-lg text-gray-400 pt-4 border-t border-white/5">
              <a href={project.github} className="hover:text-white transition-colors" target="_blank" rel="noreferrer"><FiGithub /></a>
              <a href={project.live} className="hover:text-[#00f2fe] transition-colors" target="_blank" rel="noreferrer"><FiExternalLink /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;