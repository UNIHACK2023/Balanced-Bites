import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AiFeedback = () => {
  const userData = JSON.parse(localStorage.getItem('userData') || '{"age": 18, "gender": "F"}');
  const formData = JSON.parse(
    localStorage.getItem('formData') || '{"breakfast": {}, "lunch": {}, "dinner": {}}'
  );

  const [feedback, setFeedback] = useState('');

  const baseUrl = 'http://unihack-23-production.up.railway.app';

  useEffect(() => {
    const req = async () => {
      const res = await axios.get(`${baseUrl}/ai-feedback`, {
        params: {
          age: 18,
          gender: 'maleee',
        },
      });
      console.log(res.data);
      setFeedback(res.data);
    };
    req();
  }, []);

  return <div>Feedback: {feedback}</div>;
};

export default AiFeedback;
