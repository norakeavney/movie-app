const mongoose = require('mongoose');

// Define schema
const movieSchema = new mongoose.Schema({
    title: String,
    year: String,
    poster: String
});

// Create model
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
