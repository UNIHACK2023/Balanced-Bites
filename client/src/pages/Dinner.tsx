import { Link } from 'react-router-dom';
import row1 from '../assets/row1.png';
import row2 from '../assets/row2.png';
import row3 from '../assets/row3.png';
import row4 from '../assets/row4.png';
import info from '../assets/whiteinfo.png';
import FormPage from '../components/FormPage';
import dinner from '../assets/dinner.png';

import carrot from '../assets/carrot.png';
import pear from '../assets/pear.png';
import streak from '../assets/meat_on_bone.png';
import cheese from '../assets/cheese.png';
import rice from '../assets/rice.png';

const Dinner = () => {
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
          <img src={dinner} className='logo' />
          <FormPage
            title='Dinner'
            description='How do you like your dinner?'
            vegetable_image={carrot}
            protein_image={streak}
            grain_image={rice}
            dairy_image={cheese}
            fruit_image={pear}
          />
          <div className='button-group'>
            <Link to='/results'>
              <button className='transparent-button'>
                <u>didn't eat</u>
              </button>
            </Link>
            <Link to='/results'>
              <button className='purple-button'>finish</button>
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

export default Dinner;
