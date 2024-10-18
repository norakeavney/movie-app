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
                //Once retrieved response then display using setMovies - function to update the variable movies 
                .then( (response) => {
                    console.log(response.data)
                    setMovies(response.data.movies)
                })
                //Error Handling
                .catch((error) => {
                    console.log(error);
                }

                )
            }, []
        );

    return(
        <div>
            <Movies myMovies = {movies} />
        </div>
    );
}

//export to app
export default Read;