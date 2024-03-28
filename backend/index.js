const express = require("express")
const dotenv = require('dotenv').config({ path: './root.env' });
const mongoose = require('mongoose');
const urlRoute = require('./Router/router')
const path = require('path');
const PORT = process.env.PORT || 5070;
const connectDB =require('./config/DB')
const app = express()
connectDB()
app.use(express.json())
app.use("/url",urlRoute)
// app.use("/",(req,res)=>{console.log(res)})
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}); 