import React from 'react';
import { Link } from 'react-router-dom';
import row1 from '../assets/row1.png';
import row2 from '../assets/row2.png';
import row3 from '../assets/row3.png';
import row4 from '../assets/row4.png';
import info from '../assets/whiteinfo.png';
import logo from '../assets/thicklogo.png';

const Landing = () => {
  return (
    <div className='page'>
      <div><img src={row1} className='row' />
      <img src={row2} className='row' /></div>
      <div className='container'>
        <div className='top-bar'>
          <img src={info} className='info' />
        </div>
        <div className='main-text'>
          <img src={logo} className='logo' />
          <h3>
            Learn about your gut biome diversity through fun and funky
            visualisations! A healthy diet is essential for good health and
            nutrition. It protects you against many chronic noncommunicable
            diseases, such as heart disease, diabetes and cancer.{' '}
          </h3>
          <Link to='/breakfast'>
            <button className='purple-button'>Let's get started</button>
          </Link>
          <footer>
            © 2023 <br /> Carey Luke Larissa Jasmin Wanning <br /> Github repo
            link | UNIHACK 2023
          </footer>
        </div>
      </div>
      <div><img src={row3} className='row' />
      <img src={row4} className='row' /></div>
    </div>
  );
};

export default Landing;
