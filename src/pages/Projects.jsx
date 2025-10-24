import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import project1 from "../assets/thrif.png";
import project2 from "../assets/port.png";
import project3 from "../assets/project1.png";
import project4 from "../assets/todo.png";

const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 350;
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const projectList = [
    {
      id: 1,
      img: project1,
      title: "Thriftrobe – E-commerce Store",
      desc: "A modern thrift store built using React and Tailwind CSS, featuring authentication, cart, wishlist, and admin control panel.",
      link: "#",
    },
    {
      id: 2,
      img: project2,
      title: "Portfolio Website",
      desc: "Personal portfolio built with React, Framer Motion, and Tailwind CSS showcasing skills, experience, and projects.",
      link: "#",
    },
    {
      id: 3,
      img: project3,
      title: "Dashboard System",
      desc: "An interactive admin dashboard built using React and Redux Toolkit with analytics, charts, and responsive UI.",
      link: "#",
    },
    {
      id: 4,
      img: project4,
      title: "To-Do Web",
      desc: "A simple and elegant task manager built using React and Tailwind CSS.",
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center text-center 
                 bg-gradient-to-b from-[#0b132b] via-[#1c2541] to-[#3a506b] 
                 text-white px-4 sm:px-6 py-24 relative"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-sky-300"
      >
        My Projects
      </motion.h2>

      {/* Underline */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-20 sm:w-24 h-[3px] bg-sky-400 mb-12 rounded-full"
      />

      {/* Arrow Buttons - show only on desktop */}
      <div className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={() => scroll("left")}
          className="p-3 bg-white/10 border border-white/20 rounded-full text-sky-300 
                     hover:bg-white/20 hover:scale-110 transition-all duration-300"
        >
          <FaArrowLeft size={20} />
        </button>
      </div>

      <div className="hidden md:flex absolute right-5 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={() => scroll("right")}
          className="p-3 bg-white/10 border border-white/20 rounded-full text-sky-300 
                     hover:bg-white/20 hover:scale-110 transition-all duration-300"
        >
          <FaArrowRight size={20} />
        </button>
      </div>

      {/* Projects Container */}
      <div
        ref={scrollRef}
        className="w-full max-w-6xl flex flex-col sm:flex-row sm:overflow-x-auto sm:scroll-smooth sm:gap-6
                   sm:snap-x sm:snap-mandatory sm:px-4 md:px-8 no-scrollbar"
      >
        {projectList.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            className="w-full sm:min-w-[300px] md:min-w-[350px] lg:min-w-[380px] 
                       bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden 
                       shadow-[0_0_25px_rgba(0,0,0,0.3)] transition-transform duration-300 mb-6 sm:mb-0
                       flex-shrink-0 snap-start hover:shadow-[0_0_30px_rgba(56,189,248,0.3)]"
          >
            {/* Image */}
            <div className="w-full h-52 sm:h-56 md:h-60 overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6 text-left">
              <h3 className="text-xl sm:text-2xl font-semibold text-sky-300 mb-2 sm:mb-3">
                {project.title}
              </h3>
              <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base">
                {project.desc}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 bg-sky-500/20 border border-sky-400/30 
                           text-sky-200 rounded-full hover:bg-sky-500/30 hover:scale-105 transition-all"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
