import { useLoaderData } from "react-router";
import Movie from "../components/Movie";

function MovieRoute() {
    console.log("TEST");
    const movie = useLoaderData();
    console.log(movie);
    return (
        <div>
            <p>Example Movie</p>
            <Movie
                key={movie.id}
                id={movie.id}
                original_title={movie.original_title}
                overview={movie.overview}
            />
        </div>
    );
}

export async function loader({ params }) {
    // console.log('http://localhost:8080/movies/' + params.movieId);
    const response = await fetch(
        "http://localhost:8080/movies/" + params.movieId
    );
    //console.log(response);
    const resData = await response.json();
    // console.log(resData)
    return resData;
}

export default MovieRoute;
