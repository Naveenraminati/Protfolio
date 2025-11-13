import React from "react";
import "./Navbar.css"; // separate CSS for clarity

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Ramenati Naveen Kumar</div>
        <ul className="nav-links">
          <li><a href="#about">Home</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#experience">WorkExperience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
