import { redirect, useLoaderData } from "react-router";
import type { ActionFunctionArgs, LinksFunction } from "@remix-run/node";
// import { useActionData } from "@remix-run/react";
import Movie from "../components/Movie";

import stylesUrl from "../styles/index.css";
// import MovieRoute from "./movies.$movieId";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: stylesUrl },
];

type MovieProps = { id: string; original_title: string; overview: string };
function MovieRoute() {
    // const actionData = useActionData<typeof action>();
    // console.log("TEST");
    const data = useLoaderData() as { movie: MovieProps[] };
    const movie = data.movie[1];
    // movie = movie.movie[1];
    return (
        <>
            <header className="movie-header">
                <h1>{movie.original_title}</h1>
            </header>
            <div>
                {/* <Links /> */}
                <Movie
                    key={movie.id}
                    id={movie.id}
                    original_title={movie.original_title}
                    overview={movie.overview}
                />
            </div>
        </>
    );
}

export const action = async ({ params }: ActionFunctionArgs) => {
    return redirect(`/movies/${params.id}`);
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
