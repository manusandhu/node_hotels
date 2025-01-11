const express = require('express');
const router = express.Router();
const Person =require('./../models/Person');
//POST route to add a person
router.post('/', async (req, res) => {
    try{
     const data = req.body //Asumming the request body contain the person data

     //Create a new person documnet using the mongoose model

     const  newPerson = new Person (data);


     //save the new person to database 
     const response = await newPerson.save();
     console.log('data saved');
     res.status(200).json(response);

    }
catch(err){
  console.log(err);
  res.status(500).json({error: 'Internal Server Error'})
}
})

//GET method to add the person 
router.get('/', async(req, res) =>{
    try{
         const data = await Person.find();
         console.log('data fethched');
         res.status(200).json(data);


    }catch(err){
        console.log(err);
  res.status(500).json({error: 'Internal Server Error'})
    }
})

//Work type for person
router.get('/:workType', async(req, res) =>{
    try{
        const workType = req.params.workType; // // Extraxt the work type from the url parametr
        if(workType == 'chef' || workType =='manager' || workType == 'waiter'){
             
            const response = await Person.find({work: workType});
            console.log('response fetched');
            res.status(200).json(response);
        }else{
            res.status(404).json({error: 'Invalid Work Type'});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
    }
    
    })

router.put('/:id', async (req, res) => {
    try{
        const personId = req.params.id; //Extrats the person's id from URL parameterr
        const updatedPersonData = req.body; //updated data for the person

        const response  = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true,
            runValidators: true,
        })
         if(!response){
            return res.status(404).json({error: 'Person Not Found'});
         }

        console.log('data updated');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
    }
})

//delete
router.delete('/:id', async(req, res) =>{
    try{
        const personId = req.params.id; //Extrats the person's id from URL parameterr

        //Assuming u have person model 
        const response = await Person.findByIdAndDelete(personId);

        if(!response){
            return res.status(404).json({error: 'Person Not Found'});
         }

        console.log('data deleted');
        res.status(200).json({message: 'person deleted successfully'});
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
    }
})

    module.exports = router;