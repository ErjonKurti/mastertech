import React from "react";
import "./ServicesPage.css";
import Navbar from "../../components/Navbar/Navbar";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import Footer from "../../components/Footer/Footer";
import ServicesHeader from "../../components/ServicesHeader/ServicesHeader";

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <ServicesHeader />
      <ServicesSection />
      <Footer />
    </>
  );
};

export default ServicesPage;