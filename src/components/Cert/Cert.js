import React from 'react';
import './Cert.css';
import { assets } from '../../assets/assets';

const Cert = () => {

  return (
    <section className="awards-section">
      <div className="awards-container">
        <div className="certificates">
          <h3 className="certificates-title">Our Certifications</h3>
          <div className="certificates-grid">
            <img src={assets.cert1} alt="Certificate 1" />
            <img src={assets.cert1} alt="Certificate 2" />
            <img src={assets.cert1} alt="Certificate 3" />
            <img src={assets.cert1} alt="Certificate 4" />
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Cert;
