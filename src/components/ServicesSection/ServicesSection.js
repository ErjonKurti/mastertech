import React from "react";
import "./ServicesSection.css";
import { motion } from "framer-motion";
import { FaWrench, FaMobileAlt, FaCamera, FaBell, FaKey, FaMusic, FaLaptop } from "react-icons/fa";
import { assets } from "../../assets/assets";
import { useTranslation } from "react-i18next";

const services = [
  { 
    icon: <FaWrench />, 
    title: "electrical", 
    desc: "expert_electrical_desc", 
    price: "$99+", 
    image: assets.electrial
  },
  { 
    icon: <FaMobileAlt />, 
    title: "smartphones", 
    desc: "smartphones_desc", 
    price: "$49+", 
    image: assets.smartphones
  },
  { 
    icon: <FaCamera />, 
    title: "camera", 
    desc: "camera_desc", 
    price: "$199+", 
    image: assets.camera
  },
  { 
    icon: <FaBell />, 
    title: "alarms", 
    desc: "alarms_desc", 
    price: "$149+", 
    image: assets.alarms
  },
  { 
    icon: <FaKey />, 
    title: "access_control", 
    desc: "access_control_desc", 
    price: "$299+", 
    image: assets.accesscontrol
  },
  { 
    icon: <FaLaptop />, 
    title: "it", 
    desc: "it_desc", 
    price: "$199+", 
    image: assets.itservice
  },
];

const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <div className="services-container">
      <h1 className="services-title">{t("services_title2", { defaultValue: "Our Professional Services" })}</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div key={index} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="card-content">
              <div className="icon">{service.icon}</div>
              <h2 className="h2-card-content">{t(`service_${service.title}2`, { defaultValue: service.title })}</h2>
              <p className="p-card-content">{t(`service_${service.desc}2`, { defaultValue: service.desc })}</p>
              <span className="price">{service.price}</span>
              <button className="service-btn">{t("get_service2", { defaultValue: "Get Service" })}</button>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="custom-offer">
        <h2>{t("custom_offer2", { defaultValue: "Custom Offer" })}</h2>
        <p>{t("custom_offer_desc2", { defaultValue: "Need a tailored solution? Contact us for a personalized offer." })}</p>
        <button className="custom-btn">{t("request_quote2", { defaultValue: "Request a Quote" })}</button>
      </div>
    </div>
  );
};

export default ServicesSection;
