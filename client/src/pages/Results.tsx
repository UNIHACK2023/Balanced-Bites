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
  console.log(formData);

  const [data, setData] = React.useState<any>([
    {
      name: 'Fruit',
      data: [
        {
          name: 'Breakfast',
          value: formData.breakfast.fruit,
        },
        {
          name: 'Lunch',
          value: formData.lunch.fruit,
        },
        {
          name: 'Dinner',
          value: formData.dinner.fruit,
        },
        {
          name: 'Breakfast',
          value: formData.breakfast.fruit,
        },
        {
          name: 'Lunch',
          value: formData.lunch.fruit,
        },
        {
          name: 'Dinner',
          value: formData.dinner.fruit,
        },
      ],
      color: '#746BEB',
    },
    {
      name: 'Fruit Percentages',
      data: [
        formData.breakfast.fruit / 1000,
        formData.breakfast.fruit / 1000,
        formData.breakfast.fruit / 2000,
        formData.breakfast.fruit / 4000,
        formData.lunch.fruit / 5000,
        formData.lunch.fruit / 1000,
      ],
      color: '#746BEB',
    },
    {
      name: 'Meat',
      data: [
        {
          name: 'Breakfast',
          value: formData.breakfast.meat,
        },
        {
          name: 'Lunch',
          value: formData.lunch.meat,
        },
        {
          name: 'Dinner',
          value: formData.dinner.meat,
        },
        {
          name: 'Breakfast',
          value: formData.breakfast.meat,
        },
        {
          name: 'Lunch',
          value: formData.lunch.meat,
        },
        {
          name: 'Dinner',
          value: formData.dinner.meat,
        },
      ],
      color: '#A17FBC',
    },
    {
      name: 'Meat Percentages',
      data: [
        formData.breakfast.meat / 1000,
        formData.breakfast.meat / 1000,
        formData.breakfast.meat / 2000,
        formData.breakfast.meat / 4000,
        formData.lunch.meat / 5000,
        formData.lunch.meat / 1000,
      ],
      color: '#A17FBC',
    },
    {
      name: 'Dairy',
      data: [
        {
          name: 'Breakfast',
          value: formData.breakfast.dairy,
        },
        {
          name: 'Lunch',
          value: formData.lunch.dairy,
        },
        {
          name: 'Dinner',
          value: formData.dinner.dairy,
        },
        {
          name: 'Breakfast',
          value: formData.breakfast.dairy,
        },
        {
          name: 'Lunch',
          value: formData.lunch.dairy,
        },
        {
          name: 'Dinner',
          value: formData.dinner.dairy,
        },
      ],
      color: '#7FBC8C',
    },
    {
      name: 'Dairy Percentages',
      data: [
        formData.breakfast.dairy / 1000,
        formData.breakfast.dairy / 1000,
        formData.breakfast.dairy / 2000,
        formData.breakfast.dairy / 4000,
        formData.lunch.dairy / 5000,
        formData.lunch.dairy / 10,
      ],
      color: '#7FBC8C',
    },
    {
      name: 'Vegetable',
      data: [
        {
          name: 'Breakfast',
          value: formData.breakfast.vegetable,
        },
        {
          name: 'Lunch',
          value: formData.lunch.vegetable,
        },
        {
          name: 'Dinner',
          value: formData.dinner.vegetable,
        },
        {
          name: 'Breakfast',
          value: formData.breakfast.vegetable,
        },
        {
          name: 'Lunch',
          value: formData.lunch.vegetable,
        },
        {
          name: 'Dinner',
          value: formData.dinner.vegetable,
        },
      ],
      color: '#FFC700',
    },
    {
      name: 'Grain',
      data: [
        {
          name: 'Breakfast',
          value: formData.breakfast.grain,
        },
        {
          name: 'Lunch',
          value: formData.lunch.grain,
        },
        {
          name: 'Dinner',
          value: formData.dinner.grain,
        },
        {
          name: 'Breakfast',
          value: formData.breakfast.grain,
        },
        {
          name: 'Lunch',
          value: formData.lunch.grain,
        },
        {
          name: 'Dinner',
          value: formData.dinner.grain,
        },
      ],
      color: '#3BB3BD',
    },
    {
      name: 'Vegetable Percentages',
      data: [
        formData.breakfast.vegetable / 100,
        formData.breakfast.vegetable / 1000,
        formData.breakfast.vegetable / 2000,
        formData.breakfast.vegetable / 4000,
        formData.lunch.vegetable / 5000,
        formData.lunch.vegetable / 10,
      ],
      color: '#FFC700',
    },
    {
      name: 'Grain Percentages',
      data: [
        formData.breakfast.fruit / 100,
        formData.breakfast.fruit / 1000,
        formData.breakfast.fruit / 2000,
        formData.breakfast.fruit / 4000,
        formData.lunch.fruit / 5000,
        formData.lunch.fruit / 10,
      ],
      color: '#3BB3BD',
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
