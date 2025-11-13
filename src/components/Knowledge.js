import React from "react";
import "./Knowledge.css";

function Knowledge() {
  const techs = [
    "Java", "Spring Boot", "React.js", "MySQL", "OpenShift", 
    "HTML", "CSS", "JavaScript", "Git", "Docker", "Kubernetes", "Pax",  "Jmeter,"
  ];

  return (
    <section id="knowledge" className="knowledge-section">
      <h2>Tech Stack</h2>
      <div className="scrolling-tech">
        <div className="tech-track">
          {techs.map((tech, index) => (
            <div className="tech-item" key={index}>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Knowledge;
