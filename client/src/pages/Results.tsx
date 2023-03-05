import React, { useEffect } from 'react';
import { FacebookShareButton, FacebookIcon } from 'react-share';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsExporting from 'highcharts/modules/exporting';
HighchartsMore(Highcharts);
HighchartsExporting(Highcharts);

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
      backgroundColor: 'transparent'
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
      <Grid xs={7}>
        <Box>
          <div className='main-text'>
            <div id='container'>
              <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
            <div> Share your results</div>
            <div>
              <FacebookShareButton
                url={'https://www.example.com'}
                quote={'Dummy text!'}
                hashtag='#muo'
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
            </div>
          </div>
        </Box>
      </Grid>
      <Grid xs={4.8}>
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#D9D9D9',
            borderStyle: 'none none none double',
            padding: '10px',
          }}
        >
          <div>
            <h2 className='summary-title'>✧Your Gut Summary✧</h2>
            <p>
              dhfjsdfj sdfjsd jfsdhjf sdhfgsd hjfgsd hjf gsdhjfg hsdgfhj sdgfsdf
              sdfdhfjsdfj sdfjsd jfsdhjf sdhfgsd hjfgsd hjf gsdhjfg hsdgfhj
              sdgfsdf sdf dhfjsdfj sdfjsd jfsdhjf sdhfgsd hjfgsd hjf gsdhjfg
              hsdgfhj sdgfsdf sdf dhfjsdfj sdfjsd jfsdhjf sdhfgsd hjfgsd hjf
              gsdhjfg hsdgfhj sdgfsdf sdf
            </p>
          </div>
          <div>
            <h2 className='summary-title'>✳Tips & Tricks✳</h2>
            <p>
              Here is going to be some tips generated by AI to suggest how you
              can improve your eating habits and become healthier. It is
              personalised to your intake and body so you can have a piece of
              mind that you are eating the right amount of nutrients.
            </p>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Results;
