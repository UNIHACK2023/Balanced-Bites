import React from 'react';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

interface customiseForm {
  title: "Breakfast" | "Lunch" | "Dinner";
  description: string;
  vegetable_image?: string;
  protein_image?: string;
  grain_image?: string;
  dairy_image?: string;
  fruit_image?: string;
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
      <Box sx={{ width: '50vw' }}>
        <div className='slider-row'>
          <img src={props.vegetable_image} className="food-icon" />
          <Slider name="vegetable" className="food-slider" defaultValue={formData[props.title.toLowerCase()].vegetable | 0} max={5} onChange={handleChange} />
          <p>{formData[props.title.toLowerCase()].vegetable | 0}</p>
        </div>
        <div className='slider-row'>
          <img src={props.fruit_image} className="food-icon" />
          <Slider name="fruit" className="food-slider" defaultValue={formData[props.title.toLowerCase()].fruit | 0} max={5} onChange={handleChange} />
          <p>{formData[props.title.toLowerCase()].fruit | 0}</p>
        </div>
        <div className='slider-row'>
          <img src={props.grain_image} className="food-icon" />
          <Slider name="grain" className="food-slider" defaultValue={formData[props.title.toLowerCase()].grain | 0} max={5} onChange={handleChange} />
          <p>{formData[props.title.toLowerCase()].grain | 0}</p>
        </div>
        <div className='slider-row'>
          <img src={props.protein_image} className="food-icon" />
          <Slider name="meat" className="food-slider" defaultValue={formData[props.title.toLowerCase()].meat | 0} max={5} onChange={handleChange} />
          <p>{formData[props.title.toLowerCase()].meat | 0}</p>
        </div>
        <div className='slider-row'>
          <img src={props.dairy_image} className="food-icon" />
          <Slider name="dairy" className="food-slider" defaultValue={formData[props.title.toLowerCase()].dairy | 0} max={5} onChange={handleChange} />
          <p>{formData[props.title.toLowerCase()].dairy | 0}</p>
        </div>
      </Box>
    </div>
  );
};

export default FormPage;
