import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Feedback from './pages/Feedback';
import About from './pages/About';
import Contact from './pages/Contact';
import Teaching from './pages/Teaching';

const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/teaching" element={<Teaching/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App