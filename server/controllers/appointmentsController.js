const App = require('../models/appointmentsModel')
const mongoose = require('mongoose')

//getOneAppointment
const getOneAppointment = async (req,res) => {
    const {id}= req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no such appointment"})
    }
    const app = await App.findById(id)
    if (!app){
        return res.status(404).json({error:"no such appointment"})
    }
    res.status(200).json(app)
}
//createAnAppointment
const createAppointment = async (req,res) => {
    try{
        const app = await App.create(req.body)
        res.status(200).json(app)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports={
    getOneAppointment,
    createAppointment
}
