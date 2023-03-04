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
HighchartsMore(Highcharts);


const Results = () => {
  const [data, setData] = React.useState<any>([{
    data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    color: '#FFEA7B'
  }, {
    data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    color: '#E26B87'
  }, {
    data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    color: '#7098FF'
  }, {
    data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    color: '#BDEC98'
  }, {
    data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    color: '#F0BA69'
  }]);

  const formData = JSON.parse(localStorage.getItem('formData') || '{"breakfast": {}, "lunch": {}, "dinner": {}}');
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
        {/* <div>
          <h1>Results</h1>
          <h2>Breakfast</h2>
          <p>Vegetable: {formData.breakfast.vegetable || 0}</p>
          <p>Fruit: {formData.breakfast.fruit || 0}</p>
          <p>Grain: {formData.breakfast.grain || 0}</p>
          <p>Meat: {formData.breakfast.meat || 0}</p>
          <p>Dairy: {formData.breakfast.dairy || 0}</p>
          <h2>Lunch</h2>
          <p>Vegetable: {formData.lunch.vegetable || 0}</p>
          <p>Fruit: {formData.lunch.fruit || 0}</p>
          <p>Grain: {formData.lunch.grain || 0}</p>
          <p>Meat: {formData.lunch.meat || 0}</p>
          <p>Dairy: {formData.lunch.dairy || 0}</p>
          <h2>Dinner</h2>
          <p>Vegetable: {formData.dinner.vegetable || 0}</p>
          <p>Fruit: {formData.dinner.fruit || 0}</p>
          <p>Grain: {formData.dinner.grain || 0}</p>
          <p>Meat: {formData.dinner.meat || 0}</p>
          <p>Dairy: {formData.dinner.dairy || 0}</p>
        </div> */}
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