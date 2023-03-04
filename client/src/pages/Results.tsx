import React, { useEffect } from 'react';
import row1 from '../assets/row1.png';
import row2 from '../assets/row2.png';
import row3 from '../assets/row3.png';
import row4 from '../assets/row4.png';
import info from '../assets/whiteinfo.png';
import { FacebookShareButton, FacebookIcon } from 'react-share';

// Import Highcharts
import Highcharts from "highcharts";
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsExporting from 'highcharts/modules/exporting';
HighchartsMore(Highcharts);
HighchartsExporting(Highcharts)

const Results = () => {
  const formDates = JSON.parse(localStorage.getItem('formDates') || '[]');
  const formData = JSON.parse(localStorage.getItem(formDates[formDates.length - 1]) || '{"breakfast": {}, "lunch": {}, "dinner": {}}');
  console.log(formData);

  const [data, setData] = React.useState<any>([
  {
    name: 'Fruit',
    data: [
      {
        name: 'Breakfast',
        value: formData.breakfast.fruit
      },
      {
        name: 'Lunch',
        value: formData.lunch.fruit
      },
      {
        name: 'Dinner',
        value: formData.dinner.fruit
      }
    ],
    color: '#FFEA7B'
  }, 
  {
    name: 'Meat',
    data: [
      {
        name: 'Breakfast',
        value: formData.breakfast.meat
      },
      {
        name: 'Lunch',
        value: formData.lunch.meat
      },
      {
        name: 'Dinner',
        value: formData.dinner.meat
      }
    ],
    color: '#E26B87'
  },
  {
    name: 'Dairy',
    data: [
      {
        name: 'Breakfast',
        value: formData.breakfast.dairy
      },
      {
        name: 'Lunch',
        value: formData.lunch.dairy
      },
      {
        name: 'Dinner',
        value: formData.dinner.dairy
      }
    ],
    color: '#7098FF'
  },
  {
    name: 'Vegetable',
    data: [
      {
        name: 'Breakfast',
        value: formData.breakfast.vegetable
      },
      {
        name: 'Lunch',
        value: formData.lunch.vegetable
      },
      {
        name: 'Dinner',
        value: formData.dinner.vegetable
      }
    ],
    color: '#BDEC98'
  },
  {
    name: 'Grain',
    data: [
      {
        name: 'Breakfast',
        value: formData.breakfast.fruit
      },
      {
        name: 'Lunch',
        value: formData.lunch.fruit
      },
      {
        name: 'Dinner',
        value: formData.dinner.fruit
      }
    ],
    color: '#F0BA69'
  }]);

  
  const options = {
    chart: {
      type: 'packedbubble',
      height: '70%',
      backgroundColor: 'transparent'
    },
    title: {
        text: 'Your cool chart',
        align: 'left'
    },
    tooltip: {
        useHTML: true,
        pointFormat: 'There are {point.value} come from <b>{point.name}</b>'
    },
    plotOptions: {
        packedbubble: {
            minSize: '100%',
            maxSize: '500%',
            zMin: 0,
            zMax: 1000,
            
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                filter: {
                    property: 'y',
                    operator: '>',
                    value: 250
                },
                style: {
                    color: 'black',
                    textOutline: 'none',
                    fontWeight: 'normal'
                }
            }
        }
    },
    series: data,
    exporting: {
      chartOptions: {
          plotOptions: {
              series: {
                  dataLabels: {
                      enabled: true
                  }
              }
          }
      }
    },
    navigation: {
      buttonOptions: {
          enabled: true
      }
    },
    credits: {
      enabled: false
    },
  }

  useEffect(() => {
    
  }, [setData]);
  return (
    <div className='page'>
      <div className="row-container left">
        <div className="row-image1"></div>
      </div>
      <div className="row-container inner">
        <div className="row-image2"></div>
      </div>
      <div className='container'>
        <div className='top-bar'>
          <img src={info} className='info' />
        </div>
        <div className='main-text'>
        <div id="container">
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
        <div>
        <FacebookShareButton
          url={'https://www.example.com'}
          quote={'Dummy text!'}
          hashtag="#muo"
          image={'../assets/test.jpg'}
        >
          <FacebookIcon size={32} round />
          </FacebookShareButton>
      </div>
          <footer>
            © 2023 <br /> Carey Luke Larissa Jasmin Wanning <br /> Github repo
            link | UNIHACK 2023
          </footer>
        </div>
      </div>
      <div className="row-container inner">
        <div className="row-image3"></div>
      </div>
      <div className="row-container right">
        <div className="row-image4"></div>
      </div>
    </div>
  )
}

export default Results