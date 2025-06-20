import type { LinksFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";
// import Modal from "../components/Modal";

import stylesUrl from "../styles/index.css";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: stylesUrl },
];

export default function IndexRoute() {
    return (
        <>
            <div className="container">
                <div className="content">
                    <h1>
                        TMDB <span>Movies</span>
                    </h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to="movies">View Popular Movies</Link>
                            </li>
                            <li>
                                <Link to="search">Search for Movie</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <Outlet />
        </>
    );
}
