import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Feedback from './pages/Feedback';

const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App