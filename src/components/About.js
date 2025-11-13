import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="about-section">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>
      <p>
        I am a Full Stack Java Developer with 3 years of experience designing, developing, and maintaining enterprise-grade applications. I specialize in Core Java, Java 8, OOP principles, Spring Boot, Microservices, RESTful APIs, and MySQL. Experienced in Agile environments and proficient with CI/CD pipelines, I have successfully contributed to projects in the healthcare and pharmaceutical domains.

On the front end, I am skilled in HTML, CSS, and React.js, enabling seamless integration of modern, responsive user interfaces with robust backend services. I am well-versed in production deployment strategies, team collaboration, and delivering high-quality software solutions that meet business needs.
      </p>
    </section>
  );
}

export default About;
