const express = require("express")
const router = express.Router()
const{
    getOneShop, createShop, getAllShops
}= require('../controllers/shopController')
// const requireAuth = require('../middleware/requireAuth')
// router.use(requireAuth)
//getOneShop
router.get('/:id',getOneShop)
//createShop
router.post('/',createShop)
//getAllShops
router.get('/',getAllShops)
module.exports = router