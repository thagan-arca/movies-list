import type { LinksFunction } from "@remix-run/node";
import { LiveReload, Outlet, Links } from "@remix-run/react";

// import globalLargeStylesUrl from "./styles/global-large.css";
// import globalMediumStylesUrl from "./styles/global-medium.css";
// import globalStylesUrl from "./styles/global.css";

import tailwind from "./tailwind.css";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: tailwind },
    //     { rel: "stylesheet", href: globalStylesUrl },
    //     {
    //         rel: "stylesheet",
    //         href: globalMediumStylesUrl,
    //         media: "print, (min-width: 640px)",
    //     },
    //     {
    //         rel: "stylesheet",
    //         href: globalLargeStylesUrl,
    //         media: "screen and (min-width: 1024px)",
    //     },
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
