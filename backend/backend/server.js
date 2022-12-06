const express = require('express')
const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
const cors = require('cors')
const app = express()
const Foods = require('./models/foods.js')

app.use(express.json())
app.use(cors())

app.post('/foods', (req, res) => {
    console.log(req)
    Foods.create(req.body, (err, createdFood) => {
        console.log(req.body)
        res.json(createdFood)
    })
})

app.get('/foods', (req, res) => {
    Foods.find({}, (err, foundFoods) => {
        res.json(foundFoods)
    })
})

app.delete('/foods/:id', (req, res) => {
    Foods.findByIdAndRemove(req.params.id, (err, deletedFood) => {
        res.json(deletedFood)
    })
})

app.put('/foods/:id', (req, res) => {
    Foods.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedFood) => {
        res.json(updatedFood)
    })
})

app.listen(3000, () => {
    console.log('listening...')
})


mongoose.connect('mongodb://localhost:27017/foodscrud')
mongoose.connection.once('open', () => {
    console.log('connected to mongod...')
})