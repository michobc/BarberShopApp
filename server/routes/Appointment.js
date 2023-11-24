const express = require("express")
const router = express.Router()

const {
    getOneAppointment, createAppointment,getMyApp,getOwnerApp
}= require('../controllers/appointmentsController')


// const requireAuth = require('../middleware/requireAuth')
// router.use(requireAuth)
//get Owner app
router.get('/getownerapp/:id',getOwnerApp)
//get user app
router.get('/getmyapp/:id',getMyApp)
//get one app
router.get('/:id',getOneAppointment)
//post appointment
router.post('/create',createAppointment)

module.exports = router