// imports the Express library so we can use it.
const express = require('express'); 
// create an Express application called "app."
const app = express(); 
// We set a variable "port" to 4000, which is the port number where our server will listen.
const port = 4000; 

const cors = require('cors');
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//bodyparser - handle post requests 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Sets up route for movies page
app.get('/api/movies', (req, res) => {
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    res.status(201).json({ myMovies: movies });


});

//Error Handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

//POST request handler
app.post('/api/movies', (req, res) => {
    const title = req.body.title;
    const year = req.body.year;
    const poster = req.body.poster;
    console.log(`Title: ${title}, Year: ${year}, Poster: ${poster}`);
    res.send(`Title: ${title}, Year: ${year}, Poster: ${poster}`);
});


// This line makes the server start listening on the specified port.
app.listen(port, () => { 
    // It logs a message to the console to tell us the server is running.
    console.log(`Server is running on http://localhost:${port}`); 
});

