import React from "react";
import Typed from "react-typed";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I am Naveen Kumar
      </motion.h1>
      <Typed
        strings={["Full Stack Developer", "Java & React Enthusiast", "Open to Opportunities"]}
        typeSpeed={50}
        backSpeed={30}
        loop
      />
    </section>
  );
}

export default Hero;
