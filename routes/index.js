const express=require('express');

const router = express.Router();

const homeController= require('../controllers/home_controller');


// router.get('/',function(req,res,next){
//   console.log('Page is loaded');
//   next();
// },homeController.home);



router.get('/',homeController.home)

router.use('/users',require('./users'));

//for any further routes access from here
// router.use('/routername', require('./routerfile'));


module.exports= router;


