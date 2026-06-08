import React from 'react';
import { motion } from 'framer-motion';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiRedux, SiTailwindcss, SiPostman, SiGit } from 'react-icons/si';

const Skills = () => {
  const skillsData = [
    { name: "MongoDB", icon: <SiMongodb className="text-emerald-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
    { name: "React.js", icon: <SiReact className="text-[#00f2fe]" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "Git & GitHub", icon: <SiGit className="text-red-500" /> },
  ];

  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
{/* text-white class ko add kiya gaya hai */}
<h2 className="text-2xl md:text-3xl font-bold text-white mb-12 flex items-center gap-4">
  <span className="text-[#00f2fe] font-mono text-xl">01.</span> Technologies & Tools
</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skillsData.map((skill, index) => (
          <motion.div 
            whileHover={{ y: -5, borderColor: 'rgba(0, 242, 254, 0.4)' }}
            className="flex flex-col items-center justify-center p-6 bg-[#121212] border border-white/5 rounded-lg transition-colors"
            key={index}
          >
            <div className="text-4xl mb-3">{skill.icon}</div>
            <p className="text-sm font-medium tracking-wide text-gray-300">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;