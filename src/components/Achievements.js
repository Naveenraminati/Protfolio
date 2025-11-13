import React from "react";
import "./Achievements.css";
import cert2 from "../Assets/BestEmploye.jpg"; 
import cert1 from "../Assets/Java_page-0001.jpg";
function Achievements() {
  const achievements = [
   
    {
      title: "Modern Java Mastery",
      description: "I’ve completed my certification on Java 8 to 21 features Covered advancements from Streams, Lambdas, Optional, Date & Time API in Java 8 to modern features like Records, Sealed Classes, Pattern Matching, Text Blocks, Enhanced Switch, Var, Local Variable Type Inference, String APIs, and Virtual Threads in Java 21",
      certificate: cert1
    },
    {
      title: "Top Performer Endava",
      description: "Recognized as a top performer for completing projects efficiently and on time.",
      certificate: cert2
    },
    
  ];

  return (
    <section id="achievements" className="achievements-section">
      <h2>Achievements & Certificates</h2>
      <div className="achievement-list">
        {achievements.map((item, index) => (
          <div className="achievement-item" key={index}>
            <div className="achievement-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <div className="achievement-certificate">
              <img src={item.certificate} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
