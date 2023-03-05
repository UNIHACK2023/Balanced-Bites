import React from 'react';
import { Link } from 'react-router-dom';
import info from '../assets/whiteinfo.png';
import Credits from '../components/Credits';
import InfoModal from '../components/InfoModal';
import about from '../assets/details.png';

const Details = () => {
  const [showModal, setShowModal] = React.useState(false);
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const [detailsData, setDetailsData] = React.useState(
    JSON.parse(
      localStorage.getItem('personalDetails') ||
        '{"age": -1, "gender": "U", "height": -1, "weight": -1}'
    )
  );

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setDetailsData({ ...detailsData, [name]: value });
  };

  const handleGender = (e: React.FormEvent<HTMLSelectElement>) => {
    const { name, value } = e.currentTarget;
    console.log('test');
    setDetailsData({ ...detailsData, [name]: value });
  };

  React.useEffect(() => {
    localStorage.setItem('personalDetails', JSON.stringify(detailsData));
  }, [detailsData]);

  return (
    <div className='page'>
      <InfoModal open={showModal} handleClose={handleClose}>
        <h1 style={{ textAlign: 'right' }}>ABOUT YOU</h1>
        <hr />
        <p>
          Why do we ask for this information?
        </p>
        <p>
          This information is used for the sole purpose of comparing your dietary 
          intake with the average for your age, sex, height and weight to give 
          you more personalised results and more relevant tips.
        </p>
        <p>
          We do not store your information in any way, and you may choose to 
          skip this page and continue on to see your personalised data visualisation.
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
          <img src={about} className='logo' />
          <h1 className='page-message'>
            ✴Tell us a bit about you! We use these details to personalise your
            results✴
            <br />
            You may skip this if you wish.
          </h1>
          <input
            type='number'
            name='age'
            placeholder='Age'
            onInput={handleInput}
            value={detailsData.age != -1 ? detailsData.age : ''}
          />
          <select name='gender' onChange={handleGender}>
            <option value='U'>Prefer not to say</option>
            <option value='F' selected={detailsData.gender == 'F'}>
              Female
            </option>
            <option value='M' selected={detailsData.gender == 'M'}>
              Male
            </option>
          </select>
          <input
            type='number'
            name='height'
            placeholder='Height in cm'
            onInput={handleInput}
            value={detailsData.height != -1 ? detailsData.height : ''}
          />
          <input
            type='number'
            name='weight'
            placeholder='Body mass in kg'
            onInput={handleInput}
            value={detailsData.weight != -1 ? detailsData.weight : ''}
          />
          <div className='button-group'>
            <Link to='/results'>
              <button className='transparent-button'>
                <u>skip</u>
              </button>
            </Link>
            <Link to='/finalresults'>
              <button className='purple-button'>finish &#8594;</button>
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

export default Details;
