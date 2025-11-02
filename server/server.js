const express = require('express')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const port = process.env.PORT
const cors = require('cors')
const app = express()

connectDB();
app.use(cors())
app.use(express.json())
app.use('/', require('./routes/Users'))

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`)
})