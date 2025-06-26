import { useLoaderData } from "react-router-dom";

import Movie from "./Movie";

type MoviesProps = {
    results: Array<object>;
    id: string;
    original_title: string;
    overview: string;
    poster_path: string;
    release_date: string;
};
function MoviesList() {
    const data = useLoaderData() as { results: MoviesProps[] };
    // console.log("DATA:", data);
    // const location = useLocation();
    // const queryParams = new URLSearchParams(location.search);
    // const searchQuery = queryParams.get("searchQuery");
    // const page: number = Number(queryParams.get("page"));

    // if (page != 1 && !searchQuery) {
    //     console.log("This page should have other movies displayed.");
    //     // const newData = useLoaderData();
    //     // const movies = data
    // }
    // console.log(data.results);
    const movies = data.results; // New fetch method
    // console.log(movies);

    // TAILWIND
    // "list-none max-w-4xl mx-auto my-4 py-4 px-0 grid gap-4 grid-cols-3 justify-center"

    return (
        <>
            {Object.keys(movies).length > 0 && (
                <ul className="list-none max-w-7xl mx-auto my-4 py-4 px-0 grid gap-4 grid-cols-3 justify-center">
                    {movies.map((movie) => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            image={
                                <img
                                    // width={400}
                                    alt="TEST"
                                    src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
                                />
                            }
                            original_title={movie.original_title}
                            release_date={movie.release_date}
                            overview={movie.overview}
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
