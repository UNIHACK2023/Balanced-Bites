import { useState } from 'react';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Results from './pages/Results';
import Breakfast from './pages/Breakfast';
import Lunch from './pages/Lunch';
import Dinner from './pages/Dinner';
import Details from './pages/Details';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/breakfast' element={<Breakfast />} />
        <Route path='/lunch' element={<Lunch />} />
        <Route path='/dinner' element={<Dinner />} />
        <Route path='/details' element={<Details />} />
        <Route path='/results' element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
