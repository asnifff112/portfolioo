import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";
import asnifImg from "../assets/asnif.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center relative 
                 overflow-x-hidden  /* ✅ prevents horizontal scroll on mobile */
                 bg-gradient-to-b from-[#0b132b] via-[#1c2541] to-[#3a506b] 
                 text-white px-4 sm:px-6 lg:px-8 py-24"
    >
      {/* Background Blur Circles */}
      <div className="absolute top-5 left-5 w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 
                      bg-blue-500/20 rounded-full blur-2xl sm:blur-3xl animate-pulse 
                      pointer-events-none" /> {/* ✅ prevents accidental scroll/interaction */}
      <div className="absolute bottom-5 right-5 w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 
                      bg-cyan-400/20 rounded-full blur-2xl sm:blur-3xl animate-pulse 
                      pointer-events-none" />

      {/* Hero Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl mx-auto"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 tracking-tight sm:tracking-wide drop-shadow-lg">
          Hi, I'm <span className="text-sky-300">Asnif</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-base sm:text-lg lg:text-xl xl:text-2xl 
                     max-w-xs sm:max-w-md lg:max-w-2xl xl:max-w-3xl 
                     mx-auto text-white/80 leading-relaxed sm:leading-loose mb-8 sm:mb-10 lg:mb-12"
        >
          A passionate <span className="text-sky-200 font-semibold">Frontend Developer</span> who loves building 
          beautiful, functional, and modern web experiences using React, Tailwind, and more.
        </motion.p>
      </motion.div>

      {/* 🖼️ Photo Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mb-10 sm:mb-12 lg:mb-16"
      >
        <div className="w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden 
                        border-4 border-white/30 shadow-[0_0_30px_rgba(0,0,0,0.5)] 
                        hover:scale-105 transition-transform duration-300 mx-auto">
          <img
            src={asnifImg}
            alt="Asnif"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 lg:gap-6 
                   w-full max-w-4xl mx-auto"
      >
        {/* View My Work */}
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-70}
          className="relative w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 
                     text-sm sm:text-base font-semibold text-white border border-white/20 
                     rounded-full bg-white/10 backdrop-blur-md overflow-hidden 
                     transition-all duration-300 ease-out
                     hover:scale-105 sm:hover:scale-110 hover:shadow-[0_0_25px_rgba(0,0,0,0.6)] 
                     hover:border-white/40 flex items-center justify-center gap-2 cursor-pointer"
        >
          View My Work <FaArrowRight className="text-sky-200" />
        </Link>

        {/* Contact Me */}
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
          className="relative w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 
                     text-sm sm:text-base font-semibold text-sky-200 border border-sky-400/30 
                     rounded-full bg-sky-400/10 backdrop-blur-md overflow-hidden 
                     transition-all duration-300 ease-out
                     hover:bg-sky-400/20 hover:scale-105 sm:hover:scale-110 
                     hover:shadow-[0_0_25px_rgba(0,0,0,0.6)]
                     flex items-center justify-center gap-2 cursor-pointer"
        >
          Contact Me
        </Link>

        {/* Download CV */}
        <a
          href="/Asnif.pdf"
          download
          className="relative w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 
                     text-sm sm:text-base font-semibold text-white border border-white/20 
                     rounded-full bg-gradient-to-r from-sky-500/30 to-sky-400/10 
                     backdrop-blur-md overflow-hidden transition-all duration-300 ease-out
                     hover:scale-105 sm:hover:scale-110 
                     hover:shadow-[0_0_25px_rgba(0,0,0,0.6)] hover:border-white/40 
                     flex items-center justify-center gap-2"
        >
          <FaDownload className="text-sky-300" /> Download CV
        </a>
      </motion.div>
    </section>
  );
};

export default Home;
