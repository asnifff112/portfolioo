import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="aboutme"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-[#1c2541] via-[#1b2a49] to-[#3a506b] text-white px-6 py-24"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold mb-4 text-sky-300"
      >
        About Me
      </motion.h2>

      {/* Underline */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-24 h-[3px] bg-sky-400 mb-10 rounded-full"
      />

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-3xl mx-auto text-white/80 text-base sm:text-lg leading-relaxed mb-12"
      >
        I’m <span className="text-sky-200 font-semibold">Asnif P</span>, a passionate{" "}
        <span className="text-sky-300 font-semibold">Frontend Developer</span> specializing in{" "}
        <span className="text-sky-200">HTML, CSS, JavaScript, React.js, Redux Toolkit,</span> and{" "}
        <span className="text-sky-200">Tailwind CSS.</span> I enjoy creating responsive, user-focused web
        interfaces that merge clean design with strong functionality.
        <br />
        <br />
        Currently, I’m working as a{" "}
        <span className="text-sky-200 font-semibold">React Intern at Bridgeon Solutions</span>, gaining hands-on
        experience in scalable frontend development and transforming ideas into real-world web experiences.
      </motion.p>

      {/* Skills Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="grid md:grid-cols-2 gap-8 max-w-5xl w-full px-4"
      >
        {/* Tech Stack */}
        <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold text-sky-300 mb-4">Tech Stack</h3>
          <p className="text-white/80 leading-relaxed">
            HTML • CSS • JavaScript • React.js • Redux Toolkit • Tailwind CSS • GitHub • LeetCode
          </p>
        </div>

        {/* Soft Skills */}
        <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold text-sky-300 mb-4">Professional Skills</h3>
          <p className="text-white/80 leading-relaxed">
            Project Management • Teamwork • Leadership • Critical Thinking • Time Management • Communication
          </p>
        </div>
      </motion.div>

      {/* Project Info */}
    
    </section>
  );
};

export default About;
