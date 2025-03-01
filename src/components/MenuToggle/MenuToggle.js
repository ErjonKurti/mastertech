import { useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter } from "lucide-react";
import "./MenuToggle.css";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function MenuToggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="menu-button"
      >
        ☰
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="menu-dropdown"
        >
          <ul className="menu-list">
            <Link to='/' className="menu-item">Home</Link>
            <Link to='/services' className="menu-item">Services</Link>
            <Link to='/projects' className="menu-item">Projects</Link>
            <Link to='/about-us-page' className="menu-item">About Us</Link>
          </ul>
          <div className="social-icons2">
            <Facebook className="social-icon2" />
            <Instagram className="social-icon2" />
            <Twitter className="social-icon2" />
            <FaWhatsapp className="social-icon2" />
          </div>
        </motion.div>
      )}
    </div>
  );
}
