import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import info from '../assets/whiteinfo.png';
import logo from '../assets/balancedbites.png';
import Credits from '../components/Credits';
import InfoModal from '../components/InfoModal';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
HighchartsMore(Highcharts);

const Landing = () => {
  const [data, setData] = React.useState<any>([
    {
      data: [
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      ],
      color: '#746BEB',
    },
    {
      data: [5, 5, 5, 5, 5, 5, 5, 5],
      color: '#A17FBC',
    },
    {
      data: [
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      ],
      color: '#3BB3BD',
    },
    {
      data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
      color: '#7FBC8C',
    },
    {
      data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
      color: '#FFC700',
    },
  ]);

  const options = {
    chart: {
      type: 'packedbubble',
      backgroundColor: 'transparent',
    },
    plotOptions: {
      packedbubble: {
        minSize: '5%',
        maxSize: '120%',
        enableMouseTracking: false,
        zMin: 0,
        zMax: 20,
      },
    },
    title: {
      text: '',
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    series: data,
    navigation: {
      buttonOptions: {
        enabled: false,
      },
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = data.map((series: any) => ({
        ...series,
        data: series.data.map((value: any) => 5 * (Math.random() * 2)),
      }));
      setData(newData);
    }, Math.floor(Math.random() * 1001 + 1500));
    return () => clearInterval(interval);
  }, [setData]);

  const [showModal, setShowModal] = React.useState(false);
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className='page'>
      <InfoModal open={showModal} handleClose={handleClose}>
        <h1 style={{ textAlign: 'right' }}>BALANCED BITES</h1>
        <hr />
        <p>
          When you’re browsing supermarket aisles, or at a restaurant, 
          or microwaving whatever’s left in your fridge, how often are you 
          thinking about maintaining a balanced diet? 
        </p>
        <p>
          Balanced Bites make it easy to visualise what you eat with an intuitive, 
          easy to use website. Our gamified experience takes less than one minute 
          to generate a customised visual representing our user's daily diet.
        </p>
        <p>
          We provide our users with customised AI powered tips, targeting areas 
          of nutritional deficiency based on their daily dietary intakes.
        </p>
        <p>
          Track your diet and see how you compare with friends. Try out Balanced Bites.
        </p>
        <p>
          To use Balanced Bites, simply click the 'get started' button and use 
          the sliders to indicate how many servings of each food group you ate in that meal.
        </p>
        <p>
          Balanced Bites was made in 48 hours by a team of 6 computer science 
          students from the University of New South Wales for UNIHACK 2023 (March 3-5).
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
          <img src={logo} className='logo' />
          <h3>
            ✦
            <u>
              Learn about your gut biome diversity through fun and bubbly
              visualisations!
            </u>
            ✦
            <br />A healthy diet protects you against many chronic
            noncommunicable diseases, such as heart disease, diabetes and
            cancer.
          </h3>
          <div id='highcharts-container'>
            <HighchartsReact highcharts={Highcharts} options={options} />
          </div>
          <Link to='/breakfast'>
            <button className='purple-button'>let's get started &#8594;</button>
          </Link>
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

export default Landing;
