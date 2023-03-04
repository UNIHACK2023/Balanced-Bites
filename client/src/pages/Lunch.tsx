import { Link } from 'react-router-dom';
import row1 from '../assets/row1.png';
import row2 from '../assets/row2.png';
import row3 from '../assets/row3.png';
import row4 from '../assets/row4.png';
import info from '../assets/whiteinfo.png';
import FormPage from '../components/FormPage';
import lunch from '../assets/lunch.png';

import salad from '../assets/green_salad.png';
import tangerine from '../assets/tangerine.png';
import burger from '../assets/burger.png';
import cheese from '../assets/cheese.png';
import poultry from '../assets/poultry_leg.png';

const Lunch = () => {
  return (
    <div className='page'>
      <div className="row-container left">
        <div className="row-image1"></div>
      </div>
      <div className="row-container inner">
        <div className="row-image2"></div>
      </div>
      <div className='container'>
        <div className='top-bar'>
          <img src={info} className='info' />
        </div>
        <div className='main-text'>
          <img src={lunch} className='logo' />
          <FormPage
            title='Lunch'
            description='How do you like your lunch?'
            vegetable_image={salad}
            protein_image={poultry}
            grain_image={burger}
            dairy_image={cheese}
            fruit_image={tangerine}
          />
          <div className='button-group'>
            <Link to='/dinner'>
              <button className='transparent-button'>
                <u>didn't eat</u>
              </button>
            </Link>
            <Link to='/dinner'>
              <button className='purple-button'>continue</button>
            </Link>
          </div>
          <footer>
            © 2023 <br /> Carey Luke Larissa Jasmin Wanning <br /> Github repo
            link | UNIHACK 2023
          </footer>
        </div>
      </div>
      <div className="row-container inner">
        <div className="row-image3"></div>
      </div>
      <div className="row-container right">
        <div className="row-image4"></div>
      </div>
    </div>
  );
};

export default Lunch;
