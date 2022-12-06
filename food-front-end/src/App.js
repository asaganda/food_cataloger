import { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';

const App = () => {
  const testFood = [
    {
      name: "Burger",
      image: "",
      nutritionalValue: "Good",
      info: "i love burgers, so yummy"
    },
    {
      name: "Fried Chicken",
      image: "",
      nutritionalValue: "Bad",
      info: "fried chicken is tasty but bad for your health. Can only eat it once in a while"
    }
  ]
  const [foods, setFoods] = useState(testFood)
  const [addFood, setAddFood] = useState(false)

  const handleCreate = (data) => {
    axios.post("http://localhost:3000/", data)
    .then((response) => {
      console.log(response)
      let newFoods = [...foods, response.data]
      setFoods(newFoods)
    })
    setAddFood(false)
  }

  const toggleAddFood = () => {
    setAddFood(a => !a)
  }

  return (
    <>
      <h1>Food Cataloger App</h1>
      <button onClick={toggleAddFood}>Add Meal</button>
      {
        addFood ? <Add handleCreate={handleCreate}/> : null
      }
    </>
  );
}

export default App;
