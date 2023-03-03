import { useState } from 'react';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Breakfast from './pages/Breakfast';
import Results from './pages/Results';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/breakfast' element={<Breakfast />} />
        <Route path='/lunch' element={<div>Lunch</div>} />
        <Route path='/dinner' element={<div>Dinner</div>} />
        <Route path='/results' element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
