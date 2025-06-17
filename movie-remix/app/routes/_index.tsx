import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import stylesUrl from "../styles/index.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function IndexRoute() {
  return (
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
          </ul>
        </nav>
      </div>
    </div>
  );
}
