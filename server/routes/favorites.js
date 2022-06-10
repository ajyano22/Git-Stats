const express = require('express');
const router = express.Router();
const favController = require('../controllers/favController')


router.post('/save', favController.saveRepo, (req,res) =>{
    //console.log("got to favorite router")
    return res.status(200).json("Saved to favorite");
})

router.get('/get', favController.getFav, (req,res) => {
   console.log("get controller ran")
    // console.log('api router getusers called', req.params);
    // console.log('data to return', res.locals.favRepos)
    return res.status(200).json(res.locals.favRepos);
})

router.delete('/delete', favController.deleteFav, (req,res) => {
    console.log('delete controller ran')
    // console.log('api router getusers called', req.params);
    // console.log('data to return', res.locals.userData)
    return res.status(200).json(res.locals.favRepos);
})

router.post('/update', favController.updateFav, (req,res) =>{
    //console.log("got to favorite router")
    console.log('update controller ran')
    return res.status(200).json("Saved to favorite");
})

module.exports = router;