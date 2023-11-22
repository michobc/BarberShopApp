const User = require('../models/userModel')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

//create token
const createToken = (_id) => {
    return jwt.sign({_id},"webBarberShopServerSecret",{expiresIn: '3d'})// the user is goind to stay logedin for 3d before token expires
}

//create a user

const signupUser = async(req,res) =>{ // we put the keyword async because .create() is async

    try{
        const user =await User.signup(req.body)//this is async
        // we are using User model to create a new document
        
        //create token
        const token = createToken(user._id);
        res.status(200).json({token})
    }catch(error){
        res.status(400).json({error: error.message})
    }
}
//login
const loginUser = async (req,res)=> {
    const {email, password} = req.body
    try{
        const user = await User.login(email,password)
        const token = createToken(user._id)
        res.status(200).json({token})
    }catch (error){
        res.status(400).json({error: error.message})
    }
}
//get all user

const getUsers = async (req,res) =>{

    const users = await User.find({})// empty {} donc tous les users
    res.status(200).json(users);
}

//get one user

const getOneUser = async (req,res)=>{
    const { id } = req.params
    console.log(id)
    if (!mongoose.Types.ObjectId.isValid(id)){//check if id is a valid mongoose id
        return res.status(404).json({error:"no such user"})
    }
    const user = await User.findById(id)
    if (!user){
        return res.status(404).json({error: 'No such user'})
    }
    res.status(200).json(user)
}

//delete user
const deleteUser = async(req,res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){//check if id is a valid mongoose id
        return res.status(404).json({error:"no such user"})
    }

    const user = await User.findOneAndDelete({_id:id})

    if (!user){
        return res.status(404).json({error:"no such user"})
    }

    res.status(200).json(user)
}

//update a user

const updateUser = async (req,res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){//check if id is a valid mongoose id
        return res.status(404).json({error:"no such user"})
    }
    const user = await User.findOneAndUpdate({_id:id},{
        ...req.body
    })

    if (!user){
        return res.status(404).json({error:"no such user"})
    }

    res.status(200).json(user)
}
module.exports = {
    signupUser,
    loginUser,
    getUsers,
    getOneUser,
    deleteUser,
    updateUser
}
