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
        <p>
          Round out your day with a hearty and nutritious dinner.
        </p>
        <p>
          Make sure your dinner includes a good mix of vegetables, proteins and carbs
          to refuel your energy after your busy day.
        </p>
        <p>
          Sick of length dinner prep? Give these quick, delicious dinner recipes a try!
        </p>

        <ul>
          <li>
            <a href="https://www.woolworths.com.au/shop/recipes/quick-roast-pork-with-potato-and-slaw-salad" target='_blank'>
            Quick roast pork with potato and slaw salad
            </a>
          </li>
          <li>
            <a href="https://www.woolworths.com.au/shop/recipes/quick-beef-korma-with-naan-and-salad" target='_blank'>
              Beef korma with naan and salad
            </a>
          </li>
          <li>
            <a href="https://www.woolworths.com.au/shop/recipes/easy-spaghetti-marinara" target='_blank'>
              Easy spaghetti marinara
            </a>
          </li>
        </ul>
        <p>
          Information on food groups and serving sizes has been taken from&nbsp;
           <a href="https://www.eatforhealth.gov.au/food-essentials/five-food-groups" target='_blank'>eatforhealth.gov.au</a>. 
          Serving sizes can be determined by checking product packaging.
        </p>
        <p>
          <a href="https://www.eatforhealth.gov.au/food-essentials/five-food-groups/vegetables-and-legumes-beans" target='_blank'>
            Vegetables and legumes
          </a>
          &nbsp; | &nbsp;
          <a href="https://www.eatforhealth.gov.au/food-essentials/five-food-groups/fruit" target='_blank'>
            Fruit
          </a> 
          &nbsp; | &nbsp;
          <a href="https://www.eatforhealth.gov.au/food-essentials/five-food-groups/grain-cereal-foods-mostly-wholegrain-and-or-high-cereal-fibre" target='_blank'>
            Grains
          </a> 
          &nbsp; | &nbsp;
          <a href="https://www.eatforhealth.gov.au/food-essentials/five-food-groups/lean-meat-and-poultry-fish-eggs-tofu-nuts-and-seeds-and" target='_blank'>
            Lean meat, poultry alternatives
          </a> 
          &nbsp; | &nbsp;
          <a href="https://www.eatforhealth.gov.au/food-essentials/five-food-groups/milk-yoghurt-cheese-andor-their-alternatives-mostly-reduced-fat" target='_blank'>
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
          <img src={info} onClick={handleOpen} className='info' />
        </div>
        <div className='main-text'>
          <img src={dinner} className='logo' />
          <h1 className='page-message'>
            Round out your day with dinner.
            <br />
            Make sure to eat dinner everyday.
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
