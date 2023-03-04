import React from 'react'

const Results = () => {
  const formData = JSON.parse(localStorage.getItem('formData') || '{"breakfast": {}, "lunch": {}, "dinner": {}}')
  return (
    <div>
      <h1>Results</h1>
      <h2>Breakfast</h2>
      <p>Vegetable: {formData.breakfast.vegetable || 0}</p>
      <p>Fruit: {formData.breakfast.fruit || 0}</p>
      <p>Grain: {formData.breakfast.grain || 0}</p>
      <p>Meat: {formData.breakfast.meat || 0}</p>
      <p>Dairy: {formData.breakfast.dairy || 0}</p>
      <h2>Lunch</h2>
      <p>Vegetable: {formData.lunch.vegetable || 0}</p>
      <p>Fruit: {formData.lunch.fruit || 0}</p>
      <p>Grain: {formData.lunch.grain || 0}</p>
      <p>Meat: {formData.lunch.meat || 0}</p>
      <p>Dairy: {formData.lunch.dairy || 0}</p>
      <h2>Dinner</h2>
      <p>Vegetable: {formData.dinner.vegetable || 0}</p>
      <p>Fruit: {formData.dinner.fruit || 0}</p>
      <p>Grain: {formData.dinner.grain || 0}</p>
      <p>Meat: {formData.dinner.meat || 0}</p>
      <p>Dairy: {formData.dinner.dairy || 0}</p>
    </div>
  )
}

export default Results