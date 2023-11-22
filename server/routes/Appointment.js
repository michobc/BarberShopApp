const express = require("express")
const router = express.Router()

const {
    getOneAppointment, createAppointment
}= require('../controllers/appointmentsController')


// const requireAuth = require('../middleware/requireAuth')
// router.use(requireAuth)

//get one app
router.get('/:id',getOneAppointment)
//post appointment
router.post('/',createAppointment)

module.exports = router