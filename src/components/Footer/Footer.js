import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter, faFacebookF, faInstagram, faPinterest, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2><span className="logo-m">MASTER</span>TECH</h2>
          <p>These Terms will be applied fully and affect your use of this Website.</p>
          <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faXTwitter} /></a>
            <a href="https://www.facebook.com/MasterTech.al/"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://www.instagram.com/mastertech.al/"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://api.whatsapp.com/send?phone=355685555840&text&context=ARCvND3O5_r5ZGzbRCO_4gks1tpOGVWGf3jYqsLw-3K-fMaVENyxM8Jijz10sXIF7BkP2z5J51kQGU1K3PrfHJUQ3WOW15oMtJFg-43nCXYjh5raPHegIBQ6JaS86UDEtfzjZjI26eCV0ADAZ39mYCVQYw&source&app=facebook"><FontAwesomeIcon icon={faWhatsapp} /></a>
          </div>
        </div>

        <div className="footer-newsletter">
          <h3>Apply for Our Services <span>Today!</span></h3>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter Your Email" />
            <a href="mailto:info@mastertech.al?subject=Application for Services&body=Hello, I would like to apply for your services.">
              <button>Apply</button>
            </a>
          </div>
        </div>

        <div className="footer-contact">
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <div>
              <h4>Call Us</h4>
              <p>Feel Free To Call Us (355) 68 555 5840</p>
            </div>
          </div>

          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <div>
              <h4>Email</h4>
              <p>Contact Us At: <br/> info@mastertech.al</p>
            </div>
          </div>

          <div className="contact-item">
            <FontAwesomeIcon icon={faHome} className="contact-icon" />
            <div>
              <h4>Address</h4>
              <p>Rr. Elbasanit, Tirana, <br/> Albania</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p> <span>MASTERTECH</span> All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
