import React, { useEffect } from 'react';
import { FacebookShareButton } from 'react-share';
import divider from '../assets/divider.png';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsExporting from 'highcharts/modules/exporting';
HighchartsMore(Highcharts);
HighchartsExporting(Highcharts);
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AiFeedback from '../components/AiFeedback';

const Results = () => {
  const formDates = JSON.parse(localStorage.getItem('formDates') || '[]');
  const formData = JSON.parse(
    localStorage.getItem(formDates[formDates.length - 1]) ||
      '{"breakfast": {}, "lunch": {}, "dinner": {}}'
  );

  formData.breakfast.fruit = formData.breakfast.fruit || 0;
  formData.lunch.fruit = formData.lunch.fruit || 0;
  formData.dinner.fruit = formData.dinner.fruit || 0;

  formData.breakfast.vegetable = formData.breakfast.vegetable || 0;
  formData.lunch.vegetable = formData.lunch.vegetable || 0;
  formData.dinner.vegetable = formData.dinner.vegetable || 0;

  formData.breakfast.grain = formData.breakfast.grain || 0;
  formData.lunch.grain = formData.lunch.grain || 0;
  formData.dinner.grain = formData.dinner.grain || 0;

  formData.breakfast.meat = formData.breakfast.meat || 0;
  formData.lunch.meat = formData.lunch.meat || 0;
  formData.dinner.meat = formData.dinner.meat || 0;

  formData.breakfast.dairy = formData.breakfast.dairy || 0;
  formData.lunch.dairy = formData.lunch.dairy || 0;
  formData.dinner.dairy = formData.dinner.dairy || 0;

  const [data, setData] = React.useState<any>([
    {
      name: 'Fruits',
      data: [...Array(formData.breakfast.fruit)]
        .map((item: any) => {
          return { name: 'Breakfast', value: 1 };
        })
        .concat(
          [...Array(formData.lunch.fruit)].map((item: any) => {
            return { name: 'Lunch', value: 1 };
          })
        )
        .concat(
          [...Array(formData.dinner.fruit)].map((item: any) => {
            return { name: 'Dinner', value: 1 };
          })
        ),
      color: '#746BEB',
    },
    {
      name: 'Vegetables',
      data: [...Array(formData.breakfast.vegetable)]
        .map((item: any) => {
          return { name: 'Breakfast', value: 1 };
        })
        .concat(
          [...Array(formData.lunch.vegetable)].map((item: any) => {
            return { name: 'Lunch', value: 1 };
          })
        )
        .concat(
          [...Array(formData.dinner.vegetable)].map((item: any) => {
            return { name: 'Dinner', value: 1 };
          })
        ),
      color: '#FFC700',
    },
    {
      name: 'Grains',
      data: [...Array(formData.breakfast.grain)]
        .map((item: any) => {
          return { name: 'Breakfast', value: 1 };
        })
        .concat(
          [...Array(formData.lunch.grain)].map((item: any) => {
            return { name: 'Lunch', value: 1 };
          })
        )
        .concat(
          [...Array(formData.dinner.grain)].map((item: any) => {
            return { name: 'Dinner', value: 1 };
          })
        ),
      color: '#3BB3BD',
    },
    {
      name: 'Protein',
      data: [...Array(formData.breakfast.meat)]
        .map((item: any) => {
          return { name: 'Breakfast', value: 1 };
        })
        .concat(
          [...Array(formData.lunch.meat)].map((item: any) => {
            return { name: 'Lunch', value: 1 };
          })
        )
        .concat(
          [...Array(formData.dinner.meat)].map((item: any) => {
            return { name: 'Dinner', value: 1 };
          })
        ),
      color: '#A17FBC',
    },
    {
      name: 'Dairy',
      data: [...Array(formData.breakfast.dairy)]
        .map((item: any) => {
          return { name: 'Breakfast', value: 1 };
        })
        .concat(
          [...Array(formData.lunch.dairy)].map((item: any) => {
            return { name: 'Lunch', value: 1 };
          })
        )
        .concat(
          [...Array(formData.dinner.dairy)].map((item: any) => {
            return { name: 'Dinner', value: 1 };
          })
        ),
      color: '#7FBC8C',
    },
  ]);

  const options = {
    chart: {
      type: 'packedbubble',
      height: '80%',
      backgroundColor: 'transparent',
    },
    title: {
      text: '',
      align: 'left',
    },
    // tooltip: {
    //   useHTML: true,
    //   pointFormat: 'There are {point.value} come from <b>{point.name}</b>',
    // },
    plotOptions: {
      packedbubble: {
        minSize: '50%',
        maxSize: '900%',
        zMin: 0,
        zMax: 1000,

        dataLabels: {
          enabled: true,
          format: '{point.name}',
          filter: {
            property: 'y',
            operator: '>',
            value: 250,
          },
          style: {
            color: 'black',
            textOutline: 'none',
            fontWeight: 'normal',
          },
        },
      },
    },
    series: data,
    exporting: {
      chartOptions: {
        plotOptions: {
          series: {
            dataLabels: {
              enabled: true,
            },
          },
        },
      },
    },
    navigation: {
      buttonOptions: {
        enabled: true,
      },
    },
    credits: {
      enabled: false,
    },
  };

  useEffect(() => {}, [setData]);
  return (
    <Grid container sx={{ height: '100%' }}>
      <Grid xs={6}>
        <Box>
          <div className='main-text'>
            <div id='container'>
              <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
            <div className='share-box'>
              <FacebookShareButton
                url={'https://unihack-23.vercel.app/'}
                quote={'I plege to eat healthy!'}
                hashtag='#balancedbites'
              >
                <button className='purple-button'>share your results!</button>
              </FacebookShareButton>
            </div>
          </div>
        </Box>
      </Grid>
      <Grid xs={1}>
        <img src={divider} className='divider' />
      </Grid>
      <Grid xs={4.8}>
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#D9D9D9',
            padding: '0.8vw',
            border: '5px dashed #000000',
          }}
        >
          <div>
            <h2 className='summary-title'>✧Your Gut Summary✧</h2>
            <Tabs>
              <TabList>
                <Tab>Veggies</Tab>
                <Tab>Fruit</Tab>
                <Tab>Grains</Tab>
                <Tab>Protein</Tab>
                <Tab>Dairy</Tab>
              </TabList>

              <TabPanel>
                <p>Here is a summary of your veggie intake for today:</p>
                <p>
                  🌽 <strong>Breakfast:</strong> {formData.breakfast.vegetable}{' '}
                  servings
                </p>
                <p>
                  🥕 <strong>Lunch:</strong> {formData.lunch.vegetable} servings
                </p>
                <p>
                  🍅 <strong>Dinner:</strong> {formData.dinner.vegetable}{' '}
                  servings
                </p>
              </TabPanel>
              <TabPanel>
                <p>Here is a summary of your fruit intake for today:</p>
                <p>
                  🍓 <strong>Breakfast:</strong> {formData.breakfast.fruit}{' '}
                  servings
                </p>
                <p>
                  🍒 <strong>Lunch:</strong> {formData.lunch.fruit} servings
                </p>
                <p>
                  🥭 <strong>Dinner:</strong> {formData.dinner.fruit} servings
                </p>
              </TabPanel>
              <TabPanel>
                <p>Here is a summary of your grain intake for today:</p>
                <p>
                  🥐 <strong>Breakfast:</strong> {formData.breakfast.grain}{' '}
                  servings
                </p>
                <p>
                  🍞 <strong>Lunch:</strong> {formData.lunch.grain} servings
                </p>
                <p>
                  🍚 <strong>Dinner:</strong> {formData.dinner.grain} servings
                </p>
              </TabPanel>
              <TabPanel>
                <p>Here is a summary of your protein intake for today:</p>
                <p>
                  🍳 <strong>Breakfast:</strong> {formData.breakfast.meat}{' '}
                  servings
                </p>
                <p>
                  🥩 <strong>Lunch:</strong> {formData.lunch.meat} servings
                </p>
                <p>
                  🍗 <strong>Dinner:</strong> {formData.dinner.meat} servings
                </p>
              </TabPanel>
              <TabPanel>
                <p>Here is a summary of your dairy intake for today:</p>
                <p>
                  🥣 <strong>Breakfast:</strong> {formData.breakfast.dairy}{' '}
                  servings
                </p>
                <p>
                  🧀 <strong>Lunch:</strong> {formData.lunch.dairy} servings
                </p>
                <p>
                  🥛 <strong>Dinner:</strong> {formData.dinner.dairy} servings
                </p>
              </TabPanel>
            </Tabs>
          </div>
          <div>
            <h2 className='summary-title'>✳Tips & Tricks✳</h2>
            <AiFeedback />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Results;
