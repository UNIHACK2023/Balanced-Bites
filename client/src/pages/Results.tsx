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
import axios from 'axios';
import { truncate } from 'fs/promises';

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
          return { name: 'Breakfast', value: Math.random() * 5 + 1 };
        })
        .concat(
          [...Array(formData.lunch.fruit)].map((item: any) => {
            return { name: 'Lunch', value: Math.random() * 5 + 1 };
          })
        )
        .concat(
          [...Array(formData.dinner.fruit)].map((item: any) => {
            return { name: 'Dinner', value: Math.random() * 5 + 1 };
          })
        ),
      color: '#746BEB',
    },
    {
      name: 'Vegetables',
      data: [...Array(formData.breakfast.vegetable)]
        .map((item: any) => {
          return { name: 'Breakfast', value: Math.random() * 5 + 1 };
        })
        .concat(
          [...Array(formData.lunch.vegetable)].map((item: any) => {
            return { name: 'Lunch', value: Math.random() * 5 + 1 };
          })
        )
        .concat(
          [...Array(formData.dinner.vegetable)].map((item: any) => {
            return { name: 'Dinner', value: Math.random() * 5 + 1 };
          })
        ),
      color: '#FFC700',
    },
    {
      name: 'Grains',
      data: [...Array(formData.breakfast.grain)]
        .map((item: any) => {
          return { name: 'Breakfast', value: Math.random() * 5 + 1 };
        })
        .concat(
          [...Array(formData.lunch.grain)].map((item: any) => {
            return { name: 'Lunch', value: Math.random() * 5 + 1 };
          })
        )
        .concat(
          [...Array(formData.dinner.grain)].map((item: any) => {
            return { name: 'Dinner', value: Math.random() * 5 + 1 };
          })
        ),
      color: '#3BB3BD',
    },
    {
      name: 'Protein',
      data: [...Array(formData.breakfast.meat)]
        .map((item: any) => {
          return { name: 'Breakfast', value: Math.random() * 5 + 1 };
        })
        .concat(
          [...Array(formData.lunch.meat)].map((item: any) => {
            return { name: 'Lunch', value: Math.random() * 5 + 1 };
          })
        )
        .concat(
          [...Array(formData.dinner.meat)].map((item: any) => {
            return { name: 'Dinner', value: Math.random() * 5 + 1 };
          })
        ),
      color: '#A17FBC',
    },
    {
      name: 'Dairy',
      data: [...Array(formData.breakfast.dairy)]
        .map((item: any) => {
          return { name: 'Breakfast', value: Math.random() * 5 + 1 };
        })
        .concat(
          [...Array(formData.lunch.dairy)].map((item: any) => {
            return { name: 'Lunch', value: Math.random() * 5 + 1 };
          })
        )
        .concat(
          [...Array(formData.dinner.dairy)].map((item: any) => {
            return { name: 'Dinner', value: Math.random() * 5 + 1 };
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
    tooltip: {
      useHTML: true,
      pointFormat: 'This came from <b>{point.name}</b>',
    },
    plotOptions: {
      packedbubble: {
        minSize: '5%',
        maxSize: '120%',
        zMin: 0,
        zMax: 20,
      },
    },
    series: data,
    navigation: {
      buttonOptions: {
        enabled: false,
      },
    },
    credits: {
      enabled: false,
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = data.map((series: any) => ({
        ...series,
        data: series.data.map((point: any) => ({
          ...point,
          value: Math.random() * 5 + 1,
        })),
      }));
      setData(newData);
    }, Math.floor(Math.random() * 8000 + 4000));
    return () => clearInterval(interval);
  }, [setData]);

  const generateImage = () => {
    const req = async () => {
      // create copy of options and add "useSimulation": false plus set all values equal to 1
      const optionsCopy = JSON.parse(JSON.stringify(options));
      optionsCopy.plotOptions.packedbubble.useSimulation = false;
      optionsCopy.title.text = 'Balanced Bites Chart';
      optionsCopy.chart.backgroundColor = '#FFFFFF';
      optionsCopy.series.forEach((series: any) => {
        series.data.forEach((point: any) => {
          point.value = 1;
        });
      });

      const { data } = await axios.post('https://export.highcharts.com/', {
        b64: true,
        constr: 'Chart',
        infile: JSON.stringify(optionsCopy),
        type: 'image/png',
        width: '2000'
      });
      const base64url = 'data:image/png;base64,' + data;
      const blob = await (await fetch(base64url)).blob();
      const file = new File([blob], 'chart.png', { type: 'image/png' });

      const data2 = {
        files: [file],
        title: 'Balanced Bites Chart',
        text: 'Check out my Balanced Bites Chart!',
      };

      try {
        if (!navigator.canShare(data2)) {
          window.alert("Your device doesn't support sharing files.");
        }
        await navigator.share(data2);
      } catch (err) {
        window.alert("Your device doesn't support sharing files.");
      }
    };
    req();
  };

  return (
    <Grid container sx={{ height: '100%' }}>
      <Grid xs={12} lg={6}>
        <Box>
          <div className='main-text'>
            <div id='container'>
              <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
            <div className='share-box' onClick={generateImage}>
              <button className='purple-button'>share your results!</button>
            </div>
          </div>
        </Box>
      </Grid>
      <Grid xs={12} lg={6}>
        <div
          style={{
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
                <p>
                  🟰 <strong>Total:</strong> {formData.dinner.vegetable + formData.lunch.vegetable + formData.breakfast.vegetable}{' '}
                  servings <i>(Human Average Vegetable Intake is 5.3 Servings per day)</i>
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
                <p>
                  🟰 <strong>Total:</strong> {formData.dinner.fruit + formData.lunch.fruit + formData.breakfast.fruit}{' '}
                  servings <i>(Human Average Fruit Intake is 2 Servings per day)</i>
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
                <p>
                  🟰 <strong>Total:</strong> {formData.dinner.grain + formData.lunch.grain + formData.breakfast.grain}{' '}
                  servings <i>(Human Average Grain Intake is 4.9 Servings per day)</i>
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
                <p>
                  🟰 <strong>Total:</strong> {formData.dinner.meat + formData.lunch.meat + formData.breakfast.meat}{' '}
                  servings <i>(Human Average Meat Intake is 2.4 Servings per day)</i>
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
                <p>
                  🟰 <strong>Total:</strong> {formData.dinner.dairy + formData.lunch.dairy + formData.breakfast.dairy}{' '}
                  servings <i>(Human Average Dairy Intake is 3.2 Servings per day)</i>
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
