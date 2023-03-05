import React from 'react';
import { Link } from 'react-router-dom';
import info from '../assets/whiteinfo.png';
import FormPage from '../components/FormPage';
import lunch from '../assets/lunch.png';
import Credits from '../components/Credits';
import salad from '../assets/green_salad.png';
import tangerine from '../assets/tangerine.png';
import burger from '../assets/burger.png';
import cheese from '../assets/cheese.png';
import poultry from '../assets/poultry_leg.png';
import InfoModal from '../components/InfoModal';

const Lunch = () => {
  const [showModal, setShowModal] = React.useState(false);
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className='page'>
      <InfoModal open={showModal} handleClose={handleClose}>
        <h1 style={{ textAlign: 'right' }}>LUNCH</h1>
        <hr />
        <p>
          Avoid the midday slump by eating a nutritious lunch to keep your metabolism active
          and give you energy to power through the day.
        </p>
        <p>
          When packing or buying your lunch, make sure it contains a mix of 
          healthy carbs to feed your brain, protein to keep you full and plenty 
          of fruits and veggies to hit your daily nutrition intake goals.
        </p>
        <p>
          Don't know what to eat? Give these prepare ahead recipes a try!
        </p>

        <ul>
          <li>
            <a href="https://www.eatforhealth.gov.au/eating-well/healthy-recipes/chickpea-and-couscous-salad">
            Chickpea and couscous salad
            </a>
          </li>
          <li>
            <a href="https://www.eatforhealth.gov.au/eating-well/healthy-recipes/vegie-lasagne">
              Vegie lasagne
            </a>
          </li>
          <li>
            <a href="https://www.eatforhealth.gov.au/eating-well/healthy-recipes/chicken-and-vegie-pie">
              Chicken and vegie pie
            </a>
          </li>
        </ul>
        <p>
          Information on food groups and serving sizes has been taken from 
          <a href="https://www.eatforhealth.gov.au/food-essentials/five-food-groups"> eatforhealth.gov.au</a>. 
          Serving sizes can be determined by checking product packaging.
        </p>
        <p>
          <a href="https://www.eatforhealth.gov.au/food-essentials/five-food-groups/vegetables-and-legumes-beans">
            Vegetables and legumes
          </a>
          &nbsp; | &nbsp;
          <a href="https://www.eatforhealth.gov.au/food-essentials/five-food-groups/fruit">
            Fruit
          </a> 
          &nbsp; | &nbsp;
          <a href="https://www.eatforhealth.gov.au/food-essentials/five-food-groups/grain-cereal-foods-mostly-wholegrain-and-or-high-cereal-fibre">
            Grains
          </a> 
          &nbsp; | &nbsp;
          <a href="https://www.eatforhealth.gov.au/food-essentials/five-food-groups/lean-meat-and-poultry-fish-eggs-tofu-nuts-and-seeds-and">
            Lean meat, poultry alternatives
          </a> 
          &nbsp; | &nbsp;
          <a href="https://www.eatforhealth.gov.au/food-essentials/five-food-groups/milk-yoghurt-cheese-andor-their-alternatives-mostly-reduced-fat">
            Milk, yogurt and alternatives
          </a> 
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
          <img src={info} onClick={handleOpen} className='info'/>
        </div>
        <div className='main-text'>
          <img src={lunch} className='logo'/>
          <h1 className='page-message'>
            Avoid the midday slump.
            <br />
            Make sure to eat lunch everyday.
          </h1>
          <FormPage
            title='Lunch'
            description='How do you like your lunch?'
            vegetable_image={salad}
            protein_image={poultry}
            grain_image={burger}
            dairy_image={cheese}
            fruit_image={tangerine}
            vegetable_colour='#FFC700'
            protein_colour='#A17FBC'
            grain_colour='#3BB3BD'
            dairy_colour='#7FBC8C'
            fruit_colour='#BC7F7F'
          />
          <div className='button-group'>
            <Link to='/dinner'>
              <button className='transparent-button'>
                <u>skip</u>
              </button>
            </Link>
            <Link to='/dinner'>
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

export default Lunch;
