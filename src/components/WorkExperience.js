import React, { useState } from "react";
import "./WorkExperience.css";

function WorkExperience() {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const experiences = [
    {
      company: "Endava",
      role: "Java Full Stack Developer",
      duration: "Nov 2022 - Nov 2025",
      description: [
        "Developed Spring Boot microservices and React frontends",
        "Worked on CI/CD pipelines, deployment, and monitoring",
        "Implemented database solutions using MySQL and MongoDB",
      ],
      projects: [
        { title: "Openshift Migration",  description: "This project involved migrating enterprise applications from Pivotal CloudFoundry(PCF)toRedHatOpenShiftcontainerplatformacrosssixclusters. The objective was to modernize theinfrastructure, enhance application performance, andensureseamlesstransitions with minimal downtime.",
 },
        { title: "DAMS Module",  description: "A comprehensive managed service engagement that provides product management engineeringservices,resourcequalitymanagement,cross-functional communication support, automation, and monitoring. The goal is to streamline operations and improve system efficiency through automation and modernization of backend services",},
      ],
    },
    {
      company: "T-Mobile",
      role: "Java Full Stack Developer",
      duration: "Dec 2025 - Present",
      description: [
        "Will work on real-time telecom projects using Java & React",
        "Will implement backend microservices and frontend modules",
      ],
      projects: [
        { title: "Softwer Engineer", description: "Comming sooon!!!." }
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <h2>Work Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h3>{exp.role}</h3>
            <h4>{exp.company}</h4>
            <p className="duration">{exp.duration}</p>
            <ul>
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <button onClick={() => setSelectedCompany(exp)}>View Projects</button>
          </div>
        ))}
      </div>

      {selectedCompany && (
        <div className="projects-modal">
          <div className="projects-content">
            <h3>Projects at {selectedCompany.company}</h3>
            {selectedCompany.projects.map((proj, i) => (
              <div key={i} className="modal-project">
                <h4>{proj.title}</h4>
                <p>{proj.description}</p>
              </div>
            ))}
            <button onClick={() => setSelectedCompany(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default WorkExperience;
