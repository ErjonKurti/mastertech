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
          <img src={assets.project1} alt={t('project_office_security_camera_title')} className="project-image" />
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
          <img src={assets.project5} alt={t('project_office_security_camera_title')} className="project-image" />
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
          <img src={assets.project14} alt={t('project_home_security_camera_title')} className="project-image" />
          <div className="project-info">
            <span className="project-category">
              {t('category_Security Systems', { defaultValue: 'Security Systems' })}
            </span>
            <h3 className="project-title">{t('project_home_security_camera_title', { defaultValue: 'HOME SECURITY CAMERA SYSTEM' })}</h3>
            <p className="project-description">
              {t('project_home_security_camera_description', { defaultValue: 'Installation and configuration of high-resolution security cameras with remote access and AI-powered motion detection.' })}
            </p>
            <p className="project-location">
              <FaMapMarkerAlt className="location-icon" /> {t('project_location_tirana', { defaultValue: 'Tirana, ALBANIA' })}
            </p>
          </div>
        </div>




        <div className="project-card">
          <img src={assets.project13} alt={t('project_home_security_camera_title')} className="project-image" />
          <div className="project-info">
            <span className="project-category">
              {t('category_Security Systems', { defaultValue: 'Security Systems' })}
            </span>
            <h3 className="project-title">{t('project_home_security_camera_title', { defaultValue: 'HOME SECURITY CAMERA SYSTEM' })}</h3>
            <p className="project-description">
              {t('project_home_security_camera_description', { defaultValue: 'Installation and configuration of high-resolution security cameras with remote access and AI-powered motion detection.' })}
            </p>
            <p className="project-location">
              <FaMapMarkerAlt className="location-icon" /> {t('project_location_tirana', { defaultValue: 'Tirana, ALBANIA' })}
            </p>
          </div>
        </div>



        <div className="project-card">
          <img src={assets.project6} alt={t('project_solar_power_installation_title')} className="project-image" />
          <div className="project-info">
            <span className="project-category">
              {t('category_Electrical Projects', { defaultValue: 'Electrical Projects' })}
            </span>
            <h3 className="project-title">{t('project_solar_power_installation_title', { defaultValue: 'SOLAR POWER INSTALLATION' })}</h3>
            <p className="project-description">
              {t('project_solar_power_installation_description', { defaultValue: 'Design and installation of solar panel systems for residential and commercial use, optimizing energy efficiency.' })}
            </p>
            <p className="project-location">
              <FaMapMarkerAlt className="location-icon" /> {t('project_location_durres', { defaultValue: 'Durrës, ALBANIA' })}
            </p>
          </div>
        </div>

        <div className="project-card">
          <img src={assets.project7} alt={t('project_parking_access_control_title')} className="project-image" />
          <div className="project-info">
            <span className="project-category">
              {t('category_Access Control & Camera Systems', { defaultValue: 'Access Control & Camera Systems' })}
            </span>
            <h3 className="project-title">{t('project_parking_access_control_title', { defaultValue: 'PARKING ACCESS CONTROL & MONITORING' })}</h3>
            <p className="project-description">
              {t('project_parking_access_control_description', { defaultValue: 'Integration of barrier gates, ANPR (Automatic Number Plate Recognition), and security cameras for controlled vehicle access.' })}
            </p>
            <p className="project-location">
              <FaMapMarkerAlt className="location-icon" /> {t('project_location_fier', { defaultValue: 'Fier, ALBANIA' })}
            </p>
          </div>
        </div>

        <div className="project-card">
          <img src={assets.project2} alt={t('project_industrial_wiring_title')} className="project-image" />
          <div className="project-info">
            <span className="project-category">
              {t('category_Electrical Projects', { defaultValue: 'Electrical Projects' })}
            </span>
            <h3 className="project-title">{t('project_industrial_wiring_title', { defaultValue: 'INDUSTRIAL WIRING & AUTOMATION' })}</h3>
            <p className="project-description">
              {t('project_industrial_wiring_description', { defaultValue: 'Installation and maintenance of industrial wiring and automation systems, ensuring reliability and efficiency.' })}
            </p>
            <p className="project-location">
              <FaMapMarkerAlt className="location-icon" /> {t('project_location_fier', { defaultValue: 'Durrës, ALBANIA' })}
            </p>
          </div>
        </div>

        <div className="project-card">
          <img src={assets.project12} alt={t('project_parking_access_control_title')} className="project-image" />
          <div className="project-info">
            <span className="project-category">
              {t('category_Access Control & Camera Systems', { defaultValue: 'Access Control & Camera Systems' })}
            </span>
            <h3 className="project-title">{t('project_parking_access_control_title', { defaultValue: 'PARKING ACCESS CONTROL & MONITORING' })}</h3>
            <p className="project-description">
              {t('project_parking_access_control_description', { defaultValue: 'Integration of barrier gates, ANPR (Automatic Number Plate Recognition), and security cameras for controlled vehicle access.' })}
            </p>
            <p className="project-location">
              <FaMapMarkerAlt className="location-icon" /> {t('project_location_fier', { defaultValue: 'Fier, ALBANIA' })}
            </p>
          </div>
        </div>

        <div className="project-card">
          <img src={assets.project11} alt={t('project_parking_access_control_title')} className="project-image" />
          <div className="project-info">
            <span className="project-category">
              {t('category_Access Control & Camera Systems', { defaultValue: 'Access Control & Camera Systems' })}
            </span>
            <h3 className="project-title">{t('project_parking_access_control_title', { defaultValue: 'PARKING ACCESS CONTROL & MONITORING' })}</h3>
            <p className="project-description">
              {t('project_parking_access_control_description', { defaultValue: 'Integration of barrier gates, ANPR (Automatic Number Plate Recognition), and security cameras for controlled vehicle access.' })}
            </p>
            <p className="project-location">
              <FaMapMarkerAlt className="location-icon" /> {t('project_location_fier', { defaultValue: 'Fier, ALBANIA' })}
            </p>
          </div>
        </div>

        <div className="project-card">
          <img src={assets.project3} alt={t('project_smart_home_wiring_title')} className="project-image" />
          <div className="project-info">
            <span className="project-category">
              {t('category_Electrical Projects', { defaultValue: 'Electrical Projects' })}
            </span>
            <h3 className="project-title">{t('project_smart_home_wiring_title', { defaultValue: 'SMART HOME WIRING & AUTOMATION' })}</h3>
            <p className="project-description">
              {t('project_smart_home_wiring_description', { defaultValue: 'Complete electrical wiring and smart home automation integration for modern homes, including remote control and energy-saving solutions.' })}
            </p>
            <p className="project-location">
              <FaMapMarkerAlt className="location-icon" /> {t('project_location_tirane', { defaultValue: 'Tiran, ALBANIA' })}
            </p>
          </div>
        </div>
        <div className="project-card">
          <img src={assets.project4} alt={t('project_home_wiring_title')} className="project-image" />
          <div className="project-info">
            <span className="project-category">
              {t('category_Electrical Projects', { defaultValue: 'Electrical Projects' })}
            </span>
            <h3 className="project-title">{t('project_home_wiring_title', { defaultValue: 'HOME WIRING & AUTOMATION' })}</h3>
            <p className="project-description">
              {t('project_home_wiring_description', { defaultValue: 'Installation and maintenance of home wiring and automation systems, ensuring reliability and efficiency.' })}
            </p>
            <p className="project-location">
              <FaMapMarkerAlt className="location-icon" /> {t('project_location_fier', { defaultValue: 'Fier, ALBANIA' })}
            </p>
          </div>
        </div>
        <div className="project-card">
          <img src={assets.project6} alt={t('project_industrial_wiring_title')} className="project-image" />
          <div className="project-info">
            <span className="project-category">
              {t('category_Electrical Projects', { defaultValue: 'Electrical Projects' })}
            </span>
            <h3 className="project-title">{t('project_industrial_wiring_title', { defaultValue: 'INDUSTRIAL WIRING & AUTOMATION' })}</h3>
            <p className="project-description">
              {t('project_industrial_wiring_description', { defaultValue: 'Installation and maintenance of industrial wiring and automation systems, ensuring reliability and efficiency.' })}
            </p>
            <p className="project-location">
              <FaMapMarkerAlt className="location-icon" /> {t('project_location_fier', { defaultValue: 'Fier, ALBANIA' })}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
