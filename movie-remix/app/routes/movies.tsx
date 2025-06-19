import type { LinksFunction } from "@remix-run/node";
import { Links } from "@remix-run/react";

import MoviesList from '../components/MoviesList';
import stylesUrl from "../styles/index.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function Movies() {
  return (
    <div>
      <h1>Movies</h1>
      <Links />
      <main>
        <MoviesList />
      </main>
    </div>
  );
}

// import { Outlet } from 'react-router-dom';


// export default Movies;

export async function loader() {
  const response = await fetch("http://localhost:8080/movies");
  
  const resData = await response.json();
  console.log(resData.storedMovies);
  return resData.storedMovies;
}
