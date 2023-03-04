import React, { useEffect } from 'react';
import row1 from '../assets/row1.png';
import row2 from '../assets/row2.png';
import row3 from '../assets/row3.png';
import row4 from '../assets/row4.png';
import info from '../assets/whiteinfo.png';

// Import Highcharts
import Highcharts from "highcharts";
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsExporting from 'highcharts/modules/exporting';
HighchartsMore(Highcharts);
HighchartsExporting(Highcharts)

const Results = () => {
  const formData = JSON.parse(localStorage.getItem('formData') || '{"breakfast": {}, "lunch": {}, "dinner": {}}');
  const [data, setData] = React.useState<any>([
  {
    name: 'Fruit',
    data: [
      {
        name: 'Breakfast',
        value: formData.breakfast.fruit || 0
      },
      {
        name: 'Lunch',
        value: formData.lunch.fruit || 0
      },
      {
        name: 'Dinner',
        value: formData.dinner.fruit || 0
      }
    ],
    color: '#FFEA7B'
  }, 
  {
    name: 'Meat',
    data: [
      {
        name: 'Breakfast',
        value: formData.breakfast.meat || 0
      },
      {
        name: 'Lunch',
        value: formData.lunch.meat || 0
      },
      {
        name: 'Dinner',
        value: formData.dinner.meat || 0
      }
    ],
    color: '#E26B87'
  },
  {
    name: 'Dairy',
    data: [
      {
        name: 'Breakfast',
        value: formData.breakfast.dairy || 0
      },
      {
        name: 'Lunch',
        value: formData.lunch.dairy || 0
      },
      {
        name: 'Dinner',
        value: formData.dinner.dairy || 0
      }
    ],
    color: '#7098FF'
  },
  {
    name: 'Vegetable',
    data: [
      {
        name: 'Breakfast',
        value: formData.breakfast.vegetable || 0
      },
      {
        name: 'Lunch',
        value: formData.lunch.vegetable || 0
      },
      {
        name: 'Dinner',
        value: formData.dinner.vegetable || 0
      }
    ],
    color: '#BDEC98'
  },
  {
    name: 'Grain',
    data: [
      {
        name: 'Breakfast',
        value: formData.breakfast.fruit || 0
      },
      {
        name: 'Lunch',
        value: formData.lunch.fruit || 0
      },
      {
        name: 'Dinner',
        value: formData.dinner.fruit || 0
      }
    ],
    color: '#F0BA69'
  }]);

  
  const options = {
    chart: {
      type: 'packedbubble',
      height: '70%'
    },
    title: {
        text: 'Your cool chart',
        align: 'left'
    },
    tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.value}kg Food<sub>s</sub>'
    },
    plotOptions: {
        packedbubble: {
            minSize: '20%',
            maxSize: '100%',
            zMin: 0,
            zMax: 1000,
            layoutAlgorithm: {
                gravitationalConstant: 0.05,
                splitSeries: true,
                seriesInteraction: false,
                dragBetweenSeries: true,
                parentNodeLimit: true
            },
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
    }
  }

  useEffect(() => {
    
  }, [setData]);
  return (
    <div className='page'>
      <div>
        <img src={row1} className='row' />
        <img src={row2} className='row' />
      </div>
      <div className='container'>
        <div className='top-bar'>
          <img src={info} className='info' />
        </div>
        <div className='main-text'>
        <div id="container">
          <HighchartsReact highcharts={Highcharts} options={options} />
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
  )
}

export default Results