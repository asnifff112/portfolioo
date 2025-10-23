import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiFramer, SiFigma } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: "Advanced" },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: "Advanced" },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" />, level: "Intermediate" },
    { name: "React.js", icon: <FaReact className="text-sky-400" />, level: "Intermediate" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, level: "Advanced" },
    { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" />, level: "Intermediate" },
    { name: "Framer Motion", icon: <SiFramer className="text-pink-500" />, level: "Intermediate" },
    { name: "Git / GitHub", icon: <FaGithub className="text-gray-200" />, level: "Intermediate" },
    { name: "Figma", icon: <SiFigma className="text-pink-400" />, level: "Basic" },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center text-center 
                 bg-gradient-to-b from-[#1c2541] via-[#3a506b] to-[#5bc0be] text-white px-6 py-24"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold mb-4 text-sky-100"
      >
        My Skills
      </motion.h2>

      {/* Underline */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-24 h-[3px] bg-white mb-12 rounded-full"
      />

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="group bg-white/10 backdrop-blur-lg border border-white/10 
                       rounded-2xl p-6 hover:bg-white/20 hover:scale-105 transition-all 
                       flex flex-col items-center text-center shadow-[0_0_20px_rgba(0,0,0,0.3)]"
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <h3 className="text-lg font-semibold text-white mb-1">
              {skill.name}
            </h3>
            <p className="text-sm text-white/70">{skill.level}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
