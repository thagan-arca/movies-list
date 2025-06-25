import { Link, Outlet } from "@remix-run/react";

export default function IndexRoute() {
    return (
        <>
            <div className="flex flex-row w-full h-full justify-center items-center min-h-min font-body">
                <div className="py-12 flex flex-col justify-center items-center min-h-min">
                    <h1 className="m-10 p-auto text-center leading-[0.5] [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)] drop-shadow-2xl">
                        TMDB
                        <span className="block leading-none text-9xl uppercase">
                            Movies
                        </span>
                    </h1>
                    <nav>
                        <ul className="flex gap-4 text-lg text-neutral-400">
                            <li className="hover:decoration-dashed hover:decoration-1 hover:underline hover:text-neutral-500">
                                <Link to="movies">View Popular Movies</Link>
                            </li>
                            <li className="hover:decoration-dashed hover:decoration-1 hover:underline hover:text-neutral-500">
                                <Link to="movies">Search for Movie</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <Outlet />
        </>
    );
}
