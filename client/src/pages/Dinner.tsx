import React from 'react';
import FormPage from '../components/FormPage';
import { Link } from 'react-router-dom';

const Dinner = () => {
  return (
    <div>
      <FormPage title='Dinner' description='How do you like your dinner?' />
      <Link to='/results'>
        <button className='purple-button'>see results</button>
        <button className='purple-button'>add extra meal</button>
      </Link>
    </div>
  );
};

export default Dinner;
