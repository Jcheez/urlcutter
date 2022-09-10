const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// Connect to MongoDB
mongoose.connect(process.env.DB_URL).then(() => {
    console.log("Connection established with DB!")
}).catch(err => {
    console.log(`Error connecting to DB ${err}`)
})

// Cors configuration
app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}))

// Allowing req.body to show data
app.use(bodyParser.json())

//Initialising Routes
app.use(require('./src/routes/shortcutRoute'))

// Code to start the server
app.listen(PORT, (error) => {
    if (!error) {
        console.log(`Server is running on port ${PORT}`)
    } else {
        console.log(`Server is not running. ${error}`)
    }
})