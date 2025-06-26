import type { LoaderFunctionArgs } from "@remix-run/node";
import { useNavigate } from "react-router-dom";

import MoviesList from "../../components/MoviesList";
import { Outlet, Link, Form, useLocation } from "@remix-run/react";

function MoviesRoute() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("searchQuery");
    const page: number = Number(queryParams.get("page"));
    console.log(page);

    const navigate = useNavigate();
    // function closeHandler() {
    //     navigate("..");
    // }

    // document.getElementById("cancel")?.addEventListener("click", closeHandler);

    return (
        <div className="font-body h-full overflow-y-scroll">
            <header className="grid grid-cols-3 justify-items-center items-center justify-between gap-10 sticky top-0 z-10 backdrop-brightness-50 backdrop-opacity-95 backdrop-blur-2xl">
                <Link
                    to=".."
                    className="mx-24 no-underline text-neutral-400 hover:text-neutral-500 justify-self-start"
                >
                    <h1 className="text-4xl/10">Home</h1>
                </Link>
                <h1 className="text-4xl/10">
                    {searchQuery
                        ? `Movies Containing '${searchQuery}'`
                        : "Popular Movies"}
                </h1>

                <Form
                    method="get"
                    className="p-4 w-72 block bg-inherit justify-self-end"
                >
                    {/* <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" name="body" required rows={3} />
                </p> */}
                    <label htmlFor="searchQuery">Search:</label>
                    <div className="flex">
                        <div className="relative">
                            <input
                                type="text"
                                name="searchQuery"
                                required
                                className="text-black rounded-md"
                                // placeholder="&#128270;"
                            />

                            <button
                                type="submit"
                                className="bg-transparent border-none cursor-pointer absolute right-2 z-2"
                            >
                                <i>&#128270;</i>
                            </button>
                        </div>
                    </div>
                    <button
                        id="cancel"
                        type="button"
                        className="text-neutral-400 hover:text-neutral-500"
                        onMouseDown={() => navigate("..")}
                    >
                        Cancel
                    </button>
                    {/*
                        <button>Submit</button>
                    </p> */}
                </Form>
            </header>
            <main className="overflow-x-hidden">
                <MoviesList />
                <Outlet />
            </main>

            {/* 2 different situations needed because previous page will not be available on page=1 and if it is applied to just Link then "Next Page" is in middle of screen. */}
            {page === (1 || 0) && (
                <footer className="grid grid-cols-1 justify-between gap-10 z-10 backdrop-brightness-50 backdrop-opacity-95 backdrop-blur-2xl">
                    <Link
                        to={`/movies?page=${page + 1}`}
                        className="flex justify-self-end m-10 text-neutral-400 hover:text-neutral-500"
                    >
                        Next Page
                    </Link>
                </footer>
            )}

            {page !== (1 || 0) && (
                <footer className="grid grid-cols-2 justify-between gap-10 z-10 backdrop-brightness-50 backdrop-opacity-95 backdrop-blur-2xl">
                    <Link
                        to={`/movies?page=${page - 1}`}
                        className="flex justify-self-start m-10 text-neutral-400 hover:text-neutral-500"
                    >
                        Previous Page
                    </Link>

                    <Link
                        to={`/movies?page=${page + 1}`}
                        className="flex justify-self-end m-10 text-neutral-400 hover:text-neutral-500"
                    >
                        Next Page
                    </Link>
                </footer>
            )}
        </div>
    );
}

export default MoviesRoute;

export async function loader({ request }: LoaderFunctionArgs) {
    const queryParams = new URL(request.url).searchParams;
    const searchQuery = queryParams.get("searchQuery");
    const page: number = Number(queryParams.get("page"));
    console.log("TEST");
    if (searchQuery) {
        const response = await fetch(
            "http://localhost:8080/search/" + searchQuery
        );
        const resData = await response.json();
        return resData.movies;
    }

    const response = await fetch(`http://localhost:8080/movies?page=${page}`);
    const resData = await response.json();
    return resData.storedMovies;
}
