import {useEffect, useState} from 'react'

const Add = (props) => {
    const [food, setFood] = useState({
        name: "",
        ingredients: "",
        macros: {
            carbs: 0,
            fat: 0,
            protein: 0,
            calories: 0
        }
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        
        switch(name) {
            case "name":
            case "ingredients":
                setFood({...food, [name]: value})
                break;
            case "carbs":
            case "fat":
            case "protein":
            case "calories":
                setFood((food) => ({ 
                    macros: {
                        ...food.macros, 
                        [name]: value 
                    } 
                }))
                break;
            default:
                console.log('i shouldnt see this message')
            }
        // setFood({
        //     ...food, 
        //     [event.target.name]: event.target.value
        // })
    }

    // const handleMacroChange = (event) => {
    //     setFood({
    //         ...food.macros,
    //         [event.target.name]: event.target.value
    //     })
    // }

    const handleSubmit = (event) => {
      event.preventDefault()
      props.handleCreate(food)
    }

    return (
        <>
            <summary>Add Food</summary>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor='ingredients'>Ingredients:</label>
                    <input type='text' name='ingredients' onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor='macros'>Macros:</label>
                    <label htmlFor='carbs'>Carbs:</label>
                    <input type='number' name='carbs' onChange={handleChange}/>
                    <label htmlFor='fat'>Fat:</label>
                    <input type='number' name='fat' onChange={handleChange}/>
                    <label htmlFor='protein'>Protein:</label>
                    <input type='number' name='protein' onChange={handleChange}/>
                    <label htmlFor='calories'>Calories:</label>
                    <input type='number' name='calories' onChange={handleChange}/>
                </div>
                <input type='submit' className="btn btn-primary"/>
            </form>
        </>
    )
}

export default Add