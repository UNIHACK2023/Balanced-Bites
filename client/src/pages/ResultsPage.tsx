import React from 'react';
import { Link } from 'react-router-dom';
import info from '../assets/whiteinfo.png';
import Credits from '../components/Credits';
import InfoModal from '../components/InfoModal';
import summary from '../assets/summary.png';
import Results from './Results';

const NewResults = () => {
  const [showModal, setShowModal] = React.useState(false);
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className='page'>
      <InfoModal open={showModal} handleClose={handleClose}>
        <h1 style={{ textAlign: 'right' }}>RESULTS</h1>
        <hr />
        <p>
          This is where you can see your custom data visualisation. Each of the 
          circles represents a different food group. Hover over the circles for 
          more information!
        </p>
        <p>
          The side panel to the right shows you a summary your nutritional intake 
          for the day based on the five food groups.
        </p>
        <p>
          The 'Tips & Tricks' section is AI powered through ChatGPT to give you 
          personalised tips to have a more balanced diet. For example, if your 
          daily intake is lacking dairy compared to the average, your tips might 
          suggest greater consumption of some foods high in calcium.
        </p>
        <p>
          <b>Note that this website does not provide medical advice. </b>
          The information and material contained on this website are for educational 
          purposes only. No material on this site is intended to be a substitute for 
          professional medical advice, diagnosis or treatment. Always seek the advice 
          of your physician or other qualified health care provider with any questions 
          you may have, and never disregard professional medical advice or delay in 
          seeking it because of something you have read on this website.
        </p>
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
          <img src={summary} className='logo' />
          <Results />
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

export default NewResults;
