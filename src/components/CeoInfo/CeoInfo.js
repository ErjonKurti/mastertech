import React from "react";
import "./CeoInfo.css";
import { assets } from "../../assets/assets";
import { useTranslation } from "react-i18next";

const CeoInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="ceo-container">
      {/* Profile Photo Container */}
      <div className="pfp-container">
        <img src={assets.profile} className="pfp-img" alt={t("ceoProfileAlt", { defaultValue: "CEO Profile" })} />
      </div>

      {/* CEO Signature Section */}
      <div className="ceo-signature-container">
        <p className="highlight-text">{t("feelValuedAndRewarded", { defaultValue: "FEEL VALUED & REWARDED" })}</p>
        <h2 className="title">{t("companyName", { defaultValue: "Master Tech" })}</h2>
        <p className="description">
          {t("ceoDescription", {
            defaultValue:
              "At MasterTech, we are dedicated to providing high-quality solutions in Electrical Systems, Surveillance Cameras, Security Alarms, Access Control, Audio Solutions, and IT Services. With a strong focus on innovation, reliability, and precision, we ensure that every project meets the highest standards of efficiency and security."
          })}
        </p>
        <div className="signature-section">
          <div className="ceo-info">
            <p className="ceo-name">{t("ceoName", { defaultValue: "Nikolli Albert" })}</p>
            <p className="ceo-title">{t("ceoTitle", { defaultValue: "CEO & Founder" })}</p>
          </div>
          <img src="/signature.png" alt={t("ceoSignatureAlt", { defaultValue: "CEO Signature" })} className="signature" />
        </div>
      </div>
    </div>
  );
};

export default CeoInfo;
