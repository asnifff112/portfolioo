import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

   emailjs
  .sendForm(
    "service_asnif1010",       
    "template_6vnixgp",      
    form.current,
    "wHxnUO2UeHSYdRVtM"         
  )
  .then(
    (result) => {
      console.log(result.text);
      Swal.fire({
        icon: "success",
        title: "Message Sent! ✅",
        text: "Thanks for reaching out, Asnif will contact you soon 😊",
        background: "#1c2541",
        color: "#fff",
        confirmButtonColor: "#38bdf8",
        confirmButtonText: "OK",
      });
      form.current.reset();
    },
    (error) => {
      console.log(error.text);
      Swal.fire({
        icon: "error",
        title: "Oops! ❌",
        text: "Something went wrong. Please try again later.",
        background: "#1c2541",
        color: "#fff",
        confirmButtonColor: "#ef4444",
        confirmButtonText: "Close",
      });
    }
  );

  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center text-center 
                 bg-gradient-to-b from-[#3a506b] via-[#1c2541] to-[#0b132b] text-white px-6 py-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold mb-4 text-sky-300"
      >
        Contact Me
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-24 h-[3px] bg-sky-400 mb-10 rounded-full"
      />

      <p className="max-w-xl mx-auto text-white/80 text-base sm:text-lg mb-12">
        Let’s build something awesome together!   
        Fill in the form below or contact me directly.
      </p>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl w-full">
        {/* Left Side - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-8 
                     shadow-[0_0_20px_rgba(0,0,0,0.3)] text-left space-y-6"
        >
          <h3 className="text-2xl font-semibold text-sky-300 mb-4">
            Get in Touch
          </h3>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-sky-400 text-xl" />
            <span className="text-white/80">+91 9746156270</span>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-sky-400 text-xl" />
            <span className="text-white/80">asnifkl@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-sky-400 text-xl" />
            <span className="text-white/80">Malappuram, Kerala</span>
          </div>
        </motion.div>

        {/* Right Side - Working Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-8 
                     shadow-[0_0_20px_rgba(0,0,0,0.3)] flex flex-col gap-6"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 
                       text-white placeholder-white/60 focus:outline-none focus:border-sky-400 transition"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 
                       text-white placeholder-white/60 focus:outline-none focus:border-sky-400 transition"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 
                       text-white placeholder-white/60 focus:outline-none focus:border-sky-400 transition"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 mt-2 text-lg font-semibold text-white bg-sky-500/20 border border-sky-400/30 
                       rounded-full hover:bg-sky-500/30 hover:scale-105 transition-all duration-300"
          >
            Send Message 
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
