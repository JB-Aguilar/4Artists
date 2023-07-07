require ('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require ('morgan')
const {sequelize, connectDB, synModels, closeConnection} = require('./db')
const { router } = require('./api/routes')
const addRelationsToModels = require('./db/relationship')

const app = express()

const connectionAndSync = async () => {
    await connectDB()
    addRelationsToModels()
    //await syncModels('force')
}

const start = async () => {
    
}

app.listen(3000, () => {
    console.log('Server started on port 3000')
})

