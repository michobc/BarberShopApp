const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shopSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    owner_ID:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required: true
    },
    phoneNumber:{
        type:String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('shop', shopSchema)


