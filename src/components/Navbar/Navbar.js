import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaUser, FaEnvelope, FaSignOutAlt, FaSearch, FaMapMarkerAlt, FaFacebook, FaInstagram, FaWhatsapp, FaTiktok, FaTwitter, FaClock } from 'react-icons/fa';
import { assets } from '../../assets/assets';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [topNavbarVisible, setTopNavbarVisible] = useState(true);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
      setTopNavbarVisible(false);
    } else {
      setScrolled(false);
      setTopNavbarVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0
    });
  };

  return (
    <>
      {topNavbarVisible && (
        <nav className="top-navbar">
          <div className="top-navbar-left">
            <FaEnvelope /><span>Email: info@mastertech.al </span><p>|</p>
            <FaClock /><span>9:00 AM - 5:00 PM </span><p>|</p>
            <FaMapMarkerAlt /><span>Location: Rr. Elbasanit , Tirana, Albania</span><p></p>
          </div>
          <div className="top-navbar-right">
            <a href="https://www.facebook.com/MasterTech.al/"><FaFacebook /></a>
            <a href="https://www.instagram.com/mastertech.al/"><FaInstagram /></a>
            <a href="https://api.whatsapp.com/send?phone=355685555840&text&context=ARCvND3O5_r5ZGzbRCO_4gks1tpOGVWGf3jYqsLw-3K-fMaVENyxM8Jijz10sXIF7BkP2z5J51kQGU1K3PrfHJUQ3WOW15oMtJFg-43nCXYjh5raPHegIBQ6JaS86UDEtfzjZjI26eCV0ADAZ39mYCVQYw&source&app=facebook"><FaWhatsapp /></a>
            <a href="https://www.tiktok.com/@mastertech.al"><FaTiktok /></a>
            <a href="https://twitter.com"><FaTwitter /></a>
          </div>
        </nav>
      )}

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-logo">
          <img src={assets.logo} alt="Mastertech Logo" />
        </div>
        <ul className="navbar-menu">
          <li><Link to="/" onClick={handleScrollToTop}>Home</Link></li>
          <li><Link to="/services" onClick={handleScrollToTop}>Services</Link></li>
          <li><Link to="/projects" onClick={handleScrollToTop}>Projects</Link></li>
          <li><Link to="/store" onClick={handleScrollToTop}>Store</Link></li>
          <li><Link to="/contact-us" onClick={handleScrollToTop}>Contact Us</Link></li>
        </ul>
        <div className={`language-switcher ${scrolled ? 'scrolled' : ''}`}>
          <LanguageSwitcher />
        </div>
        <div className="profile-photo">
          <img src={assets.profile} alt="Profile" className="profile-photo-img" />
        </div>
      </nav>

    </>
  );
};

export default Navbar;
