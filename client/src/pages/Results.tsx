import React from 'react'

const Results = () => {
  const formData = JSON.parse(localStorage.getItem('formData') || '{"breakfast": {}, "lunch": {}, "dinner": {}}')
  return (
    <div>
      <h1>Results</h1>
      <h2>Breakfast</h2>
      <p>Vegetable: {formData.breakfast.vegetable}</p>
      <p>Fruit: {formData.breakfast.fruit}</p>
      <p>Grain: {formData.breakfast.grain}</p>
      <p>Meat: {formData.breakfast.meat}</p>
      <p>Dairy: {formData.breakfast.dairy}</p>
      <h2>Lunch</h2>
      <p>Vegetable: {formData.lunch.vegetable}</p>
      <p>Fruit: {formData.lunch.fruit}</p>
      <p>Grain: {formData.lunch.grain}</p>
      <p>Meat: {formData.lunch.meat}</p>
      <p>Dairy: {formData.lunch.dairy}</p>
      <h2>Dinner</h2>
      <p>Vegetable: {formData.dinner.vegetable}</p>
      <p>Fruit: {formData.dinner.fruit}</p>
      <p>Grain: {formData.dinner.grain}</p>
      <p>Meat: {formData.dinner.meat}</p>
      <p>Dairy: {formData.dinner.dairy}</p>
    </div>
  )
}

export default Results