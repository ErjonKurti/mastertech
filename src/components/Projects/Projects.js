import React from "react";
import "./Projects.css";
import { assets } from "../../assets/assets";

const projects = [
  {
    title: "SHOP IT SOLUTION",
    location: "Tirana, ALBANIA",
    image: assets.profile,
  },
  {
    title: "OFFICE SECURITY CAMERA",
    location: "Tirana, ALBANIA",
    image: assets.profile,
  },
  {
    title: "SHOP HVAC SOLUTION",
    location: "Tirana, ALBANIA",
    image: assets.profile,
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.image} alt={project.title} className="project-image" />
          <div className="project-info">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-location">{project.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
