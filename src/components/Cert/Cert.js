import React from 'react';
import './Cert.css';
import { assets } from '../../assets/assets';
import { useTranslation } from 'react-i18next';
const Cert = () => {
  const { t } = useTranslation();
  return (
    <section className="awards-section">
      <div className="awards-container">
        <div className="certificates">
          <h3 className="certificates-title">{t("certifications_title2", { defaultValue: "Our Certifications" })}</h3>
          <div className="certificates-grid">
            <img src={assets.cert1} alt="Certificate 1" />
            <img src={assets.cert1} alt="Certificate 2" />
            <img src={assets.cert1} alt="Certificate 3" />
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Cert;
