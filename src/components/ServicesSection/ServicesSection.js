import React from "react";
import "./ServicesSection.css";
import { motion } from "framer-motion";
import { FaWrench, FaCamera, FaBell, FaKey, FaLaptop, FaHome } from "react-icons/fa";
import { assets } from "../../assets/assets";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const ServicesSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleServiceClick = (serviceId) => {
    navigate(`/projects#${serviceId}-projects`);
  };

  const services = [
    {
      id: "electrical",
      icon: <FaWrench />,
      image: assets.electrial,
      title: t("service_electrical", { defaultValue: "Electrical" }),
      description: t("expert_electrical_desc", { defaultValue: "Expert electrical installations & maintenance for residential and commercial spaces." })
    },
    {
      id: "smart-home",
      icon: <FaHome />,
      image: assets.smarthome,
      title: t("service_smart_home", { defaultValue: "Smart Home Integration" }),
      description: t("smart_home_desc", { defaultValue: "Seamless integration of smart home devices for automation and control." })
    },
    {
      id: "camera",
      icon: <FaCamera />,
      image: assets.camera,
      title: t("service_camera", { defaultValue: "Camera" }),
      description: t("camera_desc", { defaultValue: "Professional CCTV and security camera setup with remote access integration." })
    },
    {
      id: "alarms",
      icon: <FaBell />,
      image: assets.alarms,
      title: t("service_alarms", { defaultValue: "Alarms" }),
      description: t("alarms_desc", { defaultValue: "Advanced home and office alarm systems with real-time monitoring." })
    },
    {
      id: "access-control",
      icon: <FaKey />,
      image: assets.accesscontrol,
      title: t("service_access_control", { defaultValue: "Access Control" }),
      description: t("access_control_desc", { defaultValue: "Secure access solutions including biometrics and RFID-based systems." })
    },
    {
      id: "it",
      icon: <FaLaptop />,
      image: assets.itservice,
      title: t("service_it", { defaultValue: "IT" }),
      description: t("it_desc", { defaultValue: "Complete IT solutions including networking, support, and cybersecurity." })
    }
  ];

  return (
    <div className="services-container">
      <h1 className="services-title">{t("services_title", { defaultValue: "Our Professional Services" })}</h1>
      <div className="services-grid">
        {services.map((service) => (
          <motion.div 
            key={service.id} 
            className="service-card"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img src={service.image} alt={service.id} className="service-image" />
            <div className="card-content">
              <div className="icon">{service.icon}</div>
              <h2 className="h2-card-content">{service.title}</h2>
              <p className="p-card-content">{service.description}</p>
              <button 
                className="service-btn"
                onClick={() => handleServiceClick(service.id)}
              >
                {t("get_service", { defaultValue: "Get Service" })}
              </button>
            </div>
          </motion.div>
        ))}
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