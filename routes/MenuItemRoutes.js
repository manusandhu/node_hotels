const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');

//Post route to add a menu item

router.post('/', async (req, res) => {
    try{
     const data = req.body //Asumming the request body contain the person data

     //Create a new person documnet using the mongoose model

     const  newMenuItem = new MenuItem (data);


     //save the new person to database 
     const response = await newMenuItem.save();
     console.log('data saved');
     res.status(200).json(response);

    }
catch(err){
  console.log(err);
  res.status(500).json({error: 'Internal Server Error'})
}
})


//GET method to add the menu item 
router.get('/', async(req, res) =>{
    try{
         const data = await MenuItem.find();
         console.log('data fethched');
         res.status(200).json(data);


    }catch(err){
        console.log(err);
  res.status(500).json({error: 'Internal Server Error'})
    }
})

//comment added for testing purpose 
module.exports = router;