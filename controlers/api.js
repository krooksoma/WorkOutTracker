const router = require('express').Router();
const { Cardio, Resistance } = require("../models");

// implement to display last workout plan created
router.get("/workouts", async (req, res) =>{
    try{
        const findAll = await Resistance.find({});
        res.json(findAll);
    }catch(err){
        res.status(500).json(error);
    }
})

// implement add exercise to workout plan
// router.get("/workouts/:id", async (req, res) =>{
//     try{

//     }catch(err){
//         res.json(err);
//     }
// })

// implement to create a new workout plan
// router.post("/workouts/range", async (req, res) =>{
//     try{

//     }catch(err){
//         res.json(err)
//     }
// })

// implement

module.exports = router;