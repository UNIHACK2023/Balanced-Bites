import React from 'react';
import { Link } from 'react-router-dom';
import info from '../assets/whiteinfo.png';
import Credits from '../components/Credits';
import InfoModal from '../components/InfoModal';
import dinner from '../assets/dinner.png';

const Details = () => {
  const [showModal, setShowModal] = React.useState(false);
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className='page'>
      <InfoModal open={showModal} handleClose={handleClose}>
        <h1>Details</h1>
        <p>TODO</p>
      </InfoModal>
      <div style={{display: 'flex'}}>
        <div className="row-container left">
          <div className="row-image1"></div>
        </div>
        <div className="row-container inner">
          <div className="row-image2"></div>
        </div>
      </div>
      <div className='container'>
        <div className='top-bar'>
          <img src={info} onClick={handleOpen} className='info' />
        </div>
        <div className='main-text'>
          <img src={dinner} className='logo' />
          <h1 className='page-message'>We use these details to customise your results.<br />You may skip this if you wish.</h1>
          <p>TODO</p>
          <div className='button-group'>
            <Link to='/results'>
              <button className='transparent-button'>
                <u>skip</u>
              </button>
            </Link>
            <Link to='/results'>
              <button className='purple-button'>finish</button>
            </Link>
          </div>
          <Credits></Credits>
        </div>
      </div>
      <div style={{display: 'flex'}}>
        <div className="row-container inner">
          <div className="row-image3"></div>
        </div>
        <div className="row-container right">
          <div className="row-image4"></div>
        </div>
      </div>
    </div>
  );
};

export default Details;
