import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import CeoInfo from '../../components/CeoInfo/CeoInfo'
import Header from '../../components/Header/Header'
import Services from '../../components/Services/Services'
import Consultation from '../../components/Consultation/Consultation'
import Footer from '../../components/Footer/Footer'
import Contact from '../../components/Contact/Contact'
import Brands from '../../components/Brands/Brands'
import Projects from '../../components/Projects/Projects'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Services/>
        <Brands />
        <CeoInfo />
        <Projects />
        <Consultation />
        <Contact />
        <Footer/>
    </div>
  )
}

export default Home