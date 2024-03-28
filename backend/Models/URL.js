const mongoose = require("mongoose")

const UrL = new mongoose.Schema(
    {
        shortId:{
            type:String,
            required:true,
            unique: true
        },
        redirectURL:{
            type:String,
            required:true
        },
        clicks: {
            type : Number,
            default : 0
        },
    },
    {timestamps:true}
)

const URL = mongoose.model( "url",UrL)

module .exports = URL