import React from "react";
import "./Consultation.css";
import { useTranslation } from "react-i18next";

const Consultation = () => {
  const { t } = useTranslation();

  return (
    <div className="consultation-container">
      <div className="moving-text">
        <span className="text">{t("consultationText", { defaultValue: "WE ARE HERE TO ANSWER YOUR QUESTIONS 24/7" })} </span> 
        <span>|</span>
        <span className="highlight">{t("needConsultation", { defaultValue: "Need A Consultation?" })} </span> 
        <span>|</span>
        <span className="phone">{t("contactNumber", { defaultValue: "+355 68 555 5840" })}</span> 
      </div>
    </div>
  );
};

export default Consultation;
