import { useLoaderData } from "react-router-dom";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";

function MoviesList() {
  const movies = useLoaderData(); // New fetch method

  return (
    <>
    {movies.length > 0 && (
      <ul className={classes.movies}>
        {/* <Post author={enteredAuthor} body={enteredBody} /> */}
        {movies.map((movie) => <Movie key={movie.id} id={movie.id} author={movie.original_title} body={movie.overview}/>)}
        {/* <Post author="Jane Smith" body="Here's another post for you." /> */}
      </ul>
    )}
    {movies.length === 0 && (
      <div style={{ textAlign: 'center', color: 'white'}}>
        <h2>There are no movies yet.</h2>
        <p>Start adding some!</p>
      </div>
    )}
    </>
  );
}

export default MoviesList;
