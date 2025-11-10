import React from "react";
import Navbar from "./NavBar"
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";


function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Home />
      <About />
      <Projects />
       <Skills />
      <Contact />
     
    </div>
  );
}

export default App;
