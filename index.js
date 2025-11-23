const express=require('express')
const router = require('./router/router')
const cookieparser=require('cookie-parser')
require('./db/connection')
const cors =require('cors')
const app=express()
const dotenv=require('dotenv')
dotenv.config()
app.use(cookieparser())
app.use(express.json())
app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_ORIGIN // e.g., http://<your-frontend-ip>:3000
}))
app.use(express.urlencoded({extended:false}))
app.get('/', (req, res) => {
    res.json({
        message: 'server is running',
        frontend_origin: process.env.FRONTEND_ORIGIN
    });
})
app.use('/api',router)


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('server started');
})