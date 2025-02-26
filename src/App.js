import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import ChatButton from './components/ChatButton/ChatButton';


function App() {

  return (
    <div className='app'>
      <div className='app-content'>
        <ChatButton/>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
