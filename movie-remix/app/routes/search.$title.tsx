import type { LinksFunction } from "@remix-run/node";
// import { Links, Outlet } from "@remix-run/react";

import stylesUrl from "../styles/index.css";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: stylesUrl },
];

export default function SearchRoute() {
    return (
        <div>
            <p>List of potential movies</p>
            <p>
                This will list all potential movies as a result of a search. It
                is an example and these will be populated by GET requests to
                TMDB in the future.
            </p>
        </div>
    );
}

// instead of this we need to match title to and string within titles and get by movie:id
export async function loader({ params }: { params: { title: string } }) {
    const response = await fetch("http://localhost:8080/movies");
    const resData = await response.json();
    console.log(resData.storedMovies);
    console.log(typeof resData.storedMovies);
    return "Test";
}
