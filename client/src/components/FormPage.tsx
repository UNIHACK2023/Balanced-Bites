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
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <Box sx={{ width: 250 }}>
        <Slider name="vegetable" defaultValue={0} max={5} onChange={handleChange} />
        <Slider name="fruit" defaultValue={0} max={5} onChange={handleChange} />
        <Slider name="grain" defaultValue={0} max={5} onChange={handleChange} />
        <Slider name="meat" defaultValue={0} max={5} onChange={handleChange} />
        <Slider name="dairy" defaultValue={0} max={5} onChange={handleChange} />
      </Box>
    </div>
  );
};

export default FormPage;
