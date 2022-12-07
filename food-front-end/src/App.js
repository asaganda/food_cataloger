import { useState, useEffect } from 'react';
import axios from 'axios'
import Add from './components/Add.js'

const App = () => {
  const [foods, setFoods] = useState([])
  const [addFood, setAddFood] = useState(false)

  const getFoods = () => {
    axios.get("http://localhost:3000/foods")
    .then((response) => setFoods(response.data))
    .catch(error => console.log(error))
  }

  const handleCreate = (data) => {
    axios.post("http://localhost:3000/foods", data)
    .then((response) => {
      console.log(response.data)
      let newFoods = [...foods, response.data]
      setFoods(newFoods)
    })
    setAddFood(false)
  }

  const toggleAddFood = () => {
    setAddFood(a => !a)
  }

  useEffect(() => {
    getFoods()
  }, [])

  return (
    <>
      <h1>Food Cataloger App</h1>
      <button onClick={toggleAddFood}>Add Food</button>
      {
        addFood ? <Add handleCreate={handleCreate}/> : null
      }
    </>
  );
}

export default App;
