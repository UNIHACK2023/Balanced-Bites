import React from 'react';

interface customiseForm {
  title: string;
  description: string;
}
const FormPage = (props: customiseForm) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <input type='range' />
      <br />
      <input type='range' />
      <br />
      <input type='range' />
      <br />
      <input type='range' />
      <br />
      <input type='range' />
      <br />
    </div>
  );
};

export default FormPage;
