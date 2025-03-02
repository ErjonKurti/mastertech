import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import ChatButton from './components/ChatButton/ChatButton';
import AboutUsP from './pages/AboutUs/AboutUsP';
import ProjectsP from './pages/Projects/ProjectsP';
import ServicesPage from './pages/ServicesPage/ServicesPage';


function App() {

  return (
    <div className='app'>
      <div className='app-content'>
        <ChatButton/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/projects' element={<ProjectsP />} />
          <Route path='/about-us-page' element={<AboutUsP />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
