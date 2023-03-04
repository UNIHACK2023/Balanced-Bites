import React from 'react';
import { Link } from 'react-router-dom';
import row1 from '../assets/row1.png';
import row2 from '../assets/row2.png';
import row3 from '../assets/row3.png';
import row4 from '../assets/row4.png';
import info from '../assets/whiteinfo.png';
import FormPage from '../components/FormPage';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import broccolli from '../assets/broccolli.png';
import egg from '../assets/sunnyside_egg.png';
import toast from '../assets/toast.png';
import milk from '../assets/milk.png';
import apple from '../assets/red_apple.png';
import breakfast from '../assets/breakfast.png';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '45vw',
  bgcolor: '#D9D9D9',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Breakfast = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='page'>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <img src={info} className='info' />
          <h1>
            This is a demo of a web app that helps you track your food intake
          </h1>
          <img src={info} className='info' />
          <p>
            This is a demo of a web app that helps you track your food intake
            and make sure you are eating a balanced diet. This is a demo of a web
            app that helps you track your food intake and make sure you are
            eating a balanced diet. This is a demo of a web app that helps you
            </p>
            <button className='purple-button' onClick={handleClose}>close</button>
        </Box>
      </Modal>
      <div>
        <img src={row1} className='row' />
        <img src={row2} className='row' />
      </div>
      <div className='container'>
        <div className='top-bar'>
          <img src={info} onClick={handleOpen} className='info' />
        </div>
        <div className='main-text'>
          <img src={breakfast} className='logo' />
          <FormPage
            title='Breakfast'
            description='How do you like your breakfast?'
            vegetable_image={broccolli}
            protein_image={egg}
            grain_image={toast}
            dairy_image={milk}
            fruit_image={apple}
          />
          <div className='button-group'>
            <Link to='/lunch'>
              <button className='transparent-button'>
                <u>didn't eat</u>
              </button>
            </Link>
            <Link to='/lunch'>
              <button className='purple-button'>continue</button>
            </Link>
          </div>
          <footer>
            © 2023 <br /> Carey Luke Larissa Jasmin Wanning <br /> Github repo
            link | UNIHACK 2023
          </footer>
        </div>
      </div>
      <div>
        <img src={row3} className='row' />
        <img src={row4} className='row' />
      </div>
    </div>
  );
};

export default Breakfast;
