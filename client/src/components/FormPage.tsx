import React from 'react';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
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
      <input type='range' name="vegetable" defaultValue="0" max="5" step="1" onChange={handleChange} />
      <br />
      <input type='range' name="fruit" defaultValue="0" max="5" step="1" onChange={handleChange} />
      <br />
      <input type='range' name="grain" defaultValue="0" max="5" step="1" onChange={handleChange} />
      <br />
      <input type='range' name="meat" defaultValue="0" max="5" step="1" onChange={handleChange} />
      <br />
      <input type='range' name="dairy" defaultValue="0" max="5" step="1" onChange={handleChange} />
      <br />
    </div>
  );
};

export default FormPage;
