const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./config/connectDB')
const router = require('./routes/index')
const cookiesParser = require('cookie-parser')
const { app, server } = require('./socket/index')
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// const app = express()
app.use(cors())
app.use(express.json())
app.use(cookiesParser())

const PORT = process.env.PORT || 80800

app.get('/',(request,response)=>{
    response.json({
        message : "Server running at " + PORT
    })
})

//api endpoints
app.use('/api',router)
app.use(notFound);
app.use(errorHandlerMiddleware);
connectDB().then(()=>{
    server.listen(PORT,()=>{
        console.log("Server running at " + PORT)
    })
})
