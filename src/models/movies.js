const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    synopsis: { type: String, required: true },
    genre: { type: String, required: true },
    duration: { type: Number, required: true },
    director: { type: String, required: true },
    actors: { type: Array } 
});


module.exports = mongoose.model('movie', movieSchema);
