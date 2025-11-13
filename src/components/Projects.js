import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/api/projects")
      .then(res => setProjects(res.data))
      .catch(err => {
        console.error("Error fetching backend projects:", err);
        // Fallback: dummy projects
        setProjects([
          {
            id: 1,
            title: "Openshift",
            description: "This project involved migrating enterprise applications from Pivotal CloudFoundry(PCF)toRedHatOpenShiftcontainerplatformacrosssixclusters. The objective was to modernize theinfrastructure, enhance application performance, andensureseamlesstransitions with minimal downtime.",
            techStack: "PCF,OpenShift,RedHat,Docker,Jenkins,CI/CD, Spring Boot, React, MySQL",
            githubLink: "https://github.com/yourusername/payment-gateway",
            Client:"Evernorth(2022-2024)"
            
          },
          {
            id: 2,
            title: "DAMS",
            description: "A comprehensive managed service engagement that provides product management engineeringservices,resourcequalitymanagement,cross-functional communication support, automation, and monitoring. The goal is to streamline operations and improve system efficiency through automation and modernization of backend services",
            techStack: "Java,Spring Boot,Splunk,Newrelic,Docker,Ks8,Postman",
            Client:"Evernorth(2024-2025)"
           
          }
        ]);
      });
  }, []);

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>

      <div className="project-cards">
        {projects.map(project => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => setSelectedProject(project)}
          >
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="project-details">
          <h3>{selectedProject.title}</h3>
          <p><strong>Tech Stack:</strong> {selectedProject.techStack}</p>
          <p>{selectedProject.description}</p>
          {selectedProject.githubLink && (
            <p><a href={selectedProject.githubLink} target="_blank" rel="noreferrer">GitHub</a></p>
          )}
          {selectedProject.demoLink && (
            <p><a href={selectedProject.demoLink} target="_blank" rel="noreferrer">Live Demo</a></p>
          )}
          {selectedProject.imageUrl && (
            <img src={selectedProject.imageUrl} alt={selectedProject.title} />
          )}
          <button onClick={() => setSelectedProject(null)}>Close</button>
        </div>
      )}
    </section>
  );
}

export default Projects;
