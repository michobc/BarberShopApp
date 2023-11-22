const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shopSchema = new Schema({
    name:{
        type:Time,
        require: true
    },
    owner:{
        type:String,
        require: true
    },
    address:{
        name:String,
        require: true
    }
}, {timestamps: true})

module.exports = mongoose.model('shop', appointmentsSchema)


