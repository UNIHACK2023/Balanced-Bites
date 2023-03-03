import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>Home</div>} />
        <Route path='/breakfast' element={<div>Breakfast</div>} />
        <Route path='/lunch' element={<div>Lunch</div>} />
        <Route path='/dinner' element={<div>Dinner</div>} />
        <Route path='/results' element={<div>Results</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
