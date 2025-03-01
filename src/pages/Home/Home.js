import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Home.css';
import CeoInfo from '../../components/CeoInfo/CeoInfo';
import Header from '../../components/Header/Header';
import Services from '../../components/Services/Services';
import Consultation from '../../components/Consultation/Consultation';
import Footer from '../../components/Footer/Footer';
import Brands from '../../components/Brands/Brands';
import Moto from '../../components/Moto/Moto';
import Awards from '../../components/Awards/Awards';
import Cert from '../../components/Cert/Cert';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div id='services'><Services /></div>
      <Brands />
      <CeoInfo />
      <Moto />
      <Awards />
      <Consultation />
      <Cert />
      <Footer />
    </>
  );
};

export default Home;
