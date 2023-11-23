const Shop = require('../models/shopModel')
const mongoose = require('mongoose')



//get one shop
const getOneShop = async (req,res)=>{
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no such shop"})
    }
    const shop = await Shop.findById(id)
    if (!shop){
        return res.status(404).json({error: 'No such shop'})
    }
    res.status(200).json(shop)
}
//create a shop
const createShop = async (req,res) => {
    try{
        const app = await Shop.create(req.body)
        res.status(200).json(app)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// Get all shops
const getAllShops = async (req, res) => {
    try {
        const shops = await Shop.find({});
        res.status(200).json(shops);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Get shops by owner
// Get all shops
const getMyShops = async (req, res) => {
    const {id} = req.params
    try {
        const shops = await Shop.find({owner_ID : id});
        res.status(200).json(shops);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};




module.exports = {
    getOneShop,
    createShop,
    getAllShops,
    getMyShops
}