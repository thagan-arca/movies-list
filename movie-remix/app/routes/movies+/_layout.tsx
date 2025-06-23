import type { LoaderFunctionArgs } from "@remix-run/node";

import MoviesList from "../../components/MoviesList";
import { Outlet, Link, Form, useLocation } from "@remix-run/react";

function MoviesRoute() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("searchQuery");

    return (
        <div>
            <header className="flex items-center justify-between gap-10 sticky top-0 z-10 backdrop-brightness-50 backdrop-opacity-95 backdrop-blur-2xl">
                <Link to=".." className="no-underline mx-24">
                    <h1 className="text-4xl/10">Home</h1>
                </Link>
                <h1 className="text-4xl/10">
                    {searchQuery
                        ? `Movies Containing '${searchQuery}'`
                        : "Popular Movies"}
                </h1>

                <Form method="get" className="p-4 w-72 block bg-inherit">
                    {/* <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" name="body" required rows={3} />
                </p> */}
                    <p>
                        <label htmlFor="searchQuery">Search:</label>
                        <div className="block bg-white relative w-52">
                            <input
                                type="text"
                                name="searchQuery"
                                required
                                className="text-black"
                                // placeholder="&#128270;"
                            />

                            <button
                                type="submit"
                                className="bg-transparent border-none cursor-pointer inline-block text-lg absolute top-auto z-2"
                            >
                                <i>&#128270;</i>
                            </button>
                        </div>
                    </p>
                    <p>
                        <Link to="/movies" type="button">
                            Cancel
                        </Link>
                    </p>
                    {/*
                        <button>Submit</button>
                    </p> */}
                </Form>
            </header>
            <main>
                <MoviesList />
                <Outlet />
            </main>
        </div>
    );
}

// import { Outlet } from 'react-router-dom';

export default MoviesRoute;

export async function loader({ request }: LoaderFunctionArgs) {
    const queryParams = new URL(request.url).searchParams;
    const searchQuery = queryParams.get("searchQuery");
    if (searchQuery) {
        const response = await fetch(
            "http://localhost:8080/search/" + searchQuery
        );
        const resData = await response.json();
        // const resData = await response.json();
        // console.log(resData.movie);
        console.log(resData.movies);
        //console.log(typeof resData.movies);
        return resData.movies;
    }

    const response = await fetch("http://localhost:8080/movies");
    const resData = await response.json();
    // console.log(resData.storedMovies);
    return resData.storedMovies;
}
