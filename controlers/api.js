const router = require("express").Router();
const { Workout } = require("../models");

// implement to display last workout plan created
router.get("/workouts", async (req, res) => {
  try {
    const findAll = await Workout.find();
    console.log(findAll);
    res.status(200).json(findAll);
  } catch (err) {
    res.status(500).json(err);
  }
});

// implement add exercise to workout plan
router.post("/workouts/:id", async (req, res) => {
    try {
    
    const workout = {
        day: Date.now(),
        exercises: [req.body]
    }  
    const addExercise = await Workout.create(workout);


    res.json(addExercise);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/workouts", async (req, res) => {
    console.log("Req.body Data: ", req.body);
    try{
        const createWorkout = await Workout.create(req.body);

        res.status(200).res.json(createWorkout);

    }catch(err){
        res.status(500).json(err);
    }
})

router.get("/workouts/range", async (req, res) => {
  try {
    const findAll = await Workout.find();
    console.log(findAll);
    res.status(200).json(findAll);
  } catch (err) {
    res.status(500).json(err);
  }
});

// implement

module.exports = router;
