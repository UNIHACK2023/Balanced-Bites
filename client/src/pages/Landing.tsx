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
      <img src={row1} />
      <img src={row2} />
      <div className='container'>
        <div className='top-bar'>
          <img src={info} className='info' />
        </div>
        <div className='main-text'>
          <img src={logo} className='logo' />
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{' '}
          </h3>
          <Link to='/breakfast'>
            <button className='purple-button'>Let's get started</button>
          </Link>
        </div>
      </div>
      <img src={row3} />
      <img src={row4} />
    </div>
  );
};

export default Landing;
