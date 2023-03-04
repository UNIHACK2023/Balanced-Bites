import React from 'react';
import { Link } from 'react-router-dom';
import row1 from '../assets/row1.png';
import row2 from '../assets/row2.png';
import row3 from '../assets/row3.png';
import row4 from '../assets/row4.png';
import info from '../assets/whiteinfo.png';
import FormPage from '../components/FormPage';
import broccolli from '../assets/broccolli.png';
import egg from '../assets/sunnyside_egg.png';
import toast from '../assets/toast.png';
import milk from '../assets/milk.png';
import apple from '../assets/red_apple.png';
import breakfast from '../assets/breakfast.png';

const Breakfast = () => {
  return (
    <div className='page'>
      <div>
        <img src={row1} className='row' />
        <img src={row2} className='row' />
      </div>
      <div className='container'>
        <div className='top-bar'>
          <img src={info} className='info' />
        </div>
        <div className='main-text'>
          <img src={breakfast} className='logo' />
          <FormPage
            title='Breakfast'
            description='How do you like your breakfast?'
            vegetable_image={broccolli}
            protein_image={egg}
            grain_image={toast}
            dairy_image={milk}
            fruit_image={apple}
          />
          <div className='button-group'>
            <Link to='/lunch'>
              <button className='transparent-button'>
                <u>didn't eat</u>
              </button>
            </Link>
            <Link to='/lunch'>
              <button className='purple-button'>continue</button>
            </Link>
          </div>
          <footer>
            © 2023 <br /> Carey Luke Larissa Jasmin Wanning <br /> Github repo
            link | UNIHACK 2023
          </footer>
        </div>
      </div>
      <div>
        <img src={row3} className='row' />
        <img src={row4} className='row' />
      </div>
    </div>
  );
};

export default Breakfast;
