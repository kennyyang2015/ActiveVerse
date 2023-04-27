const mongoose = require('mongoose')

const workoutSchema = new mongoose.Schema({
    name: String,
    muscle: String,
    sets: Number,
    reps: Number,
    description: String
    
})

const Workout = mongoose.model('workout', workoutSchema);

module.exports = Workout; 