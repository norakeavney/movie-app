// Imports Effects and Bootstrap Card components
import { useEffect } from "react"; // Importing useEffect hook - side effects
import Card from 'react-bootstrap/Card'; // Importing Card component - UI

// Function for MovieItem - using Props
function MovieItem(props) {
  // useEffect hook logs movie details for 'mymovie' prop changes
  useEffect(() => {
    console.log("Movie Item:", props.mymovie); // Log current movie item
  }, [props.mymovie]); // Dependency array, runs effect when 'mymovie' changes

  return (
    <div>
      <Card> {/* Card component to display movie details */}
        <Card.Header>{props.mymovie.Title}</Card.Header> 
        <Card.Body>
            <img src={props.mymovie.Poster} alt={props.mymovie.Title} /> {/* Movie poster image */}
            <footer>{props.mymovie.Year}</footer> {/* Movie release year */}
        </Card.Body>
      </Card>
    </div>
  );
}


export default MovieItem;