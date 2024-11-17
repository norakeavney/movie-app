const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

// GET: Retrieve all movies
router.get('/movies', async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.status(200).json({ myMovies: movies });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving movies' });
    }
});

// GET: Retrieve a movie by ID
router.get('/movie/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.status(200).json(movie);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving movie' });
    }
});

// POST: Add a new movie
router.post('/movies', async (req, res) => {
    try {
        const { title, year, poster } = req.body;
        const newMovie = new Movie({ title, year, poster });
        await newMovie.save();

        res.status(201).json({ message: 'Movie created successfully', movie: newMovie });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating movie' });
    }
});

module.exports = router;
