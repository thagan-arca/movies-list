import { useLoaderData } from "react-router-dom";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";

function MoviesList() {
    const movies = useLoaderData(); // New fetch method

    return (
        <>
            {Object.keys(movies.results).length > 0 && (
                <ul className={classes.movies}>
                    {movies.results.map((movie) => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            image={
                                <img
                                    height={400}
                                    alt="TEST"
                                    src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
                                />
                            }
                            original_title={movie.original_title}
                            release_date={movie.release_date}
                        />
                    ))}
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
