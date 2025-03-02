import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaEnvelope, FaClock, FaMapMarkerAlt, FaFacebook, FaInstagram, FaWhatsapp, FaTiktok, FaTwitter } from 'react-icons/fa';
import { assets } from '../../assets/assets';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import './Navbar.css';
import MenuToggle from '../MenuToggle/MenuToggle';

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation(); 
  const [scrolled, setScrolled] = useState(false);
  const [topNavbarVisible, setTopNavbarVisible] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]); 

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
        <div className='menu-toggle-div'> 
          <MenuToggle />
        </div>
        <div className="navbar-logo">
          <img src={scrolled ? assets.logo : assets.logo10} alt="MasterTech Logo" />
        </div>
        
        <ul className="navbar-menu">
          <li>
            <Link to="/">{t('home', { defaultValue: 'Home' })}</Link>
          </li>
          <li>
            <Link to="/services">{t('services', { defaultValue: 'Services' })}</Link>
          </li>
          <li>
            <Link to="/projects">{t('projects', { defaultValue: 'Projects' })}</Link>
          </li>
          <li>
            <Link to="/about-us-page">{t('about_us', { defaultValue: 'About Us' })}</Link>
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
