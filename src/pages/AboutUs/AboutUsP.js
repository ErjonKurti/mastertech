import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import AboutUs from '../../components/AboutUs/AboutUs'
import './AboutUsP.css'
import AboutUsHeader from '../../components/AboutUsHeader/AboutUsHeader'

const AboutUsP = () => {
  return (
    <>
        <AboutUsHeader />
        <Navbar />
        <AboutUs />
        <Footer /> 
    </>
  )
}

export default AboutUsP