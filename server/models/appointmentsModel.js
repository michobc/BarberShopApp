const mongoose = require('mongoose')
const Schema = mongoose.Schema

const appointmentsSchema = new Schema({
    time:{
        type:String,
        required: true
    },
    user_ID:{
        type:String,
        required: true
    },
    shop_ID:{
        type:String,
        required: true
    },
    price:{
        type:String,
        required: true
    }

}, {timestamps: true})

module.exports = mongoose.model('appointment', appointmentsSchema)


