import type { LinksFunction } from "@remix-run/node";
import { LiveReload, Outlet, Links } from "@remix-run/react";

import tailwind from "./tailwind.css";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: tailwind },
];

export default function App() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>TMDB Movies Project</title>
                <Links />
            </head>
            <body className="w-screen h-screen">
                <Outlet />
                <LiveReload />
            </body>
        </html>
    );
}
