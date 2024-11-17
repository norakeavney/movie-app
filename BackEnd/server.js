// Imports
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Create Express app
const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB Connection
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://g00415845:<Computer5576559>@cluster1.tczoy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1');


// Import Movie model
const Movie = require('./models/movie');

// Routes
const movieRoutes = require('./routes/movieRoutes');
app.use('/api', movieRoutes);


// Error Handling Middleware (should be at the end)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start Server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

