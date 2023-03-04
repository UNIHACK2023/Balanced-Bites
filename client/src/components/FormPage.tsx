import React from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

interface customiseForm {
  title: "Breakfast" | "Lunch" | "Dinner";
  description: string;
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
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <Box sx={{ width: 250 }}>
        <Slider name="vegetable" defaultValue={formData[props.title.toLowerCase()].vegetable || 0} max={5} onChange={handleChange} />
        <Slider name="fruit" defaultValue={formData[props.title.toLowerCase()].fruit || 0} max={5} onChange={handleChange} />
        <Slider name="grain" defaultValue={formData[props.title.toLowerCase()].grain || 0} max={5} onChange={handleChange} />
        <Slider name="meat" defaultValue={formData[props.title.toLowerCase()].meat || 0} max={5} onChange={handleChange} />
        <Slider name="dairy" defaultValue={formData[props.title.toLowerCase()].dairy || 0} max={5} onChange={handleChange} />
      </Box>
    </div>
  );
};

export default FormPage;
