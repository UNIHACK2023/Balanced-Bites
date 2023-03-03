import React from 'react';
import FormPage from '../components/FormPage';
import { Link } from 'react-router-dom';

const Dinner = () => {
  return (
    <div>
      <FormPage title='Dinner' description='How do you like your dinner?' />
      <Link to='/results'>
        <button>Next</button>
      </Link>
    </div>
  );
};

export default Dinner;
