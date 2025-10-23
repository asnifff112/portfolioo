import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaUserCircle,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "About me", "Projects", "Skills"];

  const socialLinks = [
    { icon: FaPhone, url: "tel:+919746156270", tooltip: "Call Me" },
    { icon: FaEnvelope, url: "mailto:asnifkl@gmail.com", tooltip: "Email Me" },
    { icon: FaInstagram, url: "https://www.instagram.com/4.ziiiii/", tooltip: "Instagram" },
    { icon: FaLinkedinIn, url: "https://www.linkedin.com/in/asnif-p/", tooltip: "LinkedIn" },
    { icon: FaGithub, url: "https://github.com/asnifff112", tooltip: "GitHub" },
  ];

  const SocialIcons = ({ className = "" }) => (
    <div className={`flex items-center gap-2 sm:gap-3 flex-wrap justify-center ${className}`}>
      {socialLinks.map(({ icon: Icon, url, tooltip }, index) => (
        <a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          title={tooltip}
          className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 border border-white/20 rounded-full flex items-center justify-center 
                     text-white/80 bg-white/5 backdrop-blur-md overflow-hidden
                     transition-all duration-300 ease-out
                     hover:text-white hover:scale-110 hover:bg-white/10
                     hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
                     hover:border-white/40
                     group"
        >
          <Icon size={14} className="sm:w-4 sm:h-4 group-hover:scale-125 transition-transform duration-300" />
        </a>
      ))}
    </div>
  );

  const NavLink = ({ link, mobile = false }) => (
    <Link
      to={link.toLowerCase().replace(" ", "")}
      smooth={true}
      duration={500}
      offset={-80}
      spy={true}
      activeClass="text-sky-300"
      className={`relative font-semibold transition-all duration-300 ease-out cursor-pointer
                 ${
                   mobile
                     ? "px-6 py-3 text-sm border border-white/20 rounded-full bg-white/10 backdrop-blur-md text-white/90 hover:scale-105 hover:text-white hover:border-white/40 hover:shadow-lg w-full text-center"
                     : "px-3 sm:px-4 lg:px-6 py-2 text-xs sm:text-sm bg-white/95 backdrop-blur-sm rounded-2xl border border-white text-gray-700 hover:scale-105 hover:bg-white hover:shadow-lg hover:text-gray-900"
                 }`}
      onClick={() => setMenuOpen(false)}
    >
      {link.toUpperCase()}
    </Link>
  );

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-[#0b132b]/95 via-[#1c2541]/95 to-[#3a506b]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 md:py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 sm:gap-4">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide text-white">
            ASNIF<span className="text-sky-300">.</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          {navLinks.map((link) => (
            <NavLink key={link} link={link} />
          ))}
          {/* Desktop Contact Link */}
          <NavLink link="Contact" />
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          <SocialIcons />
        </div>

        {/* Mobile Contact Icon + Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          {/* Contact Icon */}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="p-2 w-10 h-10 flex items-center justify-center bg-sky-500/20 border border-sky-400/30 
                       text-white rounded-full hover:bg-sky-500/30 hover:scale-110 transition-all duration-300 cursor-pointer"
          >
            <FaUserCircle size={18} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="border border-white/30 rounded-xl p-2 text-white/90 bg-white/10 backdrop-blur-md 
                       hover:bg-white/20 hover:shadow-lg hover:scale-105 transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} className="w-5 h-5" /> : <Menu size={20} className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-b from-[#0f172a]/95 to-[#1c2541]/95 backdrop-blur-2xl border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
            {/* Mobile Navigation Links (excluding Contact) */}
            <div className="flex flex-col items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              {navLinks.map((link) => (
                <NavLink key={link} link={link} mobile={true} />
              ))}
            </div>

            {/* Mobile Social Icons */}
            <div className="flex justify-center">
              <SocialIcons />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
