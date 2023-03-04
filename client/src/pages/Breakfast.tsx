import React from 'react';
import FormPage from '../components/FormPage';
import { Link } from 'react-router-dom';

const Breakfast = () => {
  return (
    <div>
      <FormPage
        title='Breakfast'
        description='How do you like your breakfast?'
      />
      <Link to='/lunch'>
        <button className='purple-button'>continue</button>
      </Link>
    </div>
  );
};

export default Breakfast;
