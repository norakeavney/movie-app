// Imports
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//Create Express app
const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB Connection - Cluster1
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://g00415845:<Computer5576559>@cluster1.tczoy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1');


// Import Movie model - added models folder
const Movie = require('./models/movies');

//Add new movie records
app.post('/api/movies', async (req, res)=>{

    const { title, year, poster } = req.body;
   
    const newMovie = new Movie({ title, year, poster });
    await newMovie.save();
   
    res.status(201).json({ message: 'Movie created successfully', movie: newMovie });
})

//retrieve all movie records
app.get('/api/movies', async (req, res) => {
    const movies = await Movie.find({});
    res.json(movies);
});

//retrieve specific movies from id
app.get('/api/movie/:id', async (req, res) => {
const movie = await Movie.findById(req.params.id);
res.send(movie);
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

