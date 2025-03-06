import React from "react";
import "./ServicesSection.css";
import { motion } from "framer-motion";
import { FaWrench, FaCamera, FaBell, FaKey, FaLaptop, FaHome } from "react-icons/fa";
import { assets } from "../../assets/assets";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <div className="services-container">
      <h1 className="services-title">{t("services_title", { defaultValue: "Our Professional Services" })}</h1>
      <div className="services-grid">
        <motion.div className="service-card">
          <img src={assets.electrial} alt="electrical" className="service-image" />
          <div className="card-content">
            <div className="icon"><FaWrench /></div>
            <h2 className="h2-card-content">{t("service_electrical", { defaultValue: "Electrical" })}</h2>
            <p className="p-card-content">{t("expert_electrical_desc", { defaultValue: "Expert electrical installations & maintenance for residential and commercial spaces." })}</p>
            <span className="price">$99+</span>
            <button className="service-btn">{t("get_service", { defaultValue: "Get Service" })}</button>
          </div>
        </motion.div>

        <motion.div className="service-card">
          <img src={assets.smarthome} alt="smart_home" className="service-image" />
          <div className="card-content">
            <div className="icon"><FaHome /></div>
            <h2 className="h2-card-content">{t("service_smart_home", { defaultValue: "Smart Home Integration" })}</h2>
            <p className="p-card-content">{t("smart_home_desc", { defaultValue: "Seamless integration of smart home devices for automation and control." })}</p>
            <span className="price">$199+</span>
            <button className="service-btn">{t("get_service", { defaultValue: "Get Service" })}</button>
          </div>
        </motion.div>

        <motion.div className="service-card">
          <img src={assets.camera} alt="camera" className="service-image" />
          <div className="card-content">
            <div className="icon"><FaCamera /></div>
            <h2 className="h2-card-content">{t("service_camera", { defaultValue: "Camera" })}</h2>
            <p className="p-card-content">{t("camera_desc", { defaultValue: "Professional CCTV and security camera setup with remote access integration." })}</p>
            <span className="price">$199+</span>
            <button className="service-btn">{t("get_service", { defaultValue: "Get Service" })}</button>
          </div>
        </motion.div>

        <motion.div className="service-card">
          <img src={assets.alarms} alt="alarms" className="service-image" />
          <div className="card-content">
            <div className="icon"><FaBell /></div>
            <h2 className="h2-card-content">{t("service_alarms", { defaultValue: "Alarms" })}</h2>
            <p className="p-card-content">{t("alarms_desc", { defaultValue: "Advanced home and office alarm systems with real-time monitoring." })}</p>
            <span className="price">$149+</span>
            <button className="service-btn">{t("get_service", { defaultValue: "Get Service" })}</button>
          </div>
        </motion.div>

        <motion.div className="service-card">
          <img src={assets.accesscontrol} alt="access_control" className="service-image" />
          <div className="card-content">
            <div className="icon"><FaKey /></div>
            <h2 className="h2-card-content">{t("service_access_control", { defaultValue: "Access Control" })}</h2>
            <p className="p-card-content">{t("access_control_desc", { defaultValue: "Secure access solutions including biometrics and RFID-based systems." })}</p>
            <span className="price">$299+</span>
            <button className="service-btn">{t("get_service", { defaultValue: "Get Service" })}</button>
          </div>
        </motion.div>

        <motion.div className="service-card">
          <img src={assets.itservice} alt="it" className="service-image" />
          <div className="card-content">
            <div className="icon"><FaLaptop /></div>
            <h2 className="h2-card-content">{t("service_it", { defaultValue: "IT" })}</h2>
            <p className="p-card-content">{t("it_desc", { defaultValue: "Complete IT solutions including networking, support, and cybersecurity." })}</p>
            <span className="price">$199+</span>
            <button className="service-btn">{t("get_service", { defaultValue: "Get Service" })}</button>
          </div>
        </motion.div>
      </div>

      <div className="custom-offer">
        <h2>{t("custom_offer", { defaultValue: "Custom Offer" })}</h2>
        <p>{t("custom_offer_desc", { defaultValue: "Need a tailored solution? Contact us for a personalized offer." })}</p>
        <button className="custom-btn">{t("request_quote", { defaultValue: "Request a Quote" })}</button>
      </div>
    </div>
  );
};

export default ServicesSection;