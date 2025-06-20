import { redirect, useLoaderData } from "react-router";
import type { ActionFunctionArgs, LinksFunction } from "@remix-run/node";
import Movie from "../components/Movie";

import stylesUrl from "../styles/index.css";
// import MovieRoute from "./movies.$movieId";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: stylesUrl },
];

function MovieRoute() {
    // console.log("TEST");
    const data = useLoaderData() as { movie: any[] };
    const movie = data.movie[1];
    // movie = movie.movie[1];
    return (
        <div>
            {/* <Links /> */}
            <Movie
                key={movie.id}
                id={movie.id}
                original_title={movie.original_title}
                overview={movie.overview}
            />
        </div>
    );
}

export const action = async ({ params }: ActionFunctionArgs) => {
    return redirect(`/jokes/${params.id}`);
};

export async function loader({ params }: { params: { movieId: string } }) {
    // console.log('http://localhost:8080/movies/' + params.movieId);
    const response = await fetch(
        "http://localhost:8080/movies/" + params.movieId
    );
    // console.log(response);
    const resData = await response.json();
    // console.log(resData)
    // return redirect(`/movies/${params.movieId}`);
    return resData;
}

export default MovieRoute;
