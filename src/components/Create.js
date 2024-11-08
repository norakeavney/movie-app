//Imports
import { useState } from "react";

function Create() {
//title is variable, setTitle updates the title, useState is initial value
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [poster, setPoster] = useState('');

  //handleSubmit takes in event and logs to console
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, year, poster);
    
    
  }

  //Form with fields for title, year and poster 
  //Allows button to pressed to sent data into handleSubmit
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          
            <label>Add Movie Title: </label>
            <input type="text"
                className="form-control"
                value={title}
                onChange={(e) => { setTitle(e.target.value) }}
            />

            <label>Add Movie Year: </label>
                <input type="text"
                className="form-control"
                value={year}
                onChange={(e) => { setYear(e.target.value) }}
            />
                
            <label>Add Movie Poster: </label>
                    <input type="text"
                    className="form-control"
                    value={poster}
                    onChange={(e) => { setPoster(e.target.value) }}
            />

        </div>
        
        <input type="submit" value="Add Movie" />
      </form>
    </div>
  );
}

//export
export default Create;