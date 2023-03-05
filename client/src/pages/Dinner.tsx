import React from 'react';
import { Link } from 'react-router-dom';
import info from '../assets/whiteinfo.png';
import FormPage from '../components/FormPage';
import Credits from '../components/Credits';
import dinner from '../assets/dinner.png';
import carrot from '../assets/carrot.png';
import pear from '../assets/pear.png';
import streak from '../assets/meat_on_bone.png';
import cheese from '../assets/cheese.png';
import rice from '../assets/rice.png';
import InfoModal from '../components/InfoModal';

const Dinner = () => {
  const [showModal, setShowModal] = React.useState(false);
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className='page'>
      <InfoModal open={showModal} handleClose={handleClose}>
        <h1 style={{ textAlign: 'right' }}>DINNER</h1>
        <hr />
        <p>TODO</p>
      </InfoModal>
      <div style={{ display: 'flex' }}>
        <div className='row-container left'>
          <div className='row-image1'></div>
        </div>
        <div className='row-container inner'>
          <div className='row-image2'></div>
        </div>
      </div>
      <div className='container'>
        <div className='top-bar'>
          <img src={info} onClick={handleOpen} className='info' />
        </div>
        <div className='main-text'>
          <img src={dinner} className='logo' />
          <h1 className='page-message'>
            The most important meal to eat everyday.
            <br />
            Make sure to eat breakfast everyday.
          </h1>
          <FormPage
            title='Dinner'
            description='How do you like your dinner?'
            vegetable_image={carrot}
            protein_image={streak}
            grain_image={rice}
            dairy_image={cheese}
            fruit_image={pear}
            vegetable_colour='#FFC700'
            protein_colour='#A17FBC'
            grain_colour='#3BB3BD'
            dairy_colour='#7FBC8C'
            fruit_colour='#BC7F7F'
          />
          <div className='button-group'>
            <Link to='/results'>
              <button className='transparent-button'>
                <u>skip</u>
              </button>
            </Link>
            <Link to='/details'>
              <button className='purple-button'>continue &#8594;</button>
            </Link>
          </div>
          <Credits></Credits>
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div className='row-container inner'>
          <div className='row-image3'></div>
        </div>
        <div className='row-container right'>
          <div className='row-image4'></div>
        </div>
      </div>
    </div>
  );
};

export default Dinner;
