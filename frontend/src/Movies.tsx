import { movie } from './types/movie';
import { useEffect, useState } from 'react';
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

//this function loops through the data file and displays the movies in a table.
// useEffect makes it so that it doesn't continually call the API for the data
function MovieList() {
  const [movieData, setMovieData] = useState<movie[]>([]);

  useEffect(() => {
    // this is what grabs the data from the API
    const fetchMovies = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setMovieData(temp);
    };
    fetchMovies();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <h3>Joel Hilton's Movie Collection</h3>
      </div>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {movieData.map((m) => (
              <tr key={m.movieID}>
                <td>{m.title}</td>
                <td>{m.category}</td>
                <td>{m.year}</td>
                <td>{m.director}</td>
                <td>{m.rating}</td>
                <td>{m.edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default MovieList;
