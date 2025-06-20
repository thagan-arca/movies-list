import type { LinksFunction } from "@remix-run/node";
// import { Links, Outlet } from "@remix-run/react";

import MoviesList from "../components/MoviesList";
import stylesUrl from "../styles/index.css";
// import MovieRoute from "./movies.$movieId";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: stylesUrl },
];

function MoviesRoute() {
    return (
        <div>
            <header className="movies-header">
                <h1>Movies</h1>
            </header>
            <main>
                <MoviesList />
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

export async function loader() {
    const response = await fetch("http://localhost:8080/movies");
    const resData = await response.json();
    // console.log(resData.storedMovies);
    return resData.storedMovies;
}
