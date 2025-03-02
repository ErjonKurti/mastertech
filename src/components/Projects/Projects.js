import React from "react";
import { useTranslation } from 'react-i18next';
import "./Projects.css";
import { assets } from "../../assets/assets";
import { FaMapMarkerAlt } from "react-icons/fa";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className="projects-section">
      <div className="projects-container">
        <div className="project-card">
          <img src={assets.profile} alt={t('project_shop_it_solution_title')} className="project-image" />
          <div className="project-info">
            <span className="project-category">
              {t('category_IT Solutions', { defaultValue: 'IT Solutions' })}
            </span>
            <h3 className="project-title">{t('project_shop_it_solution_title', { defaultValue: 'SHOP IT SOLUTION' })}</h3>
            <p className="project-description">
              {t('project_shop_it_solution_description', { defaultValue: 'Complete IT infrastructure setup for retail businesses, including POS systems, cloud integration, and security solutions.' })}
            </p>
            <p className="project-location">
              <FaMapMarkerAlt className="location-icon" /> {t('project_location_tirana', { defaultValue: 'Tirana, ALBANIA' })}
            </p>
          </div>
        </div>

        <div className="project-card">
          <img src={assets.profile} alt={t('project_office_security_camera_title')} className="project-image" />
          <div className="project-info">
            <span className="project-category">
              {t('category_Security Systems', { defaultValue: 'Security Systems' })}
            </span>
            <h3 className="project-title">{t('project_office_security_camera_title', { defaultValue: 'OFFICE SECURITY CAMERA SYSTEM' })}</h3>
            <p className="project-description">
              {t('project_office_security_camera_description', { defaultValue: 'Installation and configuration of high-resolution security cameras with remote access and AI-powered motion detection.' })}
            </p>
            <p className="project-location">
              <FaMapMarkerAlt className="location-icon" /> {t('project_location_tirana', { defaultValue: 'Tirana, ALBANIA' })}
            </p>
          </div>
        </div>

        <div className="project-card">
          <img src={assets.profile} alt={t('project_shop_hvac_solution_title')} className="project-image" />
          <div className="project-info">
            <span className="project-category">
              {t('category_HVAC', { defaultValue: 'HVAC' })}
            </span>
            <h3 className="project-title">{t('project_shop_hvac_solution_title', { defaultValue: 'SHOP HVAC SOLUTION' })}</h3>
            <p className="project-description">
              {t('project_shop_hvac_solution_description', { defaultValue: 'Advanced HVAC system integration with smart temperature controls and energy-efficient air conditioning units.' })}
            </p>
            <p className="project-location">
              <FaMapMarkerAlt className="location-icon" /> {t('project_location_tirana', { defaultValue: 'Tirana, ALBANIA' })}
            </p>
          </div>
        </div>

        <div className="project-card">
          <img src={assets.profile} alt={t('project_smart_home_automation_title')} className="project-image" />
          <div className="project-info">
            <span className="project-category">
              {t('category_Automation', { defaultValue: 'Automation' })}
            </span>
            <h3 className="project-title">{t('project_smart_home_automation_title', { defaultValue: 'SMART HOME AUTOMATION' })}</h3>
            <p className="project-description">
              {t('project_smart_home_automation_description', { defaultValue: 'Implementation of IoT-enabled smart home solutions, including lighting, security, and voice-controlled automation.' })}
            </p>
            <p className="project-location">
              <FaMapMarkerAlt className="location-icon" /> {t('project_location_durres', { defaultValue: 'Durrës, ALBANIA' })}
            </p>
          </div>
        </div>

        <div className="project-card">
          <img src={assets.profile} alt={t('project_data_center_installation_title')} className="project-image" />
          <div className="project-info">
            <span className="project-category">
              {t('category_IT Infrastructure', { defaultValue: 'IT Infrastructure' })}
            </span>
            <h3 className="project-title">{t('project_data_center_installation_title', { defaultValue: 'DATA CENTER INSTALLATION' })}</h3>
            <p className="project-description">
              {t('project_data_center_installation_description', { defaultValue: 'Design and setup of enterprise-level data centers with redundant power supply and high-speed networking.' })}
            </p>
            <p className="project-location">
              <FaMapMarkerAlt className="location-icon" /> {t('project_location_tirana', { defaultValue: 'Tirana, ALBANIA' })}
            </p>
          </div>
        </div>

        <div className="project-card">
          <img src={assets.profile} alt={t('project_office_network_setup_title')} className="project-image" />
          <div className="project-info">
            <span className="project-category">
              {t('category_Networking', { defaultValue: 'Networking' })}
            </span>
            <h3 className="project-title">{t('project_office_network_setup_title', { defaultValue: 'OFFICE NETWORK SETUP' })}</h3>
            <p className="project-description">
              {t('project_office_network_setup_description', { defaultValue: 'Structured cabling and high-speed networking solutions for office environments, ensuring seamless connectivity.' })}
            </p>
            <p className="project-location">
              <FaMapMarkerAlt className="location-icon" /> {t('project_location_vlora', { defaultValue: 'Vlora, ALBANIA' })}
            </p>
          </div>
        </div>

        <div className="project-card">
          <img src={assets.profile} alt={t('project_industrial_security_system_title')} className="project-image" />
          <div className="project-info">
            <span className="project-category">
              {t('category_Security Systems', { defaultValue: 'Security Systems' })}
            </span>
            <h3 className="project-title">{t('project_industrial_security_system_title', { defaultValue: 'INDUSTRIAL SECURITY SYSTEM' })}</h3>
            <p className="project-description">
              {t('project_industrial_security_system_description', { defaultValue: 'High-level security system deployment for industrial facilities, including perimeter control and 24/7 surveillance.' })}
            </p>
            <p className="project-location">
              <FaMapMarkerAlt className="location-icon" /> {t('project_location_fier', { defaultValue: 'Fier, ALBANIA' })}
            </p>
          </div>
        </div>

        <div className="project-card">
          <img src={assets.profile} alt={t('project_cloud_server_deployment_title')} className="project-image" />
          <div className="project-info">
            <span className="project-category">
              {t('category_Cloud Solutions', { defaultValue: 'Cloud Solutions' })}
            </span>
            <h3 className="project-title">{t('project_cloud_server_deployment_title', { defaultValue: 'CLOUD SERVER DEPLOYMENT' })}</h3>
            <p className="project-description">
              {t('project_cloud_server_deployment_description', { defaultValue: 'Deployment of scalable cloud servers for businesses, ensuring secure remote access and data backup solutions.' })}
            </p>
            <p className="project-location">
              <FaMapMarkerAlt className="location-icon" /> {t('project_location_tirana', { defaultValue: 'Tirana, ALBANIA' })}
            </p>
          </div>
        </div>

        <div className="project-card">
          <img src={assets.profile} alt={t('project_e_commerce_platform_title')} className="project-image" />
          <div className="project-info">
            <span className="project-category">
              {t('category_E-Commerce', { defaultValue: 'E-Commerce' })}
            </span>
            <h3 className="project-title">{t('project_e_commerce_platform_title', { defaultValue: 'E-COMMERCE PLATFORM SETUP' })}</h3>
            <p className="project-description">
              {t('project_e_commerce_platform_description', { defaultValue: 'Development and deployment of e-commerce solutions with secure payment gateways and inventory management.' })}
            </p>
            <p className="project-location">
              <FaMapMarkerAlt className="location-icon" /> {t('project_location_shkoder', { defaultValue: 'Shkodër, ALBANIA' })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
