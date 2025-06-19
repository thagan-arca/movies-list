import { useLoaderData } from "react-router-dom";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";

function MoviesList() {
    const movies = useLoaderData(); // New fetch method
    // movies = Object.entries(movies.results);
    // // console.log(movies.results[0].id);
    // // const movie = Object.entries(movies);
    // // console.log(movie);
    // console.log(movies[1][1].id);
    // console.log(typeof movies)

    // console.log(movies);

    // Object.keys(movies.results).forEach(function (key) {
    //   // console.log(movies.results[movie]);
    //   console.log("ID:", movies.results[key].id);
    //   console.log("ID:", movies.results[key].id);
    //   console.log("Title:", movies.results[key].original_title);
    //   console.log("Overview:", movies.results[key].overview);
    // });

    // console.log(Object.keys(movies.results).length);

    return (
        <>
            {Object.keys(movies.results).length > 0 && (
                <ul className={classes.movies}>
                    {/* <Post author={enteredAuthor} body={enteredBody} /> */}
                    {/* {Object.keys(movies.results).forEach(function (key) {
            <Movie
              key={movies.results[key].id}
              id={movies.results[key].id}
              original_title={movies.results[key].original_title}
              overview={movies.results[key].overview}
            />
          })} */}

                    {/* {<Movie key={ 2 } id={ 2 } original_title={ "TITLE" } overview={ "OVERVIEW" }/>} */}

                    {movies.results.map((movie) => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            original_title={movie.original_title}
                            overview={movie.overview}
                        />
                    ))}
                    {/* <Post author="Jane Smith" body="Here's another post for you." /> */}
                </ul>
            )}
            {Object.keys(movies).length === 0 && (
                <div style={{ textAlign: "center", color: "white" }}>
                    <h2>There are no movies yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
        </>
    );
}

export default MoviesList;
