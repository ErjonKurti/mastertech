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
          <img src={assets.project15} alt={t('project_network_cables_modem_title')} className="project-image" />
          <div className="project-info">
            <span className="project-category">
              {t('category_Networking', { defaultValue: 'Networking' })}
            </span>
            <h3 className="project-title">{t('project_network_cables_modem_title', { defaultValue: 'NETWORK CABLES & MODEM INSTALLATION' })}</h3>
            <p className="project-description">
              {t('project_network_cables_modem_description', { defaultValue: 'Professional setup of network cables and modem configuration for high-speed and stable internet connectivity.' })}
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
          </div>
        </div>
        <div className="project-card">
          <img src={assets.project17} alt={t('project_security_cam_houses_title')} className="project-image" />
          <div className="project-info">
            <span className="project-category">
              {t('category_Security Systems', { defaultValue: 'Security Systems' })}
            </span>
            <h3 className="project-title">{t('project_security_cam_houses_title', { defaultValue: 'HOME SECURITY CAMERA INSTALLATION' })}</h3>
            <p className="project-description">
              {t('project_security_cam_houses_description', { defaultValue: 'Installation of advanced security cameras for houses, featuring remote access, night vision, and AI-powered motion alerts.' })}
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
          </div>
        </div>
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
          </div>
        </div>
        <div className="project-card">
          <img src={assets.project6} alt={t('project_electrial_installation_title')} className="project-image" />
          <div className="project-info">
            <span className="project-category">
              {t('category_Electrical Projects', { defaultValue: 'Electrical Projects' })}
            </span>
            <h3 className="project-title">{t('project_electrial_installation_title', { defaultValue: 'INDUSTRIAL WIRING & AUTOMATION' })}</h3>
            <p className="project-description">
              {t('project_electrial_installation_description', { defaultValue: 'Installation and maintenance of industrial wiring and automation systems, ensuring reliability and efficiency.' })}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
