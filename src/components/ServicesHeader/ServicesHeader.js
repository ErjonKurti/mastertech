import React from 'react';
import { assets } from '../../assets/assets';  
import './ServicesHeader.css';
import { useTranslation } from 'react-i18next';

const ServicesHeader = () => {
    const { t } = useTranslation();
  return (
    <div className="services-header">
      <img src={assets.profile} alt="Services Background" className="services-header-img" />
      <div className="services-header-content">
      <h1>
        {t("services_title", { defaultValue: "Services" })}
      </h1>
        <p>
        {t("services_description", {
          defaultValue:
            "Your trusted partner for top-quality solutions in electrical services, smartphones, cameras, alarms, access control systems, audio setups, and IT. We offer professional services tailored to meet your needs, ensuring security, connectivity, and advanced technology for your home and business."
        })}
      </p>
      </div>
    </div>
  );
};

export default ServicesHeader;
