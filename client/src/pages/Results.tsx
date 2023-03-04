import React, { useEffect } from 'react';
import row1 from '../assets/row1.png';
import row2 from '../assets/row2.png';
import row3 from '../assets/row3.png';
import row4 from '../assets/row4.png';
import info from '../assets/whiteinfo.png';
import { FacebookShareButton, FacebookIcon } from 'react-share';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
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
            minSize: '50%',
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
      <Grid container sx={{height: '100%'}}>
      <Grid xs={7}>
        <Box>
        <div className='main-text'>
        <div id="container">
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
        <div> Share your results</div>
        <div>
        <FacebookShareButton
          url={'https://www.example.com'}
          quote={'Dummy text!'}
          hashtag="#muo"
        >
          <FacebookIcon size={32} round />
          </FacebookShareButton>
      </div>
          <footer>
            © 2023 <br /> Carey Luke Larissa Jasmin Wanning <br /> Github repo
            link | UNIHACK 2023
          </footer>
        </div>
        </Box>
        </Grid>
        <Grid xs={5}>
        <div style={{width: '100%', height: '100%', backgroundColor: '#D9D9D9', borderStyle: 'none none none double'}}>
          <div>
            <p>Your Summary</p>
          </div>
          <div>
            <p>Tips & Tricks</p>
          </div>
        </div>
        </Grid>
      </Grid>
  )
}

export default Results