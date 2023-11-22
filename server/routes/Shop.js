const express = require("express")
const router = express.Router()
const{
    getOneShop, createShop
}= require('../controllers/shopController')
// const requireAuth = require('../middleware/requireAuth')
// router.use(requireAuth)
//getOneShop
router.get('/:id',getOneShop)
//createShop
router.post('/',createShop)
module.exports = router