const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: [
        {
            name: {
                type: String,
                trim: true
            },
        
            type: {
                type: String,
                trim: true
            },
        
            weight: {
                type: Number,
                min: [0]
            },
        
            sets: {
                type: Number,
                min: [0]
            },
        
            reps: {
                type: Number,
                min: [0]
            },
        
            duration: {
                type: Number,
                min: [0]
            },
        
            distance: {
                type: Number,
                min: [0]
            }
        }
    ]
}, {toJSON: {virtuals: true} });

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;