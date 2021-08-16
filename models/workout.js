const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },
  exercises: [{
    type: {
      type: String,
      trim: true,
      required: "Type is Required",
    },
    name: {
      type: String,
      trim: true,
      required: "Name is Required",
    },
    duration: {
      type: String,
      required: "Duration is Required",
    },
    weight: {
      type: Number,
    },

    reps: {
      type: Number,
    },

    distance: {
      type: Number,
    },

    sets: {
      type: Number,
    },
}],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
