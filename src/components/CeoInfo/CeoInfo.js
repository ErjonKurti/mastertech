import React from "react";
import "./CeoInfo.css";

const CeoInfo = () => {
  return (
    <>
      <div className="ceo-signature-container">
      <p className="highlight-text">FEEL VALUED & REWARDED</p>
      <h2 className="title">Master Tech </h2>
      <p className="description">
      At MasterTech, we are dedicated to providing high-quality solutions in Electrical Systems, 
      Surveillance Cameras, Security Alarms, Access Control, Audio Solutions, and IT Services. 
      With a strong focus on innovation, reliability, and precision, we ensure that every project 
      meets the highest standards of efficiency and security.
      </p>
      <div className="signature-section">
        <div className="ceo-info">
          <p className="ceo-name">Nikolli Albert</p>
          <p className="ceo-title">CEO & Founder</p>
        </div>
        <img src="/signature.png" alt="CEO Signature" className="signature" />
      </div>
    </div>
    </>
  );
};

export default CeoInfo;
