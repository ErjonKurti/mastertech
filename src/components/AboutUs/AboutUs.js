import React from "react";
import { useTranslation } from 'react-i18next';

import "./AboutUs.css";
import Contact from "../Contact/Contact";

const AboutUs = () => {
  const { t } = useTranslation(); // Get the translation function

  return (
    <div className="about-section">
      <h1 className="section-title">{t("aboutUs.title", { defaultValue: "About Us" })}</h1>
      <p className="section-description">
        {t("aboutUs.description.part1", { defaultValue: "At" })} <strong>{t("aboutUs.companyName", { defaultValue: "MasterTech" })}</strong>, {t("aboutUs.description.part2", { defaultValue: "we are committed to delivering cutting-edge technology solutions that empower businesses. With expertise in IT infrastructure, security, and automation, we bring innovative and reliable solutions tailored to our clients' needs." })}
      </p>

      <div className="about-content">
        <div className="about-card">
          <h2 className="about-heading">{t("aboutUs.mission.heading", { defaultValue: "Our Mission" })}</h2>
          <p className="about-text">{t("aboutUs.mission.text", { defaultValue: "Our mission is to enhance businesses with high-quality technology solutions. We strive to deliver seamless IT integration, improve security, and optimize business operations through innovative and future-proof technologies." })}</p>
        </div>

        <div className="about-card">
          <h2 className="about-heading">{t("aboutUs.vision.heading", { defaultValue: "Our Vision" })}</h2>
          <p className="about-text">{t("aboutUs.vision.text", { defaultValue: "We envision a world where businesses of all sizes have access to smart, scalable, and secure technology solutions. Our goal is to be a leading provider of tech-driven transformations that shape the future." })}</p>
        </div>

        <div className="about-card">
          <h2 className="about-heading">{t("aboutUs.whoWeAre.heading", { defaultValue: "Who We Are" })}</h2>
          <p className="about-text">
            {t("aboutUs.whoWeAre.text.part1", { defaultValue: "Founded in" })} <strong>{t("aboutUs.foundedYear", { defaultValue: "[Your Year]" })}</strong>, {t("aboutUs.whoWeAre.text.part2", { defaultValue: "MasterTech has been at the forefront of providing IT and security solutions. Our team of experts specializes in networking, cloud computing, automation, and system security." })}
          </p>
        </div>

        <div className="about-card">
          <h2 className="about-heading">{t("aboutUs.values.heading", { defaultValue: "Our Values" })}</h2>
          <p className="about-text">{t("aboutUs.values.text", { defaultValue: "Integrity, innovation, and customer satisfaction are the pillars of MasterTech. We prioritize ethical business practices, continuous improvement, and ensuring that every client receives the best possible technology solutions." })}</p>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default AboutUs;
