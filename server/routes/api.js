const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const favController = require('../controllers/favController')


router.get('/:id', userController.getUserData, (req,res) => {
    // console.log('api router getusers called', req.params);
    // console.log('data to return', res.locals.userData)
    return res.status(200).json(res.locals.userData);
})

// router.post('/favorites', favController.saveRepo, (req,res) =>{
//     //console.log("got to favorite router")
//     return res.status(200).json("Saved to favorite");
// })

// router.get('/getfavorites', favController.getFav, (req,res) => {
//     console.log('api server?')
//     // console.log('api router getusers called', req.params);
//     // console.log('data to return', res.locals.userData)
//     return res.status(200).json(res.locals.favRepos);
// })
module.exports = router;
