const express = require("express")
const router = express.Router()
const{
    getOneShop, createShop, getAllShops,getMyShops
}= require('../controllers/shopController')
// const requireAuth = require('../middleware/requireAuth')
// router.use(requireAuth)
//getOneShop
router.get('/:id',getOneShop)
//createShop
router.post('/create',createShop)
//getAllShops
router.get('/',getAllShops)
//getMyShops
router.get('/myshops/:id',getMyShops)
module.exports = router