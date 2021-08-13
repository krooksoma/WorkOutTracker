const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema = new Schema({
    type: {
        type: String, 
        trim: true,
        required: "Type is Required"
    },
    name:{
        type: String,
        trim: true, 
        required: "Name is Required"
    },
    duration:{
        type: String,
        required: "Duration is Required"
    },
    weight:{
        type: Number,
        required: "Weight is Required"
    },
    reps:{
        type: Number,
        required: "Reps is Required"
    },
    sets:{
        type: Number,
        required: "Sets is Required"
    }
    
})

const resistanceSchema = new Schema({

})