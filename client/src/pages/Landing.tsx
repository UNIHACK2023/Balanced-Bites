import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <Link to='/breakfast'>
        <button>Let's get started</button>
      </Link>
    </div>
  );
};

export default Landing;
