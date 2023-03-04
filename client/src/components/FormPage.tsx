import React from 'react';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

interface customiseForm {
  title: "Breakfast" | "Lunch" | "Dinner";
  description: string;
  vegetable_image: string;
  vegetable_colour: string;
  protein_image: string;
  protein_colour: string;
  grain_image: string;
  grain_colour: string;
  dairy_image: string;
  dairy_colour: string;
  fruit_image: string;
  fruit_colour: string;
}

type MealData = {
  vegetable: number;
  fruit: number;
  grain: number;
  meat: number;
  dairy: number;
};

type FormData = {
  breakfast: MealData;
  lunch: MealData;
  dinner: MealData;
};

type DivProps = {
  colour: string;
};

const FoodSlider = styled(Slider)<DivProps>(({ colour }) => ({
  color: '#000000',
  height: 4,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 36,
    width: 36,
    backgroundColor: colour,
    border: '4px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  }
}));

const FormPage = (props: customiseForm) => {
  let d = new Date().setHours(0, 0, 0, 0);
  let key = d.toString();

  const [formData, setFormData] = React.useState(
    JSON.parse(localStorage.getItem(key) || '{"breakfast": {}, "lunch": {}, "dinner": {}}')
  );

  const [formDates, setFormDates] = React.useState(JSON.parse(localStorage.getItem('formDates') || '[]'));
  if (!formDates.includes(key)) {
    setFormDates([...formDates, key]);
  }

  const handleChange = (e: Event, value: number | number[]) => {
    const target = e.target as HTMLInputElement;
    const { name } = target;
    setFormData({ ...formData, [props.title.toLowerCase()]: { ...formData[props.title.toLowerCase()], [name]: value } });
  };

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(formData));
  }, [formData]);

  React.useEffect(() => {
    localStorage.setItem('formDates', JSON.stringify(formDates));
  }, [formDates]);

  return (
    <div>
      <Box className='food-questions'>
        <div className='slider-row'>
          <img src={props.vegetable_image} className="food-icon" />
          <FoodSlider colour={props.vegetable_colour} name="vegetable" className="food-slider" defaultValue={formData[props.title.toLowerCase()].vegetable | 0} max={5} onChange={handleChange} />
          <h1 className="food-count">{formData[props.title.toLowerCase()].vegetable | 0}</h1>
        </div>
        <div className='slider-row'>
          <img src={props.fruit_image} className="food-icon" />
          <FoodSlider colour={props.fruit_colour} name="fruit" className="food-slider" defaultValue={formData[props.title.toLowerCase()].fruit | 0} max={5} onChange={handleChange} />
          <h1 className="food-count">{formData[props.title.toLowerCase()].fruit | 0}</h1>
        </div>
        <div className='slider-row'>
          <img src={props.grain_image} className="food-icon" />
          <FoodSlider colour={props.grain_colour} name="grain" className="food-slider" defaultValue={formData[props.title.toLowerCase()].grain | 0} max={5} onChange={handleChange} />
          <h1 className="food-count">{formData[props.title.toLowerCase()].grain | 0}</h1>
        </div>
        <div className='slider-row'>
          <img src={props.protein_image} className="food-icon" />
          <FoodSlider colour={props.protein_colour} name="meat" className="food-slider" defaultValue={formData[props.title.toLowerCase()].meat | 0} max={5} onChange={handleChange} />
          <h1 className="food-count">{formData[props.title.toLowerCase()].meat | 0}</h1>
        </div>
        <div className='slider-row'>
          <img src={props.dairy_image} className="food-icon" />
          <FoodSlider colour={props.dairy_colour} name="dairy" className="food-slider" defaultValue={formData[props.title.toLowerCase()].dairy | 0} max={5} onChange={handleChange} />
          <h1 className="food-count">{formData[props.title.toLowerCase()].dairy | 0}</h1>
        </div>
      </Box>
    </div>
  );
};

export default FormPage;
