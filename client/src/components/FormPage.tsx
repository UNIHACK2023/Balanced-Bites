import React from 'react';
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
  const [formData, setFormData] = React.useState<FormData>(
    JSON.parse(localStorage.getItem('formData') || '{"breakfast": {}, "lunch": {}, "dinner": {}}')
  );

  const handleChange = (e: Event, value: number | number[]) => {
    const target = e.target as HTMLInputElement;
    const { name } = target;
    console.log(name, value)
    // @ts-ignore
    setFormData({ ...formData, [props.title.toLowerCase()]: { ...formData[props.title.toLowerCase()], [name]: value } });
  };

  React.useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  return (
    <div>
      <Box sx={{ width: 250 }}>
        <div className='slider-row'>
          <img src={props.vegetable_image} className="food-icon" />
          <Slider name="vegetable" defaultValue={0} max={5} onChange={handleChange} />
        </div>
        <div className='slider-row'>
        <img src={props.fruit_image} className="food-icon" />
        <Slider name="fruit" defaultValue={0} max={5} onChange={handleChange} />
        </div>
        <div className='slider-row'>
        <img src={props.grain_image} className="food-icon" />
        <Slider name="grain" defaultValue={0} max={5} onChange={handleChange} />
        </div>
        <div className='slider-row'>
        <img src={props.protein_image} className="food-icon" />
        <Slider name="meat" defaultValue={0} max={5} onChange={handleChange} />
        </div>
        <div className='slider-row'>
        <img src={props.dairy_image} className="food-icon" />
        <Slider name="dairy" defaultValue={0} max={5} onChange={handleChange} />
        </div>
      </Box>
    </div>
  );
};

export default FormPage;
