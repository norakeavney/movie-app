//Read Compenent 
import {useEffect, useState} from "react";
import axios from "axios";
import Movies from './Movies'
const Read = ()=>{
    //Movies: variable, setMovies: function to update movies 
   const [movies, setMovies] = useState([])
        
        //Continuously Running
        useEffect(
            () => {
                //asynchronisation
                //Retrieve data from API using axios
                axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872')
                //Once retrieved - update the state variable 'movies' using setMovies
                .then( (response) => {
                    console.log(response.data) // Log the response data to the console
                    setMovies(response.data.movies) // Set the movies state with the retrieved data
                })
                //Error Handling
                .catch((error) => {
                    console.log(error);
                }

                )
            }, [] // effect runs only once
        );

    return(
        <div>
            {/* Render the Movies component and pass the retrieved movies as a prop */}
            <Movies myMovies = {movies} />
        </div>
    );
}

//export to app
export default Read;