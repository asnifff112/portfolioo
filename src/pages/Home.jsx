import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";
import asnifImg from "../assets/asnif.jpg";

const Home = () => {

  const titleRef = useRef(null);
  const paraRef = useRef(null);
  const imageRef = useRef(null);
  const buttonRef = useRef([]);

  useEffect(() => {

    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
    .from(paraRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.4")
    .from(imageRef.current, {
      scale: 0.7,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
    }, "-=0.4")
    .from(buttonRef.current, {
      y: 20,
      opacity: 0,
      stagger: 0.2,
      duration: 0.6,
      ease: "power2.out",
    }, "-=0.3");

  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center relative 
      overflow-x-hidden bg-gradient-to-b from-[#0b132b] via-[#1c2541] to-[#3a506b] 
      text-white px-4 sm:px-6 lg:px-8 py-24"
    >

      {/* Background blur */}
      <div className="absolute top-10 left-5 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-10 right-5 w-40 h-40 bg-cyan-400/20 rounded-full blur-2xl animate-pulse" />

      {/* Text */}
      <div className="max-w-6xl mx-auto">
        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
        >
          Hi, I'm <span className="text-sky-300">Asnif</span>
        </h1>

        <p
          ref={paraRef}
          className="text-lg max-w-2xl mx-auto text-white/80 mb-10"
        >
          A passionate <span className="text-sky-200">Frontend Developer</span> who loves building 
          modern web experiences using React, Tailwind & GSAP.
        </p>
      </div>

      {/* Image */}
      <div ref={imageRef} className="mb-12">
        <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-white/30 shadow-lg hover:scale-105 transition">
          <img src={asnifImg} alt="Asnif" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">

        <Link
          ref={(el) => (buttonRef.current[0] = el)}
          to="projects"
          smooth={true}
          duration={500}
          offset={-70}
          className="px-8 py-3 border rounded-full cursor-pointer flex gap-2 hover:scale-105 transition"
        >
          View My Work <FaArrowRight />
        </Link>

        <Link
          ref={(el) => (buttonRef.current[1] = el)}
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
          className="px-8 py-3 border rounded-full cursor-pointer hover:scale-105 transition"
        >
          Contact Me
        </Link>

        <a
          ref={(el) => (buttonRef.current[2] = el)}
          href="/Asnif.pdf"
          download
          className="px-8 py-3 border rounded-full cursor-pointer flex gap-2 hover:scale-105 transition"
        >
          <FaDownload /> Download CV
        </a>

      </div>
    </section>
  );
};

export default Home;
