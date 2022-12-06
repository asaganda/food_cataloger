const mongoose = require('mongoose')

const foodsSchema = new mongoose.Schema({
    name: String,
    ingredients: String,
    macros: {
        carbs: Number,
        fat: Number,
        protein: Number,
        calories: Number
    }
})

const Foods = mongoose.model('Foods', foodsSchema)
module.exports = Foods