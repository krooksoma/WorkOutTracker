const router = require("express").Router();
const { Workout } = require("../models");

router.get("/workouts", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/workouts", async (req, res) => {
  try {
    console.log("IN BACK-END ROUTE: ", req.body);
    const createWO = await Workout.create(req.body);
    console.log(createWO);
    res.json(createWO);
  } catch (error) {
    res.status(500).json(error);
  }
});

// implement add exercise to workout plan
router.put("/workouts/:id", async (req, res) => {
  try {
    const workout = req.body;
    
    console.log(workout);
    const addExercise = await Workout.findByIdAndUpdate({ _id: req.params.id }, {
      $push: { exercises: workout }})

    res.json(addExercise);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/workouts/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])
    .sort({ _id: -1 })
    .limit(7)
    .then((dbWorkouts) => {
      console.log(dbWorkouts);
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

// implement

module.exports = router;
