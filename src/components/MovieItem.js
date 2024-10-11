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
      <Card border="primary" style={{ width: '25rem' }}> {/* Card component to display movie details */}
        <Card.Img variant="top" src={props.mymovie.Poster} />
        <Card.Body>
        <Card.Title>{props.mymovie.Title}</Card.Title>
          <blockquote className="bq"> {/* Blockquote for movie details */}
            <footer>{props.mymovie.Year}</footer> {/* Movie release year */}
          </blockquote>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
}


export default MovieItem;