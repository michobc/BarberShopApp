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
    firstName:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    },
    shopOwner:{
        type:String,
        required: true
    },
    price:{
        type:String,
        required: true
    },
    day:{
        type:String,
        required: true
    },
    month:{
        type:String,
        required: true
    },
    year:{
        type:String,
        required: true
    }

}, {timestamps: true})

module.exports = mongoose.model('appointment', appointmentsSchema)


