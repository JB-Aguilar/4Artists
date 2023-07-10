require ('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require ('morgan')
const {sequelize, connectDB, syncModels, closeConnection} = require('./db')
const { router } = require('./api/routes')
//const addRelationsToModels = require('./db/relationship')

const app = express()

const connectionAndSync = async () => {
    await connectDB()
    //addRelationsToModels()
    //await syncModels('force')
}

const start = async () => {
    try {
        app.get('/', (req, res) => res.send('Welcome to 4Artists'))
        app.use(cors())
        app.use(morgan('dev'))
        app.use(express.json())
        app.use('/api', router)
        app.listen(process.env.EXPRESS_PORT || 2222)
        connectionAndSync()
        console.info(`4Artists API running on port ${process.env.EXPRESS_PORT}`)
    } catch (err) {
        throw new Error(`Cannot start server on port ${process.env.EXPRESS_PORT}, ${err}`)
    }
}

start()

