import React from 'react';
import FormPage from '../components/FormPage';
import { Link } from 'react-router-dom';

const Lunch = () => {
  return (
    <div>
      <FormPage title='Lunch' description='How do you like your lunch?' />
      <Link to='/dinner'>
        <button>Next</button>
      </Link>
    </div>
  );
};

export default Lunch;
