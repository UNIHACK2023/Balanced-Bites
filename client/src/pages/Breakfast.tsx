import React from 'react';
import { Link } from 'react-router-dom';
import info from '../assets/whiteinfo.png';
import FormPage from '../components/FormPage';
import Credits from '../components/Credits';
import broccolli from '../assets/broccolli.png';
import egg from '../assets/sunnyside_egg.png';
import toast from '../assets/toast.png';
import milk from '../assets/milk.png';
import apple from '../assets/red_apple.png';
import breakfast from '../assets/breakfast.png';
import InfoModal from '../components/InfoModal';

const Breakfast = () => {
  const [showModal, setShowModal] = React.useState(false);
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className='page'>
      <InfoModal open={showModal} handleClose={handleClose}>
        <h1>Breakfast</h1>
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
          <img src={breakfast} className='logo' />
          <h1 className='page-message'>
            The most important meal to eat everyday.
            <br />
            Make sure to eat breakfast everyday.
          </h1>
          <FormPage
            title='Breakfast'
            description='How do you like your breakfast?'
            vegetable_image={broccolli}
            grain_image={toast}
            dairy_image={milk}
            fruit_image={apple}
            protein_image={egg}
            vegetable_colour='#FFC700'
            protein_colour='#A17FBC'
            grain_colour='#3BB3BD'
            dairy_colour='#7FBC8C'
            fruit_colour='#BC7F7F'
          />
          <div className='button-group'>
            <Link to='/lunch'>
              <button className='transparent-button'>
                <u>skip</u>
              </button>
            </Link>
            <Link to='/lunch'>
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

export default Breakfast;
