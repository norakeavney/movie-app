//Read Compenent 
import {useEffect, useState} from "react";
import axios from "axios";
import Movies from './Movies'
const Read = ()=>{
   const [movies, setMovies] = useState([])

        useEffect(
            () => {
                //asynchronisation
                //Retrieve 
                axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872')
                .then( (response) => {
                    console.log(response.data)
                    setMovies(response.data.movies)
                })
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