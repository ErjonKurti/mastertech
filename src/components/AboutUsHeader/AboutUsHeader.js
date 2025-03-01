import React from 'react';
import { assets } from '../../assets/assets';  
import './AboutUsHeader.css';
import { useTranslation } from 'react-i18next';


const AboutUsHeader = () => {
     const { t } = useTranslation();
  return (
    <div className="about-us-header">
          <img src={assets.header5} alt="Project Background" className="about-us-header-img" />
          <div className="about-us-header-content">
          <h1>{t("aboutUs.title", { defaultValue: "About Us" })}</h1>
          <p>
        {t("aboutUs.description.part1", { defaultValue: "At" })} <strong>{t("aboutUs.companyName", { defaultValue: "MasterTech" })}</strong>, {t("aboutUs.description.part2", { defaultValue: "we are committed to delivering cutting-edge technology solutions that empower businesses. With expertise in IT infrastructure, security, and automation, we bring innovative and reliable solutions tailored to our clients' needs." })}
      </p>
          </div>
        </div>
  )
}

export default AboutUsHeader