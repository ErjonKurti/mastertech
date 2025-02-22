import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaUser, FaEnvelope, FaSignOutAlt, FaSearch, FaMapMarkerAlt, FaFacebook, FaInstagram, FaWhatsapp, FaTiktok, FaTwitter, FaClock } from 'react-icons/fa';
import { assets } from '../../assets/assets';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const Navbar = () => {
  const { t } = useTranslation();  // Using i18n translation hook
  const [scrolled, setScrolled] = useState(false);
  const [topNavbarVisible, setTopNavbarVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('');

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

  const handleScrollToTop = (section) => {
    setActiveSection(section);
    window.scrollTo({
      top: document.getElementById(section).offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {topNavbarVisible && (
        <nav className="top-navbar">
          <div className="top-navbar-left">
            <FaEnvelope /><span>{t('email', { defaultValue: 'Email: info@mastertech.al' })}</span><p>|</p>
            <FaClock /><span>{t('working_hours', { defaultValue: '9:00 AM - 5:00 PM' })}</span><p>|</p>
            <FaMapMarkerAlt /><span>{t('location', { defaultValue: 'Location: Rr. Elbasanit, Tirana, Albania' })}</span>
          </div>
          <div className="top-navbar-right">
            <a href="https://www.facebook.com/MasterTech.al/"><FaFacebook /></a>
            <a href="https://www.instagram.com/mastertech.al/"><FaInstagram /></a>
            <a href="https://api.whatsapp.com/send?phone=355685555840"><FaWhatsapp /></a>
            <a href="https://www.tiktok.com/@mastertech.al"><FaTiktok /></a>
            <a href="https://twitter.com"><FaTwitter /></a>
          </div>
        </nav>
      )}

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-logo">
          <img src={assets.logo} alt="MasterTech Logo" />
        </div>
        <ul className="navbar-menu">
          <li>
            <Link
              to="#home"
              onClick={() => handleScrollToTop('home')}
              className={activeSection === 'home' ? 'active' : ''}
            >
              {t('home', { defaultValue: 'Home' })}
            </Link>
          </li>
          <li>
            <Link
              to="#services"
              onClick={() => handleScrollToTop('services')}
              className={activeSection === 'services' ? 'active' : ''}
            >
              {t('services', { defaultValue: 'Services' })}
            </Link>
          </li>
          <li>
            <Link
              to="#projects"
              onClick={() => handleScrollToTop('projects')}
              className={activeSection === 'projects' ? 'active' : ''}
            >
              {t('projects', { defaultValue: 'Projects' })}
            </Link>
          </li>
          <li>
            <Link
              to="#about-us"
              onClick={() => handleScrollToTop('about-us')}
              className={activeSection === 'about-us' ? 'active' : ''}
            >
              {t('about_us', { defaultValue: 'About Us' })}
            </Link>
          </li>
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
