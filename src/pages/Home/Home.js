import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Home.css';
import CeoInfo from '../../components/CeoInfo/CeoInfo';
import Header from '../../components/Header/Header';
import Services from '../../components/Services/Services';
import Consultation from '../../components/Consultation/Consultation';
import Footer from '../../components/Footer/Footer';
import Contact from '../../components/Contact/Contact';
import Brands from '../../components/Brands/Brands';
import Projects from '../../components/Projects/Projects';
import AboutUs from '../../components/AboutUs/AboutUs';
import Moto from '../../components/Moto/Moto';

const Home = () => {
  return (
    <>
      <Navbar />
      <div id="home">
        <Header />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="brands">
        <Brands />
      </div>
      <div id="ceo-info">
        <CeoInfo />
      </div>
      <div id="moto">
        <Moto />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="consultation">
        <Consultation />
      </div>
      <div id="about-us">
        <AboutUs />
      </div>
      <Footer />
    </>
  );
};

export default Home;
