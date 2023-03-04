import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import info from '../assets/whiteinfo.png';
import logo from '../assets/thicklogo.png';
import Credits from '../components/Credits';
import InfoModal from '../components/InfoModal';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
HighchartsMore(Highcharts);

const Landing = () => {
  const [data, setData] = React.useState<any>([{
    data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    color: '#FFEA7B'
  }, {
    data: [5, 5, 5, 5, 5, 5, 5, 5],
    color: '#E26B87'
  }, {
    data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    color: '#7098FF'
  }, {
    data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    color: '#BDEC98'
  }, {
    data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    color: '#F0BA69'
  }]);

  const options = {
    chart: {
      type: 'packedbubble',
      backgroundColor: 'transparent'
    },
    plotOptions: {
      packedbubble: {
        minSize: '5%',
        maxSize: '100%',
        enableMouseTracking: false,
        zMin: 0,
        zMax: 20
      }
    },
    title:{
      text:''
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    series: data,
    navigation: {
      buttonOptions: {
          enabled: false
      }
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = data.map((series: any) => ({
        ...series,
        data: series.data.map((value: any) => 5 * (Math.random() * 2))
      }));
      setData(newData);
    }, Math.floor(Math.random() * (1001) + 1500));
    return () => clearInterval(interval);
  }, [setData]);

  const [showModal, setShowModal] = React.useState(false);
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className='page'>
      <InfoModal open={showModal} handleClose={handleClose}>
        <h1>Credits</h1>
        <h2>Team members</h2>
        <p>NAME | ROLE | GITHUB/LINKEDIN</p>
        <h2>Tech Stack</h2>
        <p>SECTION | TECHNOLOGY</p>
        <h2>Data sources</h2>
        <p>SOURCE | LINK</p>
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
          <img src={logo} className='logo' />
          <h3>
            Learn about your gut biome diversity through fun and funky
            visualisations! A healthy diet is essential for good health and
            nutrition. It protects you against many chronic noncommunicable
            diseases, such as heart disease, diabetes and cancer.{' '}
          </h3>
          <div id="highcharts-container">
            <HighchartsReact highcharts={Highcharts} options={options} />
          </div>
          <Link to='/breakfast'>
            <button className='purple-button'>Let's get started</button>
          </Link>
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

export default Landing;
