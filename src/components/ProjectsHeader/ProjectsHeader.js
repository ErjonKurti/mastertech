import React from 'react';
import { assets } from '../../assets/assets';  
import './ProjectHeader.css';
import { useTranslation } from 'react-i18next';

const ProjectHeader = () => {
    const { t } = useTranslation();
  return (
    <div className="project-header">
      <img src={assets.header3} alt="Project Background" className="project-header-img" />
      <div className="project-header-content">
      <h1>
        {t("projects_title", { defaultValue: "Projects" })}
      </h1>
        <p>
        {t("projects_description", {
          defaultValue:
            "At MasterTech, we specialize in delivering top-notch technology solutions tailored to businesses and enterprises. From IT infrastructure to smart automation and security systems, our projects are designed to enhance efficiency, security, and innovation. Below are some of the major projects we have successfully completed."
        })}
      </p>
      </div>
    </div>
  );
};

export default ProjectHeader;
