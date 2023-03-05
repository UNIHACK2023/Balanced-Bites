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
        <h1 style={{ textAlign: 'right' }}>BREAKFAST</h1>
        <hr />
        <p>
          Kick start your day and boost your metabolism with a healthy breakfast. 
          Not only do you start off your day well, consistently eating breakfast 
          has been linked to lower rates of obesity and chronic disease. 
          [<a href="https://www.ahajournals.org/doi/pdf/10.1161/cir.0000000000000476">1</a>]
          [<a href="https://www.acc.org/latest-in-cardiology/articles/2017/09/28/11/54/skipping-breakfast-associated-with-atherosclerosis">2</a>]
          [<a href="https://pubmed.ncbi.nlm.nih.gov/31918985/">3</a>]
        </p>
        <p>
          When making your breakfast, make sure it contains a mixture of healthy 
          carbs to fuel your body, and protein to keep you full.
        </p>
        <p>
          Don't know what to eat? Give these healthy and easy recipes a try!
        </p>

        <ul>
          <li>
            <a href="https://www.bbcgoodfood.com/recipes/overnight-oats">
            Overnight oats with your choice of topping
            </a>
          </li>
          <li>
            <a href="https://www.verywellfit.com/avocado-and-egg-toast-4144603">
              Avocado and egg toast
            </a>
          </li>
          <li>
            <a href="https://www.eatforhealth.gov.au/eating-well/healthy-recipes/carrot-and-parsnip-muffins">
              Carrot and parsnip muffins
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
