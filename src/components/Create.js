import { useState } from "react";

function Create() {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [poster, setPoster] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, year, poster);
    
  }

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

export default Create;