import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AiFeedback = () => {
  const personalDetails = JSON.parse(
    localStorage.getItem('personalDetails') ||
      '{"age": -1, "gender": "U", "height": -1, "weight": -1}'
  );
  const formDates = JSON.parse(localStorage.getItem('formDates') || '[]');
  const formData = JSON.parse(
    localStorage.getItem(formDates[formDates.length - 1]) ||
      '{"breakfast": {}, "lunch": {}, "dinner": {}}'
  );

  const [feedback, setFeedback] = useState('');

  const baseUrl = 'http://localhost:3000';

  const foods = {
    vegetable: formData.breakfast.vegetable + formData.lunch.vegetable + formData.dinner.vegetable,
    fruit: formData.breakfast.fruit + formData.lunch.fruit + formData.dinner.fruit,
    grain: formData.breakfast.grain + formData.lunch.grain + formData.dinner.grain,
    meat: formData.breakfast.meat + formData.lunch.meat + formData.dinner.meat,
    dairy: formData.breakfast.dairy + formData.lunch.dairy + formData.dinner.dairy,
  };

  useEffect(() => {
    const req = async () => {
      const res = await axios.get(`${baseUrl}/ai-feedback`, {
        params: {
          age: personalDetails.age,
          gender: personalDetails.gender,
          foods,
        },
      });
      console.log(res.data);
      setFeedback(res.data);
    };
    req();
  }, []);

  return (
    <div>
      <div style={{ textAlign: 'center' }}>🤖🤖🤖</div>
      <p>{feedback}</p>
      <div style={{ textAlign: 'center' }}>🥰🥰🥰</div>
    </div>
  );
};

export default AiFeedback;
