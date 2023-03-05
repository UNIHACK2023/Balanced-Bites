import React from 'react';
import { Link } from 'react-router-dom';
import info from '../assets/whiteinfo.png';
import Credits from '../components/Credits';
import InfoModal from '../components/InfoModal';
import about from '../assets/details.png';



const Details = (props: customiseForm) => {
  const [showModal, setShowModal] = React.useState(false);
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  let d = new Date().setHours(0, 0, 0, 0);
  let key = d.toString();

  const [formData, setFormData] = React.useState(
    JSON.parse(localStorage.getItem(key) || '{"age": {}, "gender": {}, "height": {}, "weight": {}}')
  );

  const [formDates, setFormDates] = React.useState(JSON.parse(localStorage.getItem('formDates') || '[]'));
  if (!formDates.includes(key)) {
    setFormDates([...formDates, key]);
  }

  const handleInput = (e: Event, value: string) => {
    const target = e.target as HTMLInputElement;
    const { name } = target;
    setFormData({ ...formData, [props.title.toLowerCase()]: { ...formData[props.title.toLowerCase()], [name]: value } });
  };

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(formData));
  }, [formData]);

  React.useEffect(() => {
    localStorage.setItem('formDates', JSON.stringify(formDates));
  }, [formDates]);

  return (
    <div className='page'>
      <InfoModal open={showModal} handleClose={handleClose}>
        <h1>Details</h1>
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
          <img src={about} className='logo' />
          <h1 className='page-message'>
            ✴Tell us a bit about you! We use these details to personalise your
            results✴
            <br />
            You may skip this if you wish.
          </h1>
          <input type='text' name='age' placeholder='Age' onInput={handleInput}/>
          <select name='gender' id='gender' onSelect={handleInput} >
            <option value='Skip'>Prefer not to say</option>
            <option value='Female'>Female</option>
            <option value='Male'>Male</option>
          </select>
          <input type='text' name='height' placeholder='Height in cm' onInput={handleInput}/>
          <input type='text' name='weight' placeholder='Body mass in kg' onInput={handleInput}/>
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
