import React from 'react';
import FormPage from '../components/FormPage';
import { Link } from 'react-router-dom';
import row1 from '../assets/row1.png';
import row2 from '../assets/row2.png';
import row3 from '../assets/row3.png';
import row4 from '../assets/row4.png';

const Breakfast = () => {
  return (
    <div className='page'>
      <img src={row1} className='row' />
      <img src={row2} className='row' />
      <div className='container'>
        {' '}
        <FormPage
          title='Breakfast'
          description='How do you like your breakfast?'
        />
        <Link to='/lunch'>
          <button className='purple-button'>continue</button>
        </Link>
      </div>
      <img src={row3} className='row' />
      <img src={row4} className='row' />
    </div>
  );
};

export default Breakfast;
