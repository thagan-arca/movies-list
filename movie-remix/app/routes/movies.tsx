import type { LinksFunction } from "@remix-run/node";
import { Links, Outlet } from "@remix-run/react";

import stylesUrl from "../styles/index.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function MoviesRoute() {
  return (
    <div>
      <h1>Movies</h1>
      <Links />
      <main>
        <Outlet />
      </main>
    </div>
  );
}