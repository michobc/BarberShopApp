const mongoose = require('mongoose')
const Schema = mongoose.Schema

const appointmentsSchema = new Schema({
    time:{
        type:Time,
        require: true
    },
    user:{
        type:String,
        require: true
    },
    shop:{
        name:String,
        require: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Appointment', appointmentsSchema)


