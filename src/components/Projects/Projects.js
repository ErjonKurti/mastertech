import React from "react";
import { useTranslation } from 'react-i18next';
import "./Projects.css";
import { assets } from "../../assets/assets";
import { FaMapMarkerAlt } from "react-icons/fa";

const projects = [
  {
    title: "SHOP IT SOLUTION",
    description: "Complete IT infrastructure setup for retail businesses, including POS systems, cloud integration, and security solutions.",
    location: "Tirana, ALBANIA",
    image: assets.profile,
    category: "IT Solutions",
  },
  {
    title: "OFFICE SECURITY CAMERA SYSTEM",
    description: "Installation and configuration of high-resolution security cameras with remote access and AI-powered motion detection.",
    location: "Tirana, ALBANIA",
    image: assets.profile,
    category: "Security Systems",
  },
  {
    title: "SHOP HVAC SOLUTION",
    description: "Advanced HVAC system integration with smart temperature controls and energy-efficient air conditioning units.",
    location: "Tirana, ALBANIA",
    image: assets.profile,
    category: "HVAC",
  },
  {
    title: "SMART HOME AUTOMATION",
    description: "Implementation of IoT-enabled smart home solutions, including lighting, security, and voice-controlled automation.",
    location: "Durrës, ALBANIA",
    image: assets.profile,
    category: "Automation",
  },
  {
    title: "DATA CENTER INSTALLATION",
    description: "Design and setup of enterprise-level data centers with redundant power supply and high-speed networking.",
    location: "Tirana, ALBANIA",
    image: assets.profile,
    category: "IT Infrastructure",
  },
  {
    title: "OFFICE NETWORK SETUP",
    description: "Structured cabling and high-speed networking solutions for office environments, ensuring seamless connectivity.",
    location: "Vlora, ALBANIA",
    image: assets.profile,
    category: "Networking",
  },
  {
    title: "INDUSTRIAL SECURITY SYSTEM",
    description: "High-level security system deployment for industrial facilities, including perimeter control and 24/7 surveillance.",
    location: "Fier, ALBANIA",
    image: assets.profile,
    category: "Security Systems",
  },
  {
    title: "CLOUD SERVER DEPLOYMENT",
    description: "Deployment of scalable cloud servers for businesses, ensuring secure remote access and data backup solutions.",
    location: "Tirana, ALBANIA",
    image: assets.profile,
    category: "Cloud Solutions",
  },
  {
    title: "E-COMMERCE PLATFORM SETUP",
    description: "Development and deployment of e-commerce solutions with secure payment gateways and inventory management.",
    location: "Shkodër, ALBANIA",
    image: assets.profile,
    category: "E-Commerce",
  },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className="projects-section">
      <h1 className="section-title">
        {t("projects_title", { defaultValue: "Projects" })}
      </h1>
      <p className="section-description">
        {t("projects_description", {
          defaultValue:
            "At MasterTech, we specialize in delivering top-notch technology solutions tailored to businesses and enterprises. From IT infrastructure to smart automation and security systems, our projects are designed to enhance efficiency, security, and innovation. Below are some of the major projects we have successfully completed."
        })}
      </p>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <span className="project-category">
                {t(`category_${project.category}`, { defaultValue: project.category })}
              </span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-location">
                <FaMapMarkerAlt className="location-icon" /> {project.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
