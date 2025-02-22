import React from "react";
import { useTranslation } from 'react-i18next';
import "./Moto.css";
import { assets } from "../../assets/assets";

const Moto = () => {
  const { t } = useTranslation();

  return (
    <div className="moto-section" style={{ backgroundImage: `url(${assets.moto})` }}>
      <div className="moto-overlay">
        <h2 className="moto-text">
          {t("motoText", { defaultValue: "Innovating with Technology, Empowering Businesses, and Shaping a Smarter Future." })}
        </h2>
        <p className="company-name">{t("companyName", { defaultValue: "- MasterTech" })}</p>
      </div>
    </div>
  );
};

export default Moto;
