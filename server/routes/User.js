const express = require("express")
const router = express.Router()
const {
    signupUser,
    loginUser,
    getUsers,
    getOneUser,
    deleteUser,
    updateUser
} = require('../controllers/userController')//importing functions from controller

//get all users
router.get('/', getUsers)
//create user
router.post('/signup',signupUser)
//get one user by id
router.post('/login',loginUser)
router.get('/:id',getOneUser)
//delete a user by id
router.delete('/:id',deleteUser)
//update user
router.patch('/:id',updateUser)
module.exports = router