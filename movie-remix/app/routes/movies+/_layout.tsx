import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
// import { Links, Outlet } from "@remix-run/react";

import MoviesList from "../../components/MoviesList";
import stylesUrl from "../../styles/index.css";
import { Outlet, Link, Form, useLocation } from "@remix-run/react";
// import MovieRoute from "./movies.$movieId";

import classes from "./search+/search.module.css";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: stylesUrl },
];

function MoviesRoute() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("searchQuery");

    return (
        <div>
            <header className="movies-header">
                <h1>
                    {searchQuery
                        ? `Movies Containing '${searchQuery}'`
                        : "Popular Movies"}
                </h1>

                <Form method="get" className={classes.form}>
                    {/* <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" name="body" required rows={3} />
                </p> */}
                    <p>
                        <label htmlFor="searchQuery">Movie name:</label>
                        <input type="text" name="searchQuery" required />
                    </p>
                    <p className={classes.actions}>
                        <Link to=".." type="button">
                            Cancel
                        </Link>
                        <button>Submit</button>
                    </p>
                </Form>
            </header>
            <main>
                <MoviesList />
                <Outlet />
                {/* <Routes>
                    <Route path="/movies" element={<MoviesList />} />
                    <Route path="/movies/:id" element={<Outlet />} />
                </Routes> */}
            </main>
        </div>
    );
}

// import { Outlet } from 'react-router-dom';

export default MoviesRoute;

export async function loader({ params, request }: LoaderFunctionArgs) {
    console.log("Title:", params.title);
    const queryParams = new URL(request.url).searchParams;
    const searchQuery = queryParams.get("searchQuery");
    if (searchQuery) {
        const response = await fetch(
            "http://localhost:8080/search/" + searchQuery
        );
        const resData = await response.json();
        console.log(resData.movie);
        //console.log(resData.movies);
        //console.log(typeof resData.movies);
        return resData.movie;
    }

    const response = await fetch("http://localhost:8080/movies");
    const resData = await response.json();
    // console.log(resData.storedMovies);
    return resData.storedMovies;
}
