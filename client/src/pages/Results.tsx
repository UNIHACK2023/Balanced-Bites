import React, { useEffect } from 'react';
import Grid from '@mui/material/Unstable_Grid2';

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
        text: '',
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
            zMax: 1000
        }
    },
    series: data,
    credits: {
      enabled: false
    },
  }

  return (
    <div className='page'>
      <Grid container spacing={2}>
        <Grid xs={8}>
          <p>Test</p>
        </Grid>
        <Grid xs={4}>
          <p>Test</p>
        </Grid>
        <Grid xs={4}>
          <p>Test</p>
        </Grid>
        <Grid xs={8}>
          <p>Test</p>
        </Grid>
      </Grid>
    </div>
  )
}

export default Results