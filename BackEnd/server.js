// Imports
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config(); // To use environment variables

// Create Express app
const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

// Import Movie model
const Movie = require('./models/movie');

// GET: Retrieve all movies from the database
app.get('/api/movies', async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.status(200).json({ myMovies: movies });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving movies' });
    }
});

// GET: Retrieve a single movie by ID
app.get('/api/movie/:id', async (req, res) => {
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

// POST: Add a new movie to the database
app.post('/api/movies', async (req, res) => {
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

// Error Handling Middleware (should be at the end)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start Server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

