import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';
import { assets } from './assets/assets';
import Home from './pages/Home/Home';


function App() {

  return (
    <div className='app'>
      <div className='app-content'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
