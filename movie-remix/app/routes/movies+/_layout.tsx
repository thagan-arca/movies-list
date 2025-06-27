import type { LoaderFunctionArgs } from "@remix-run/node";

import MoviesList from "../../components/MoviesList";
import { Outlet, Link, Form, useLocation } from "@remix-run/react";
// import { useState } from "react";

function MoviesRoute() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("searchQuery");
    const page: number = Number(queryParams.get("page"));

    // console.log(page);

    // const navigate = useNavigate();
    // function closeHandler() {
    //     // navigate("..");
    //     console.log("CLICK");
    // }

    // function testButton(e) {
    //     e.preventDefault();
    //     console.log("CLICKED");
    // }

    // const testButton = () => {
    //     alert("TEST BUTTON");
    // };

    // document.getElementById("cancel")?.addEventListener("click", closeHandler);

    return (
        <div className="font-body w-full h-full overflow-y-scroll">
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
                    <Link
                        to={`/movies?page=1`}
                        className="text-neutral-400 hover:text-neutral-500"
                    >
                        Cancel
                    </Link>
                    {/*
                        <button>Submit</button>
                    </p> */}
                </Form>
                {/* <button // unknown why this isn't working
                    className="text-neutral-400 hover:text-neutral-500"
                    onClick={testButton}
                >
                    Cancel
                </button> */}
            </header>
            <main className="overflow-x-hidden">
                <MoviesList />
                <Outlet />
            </main>

            <footer className="flex gap-10 z-10 backdrop-brightness-50 backdrop-opacity-95 backdrop-blur-2xl">
                {page > 1 && (
                    <Link
                        to={`/movies?page=${page - 1}`}
                        className="flex justify-self-start m-10 text-neutral-400 hover:text-neutral-500"
                    >
                        Previous Page
                    </Link>
                )}
                {searchQuery && (
                    <Link
                        to={`/movies?searchQuery=${searchQuery}&page=${
                            page + 1
                        }`}
                        className="justify-self-end ml-auto m-10 text-neutral-400 hover:text-neutral-500"
                    >
                        Next Page
                    </Link>
                )}
                {!searchQuery && (
                    <Link
                        to={`/movies?page=${page + 1}`}
                        className="justify-self-end ml-auto m-10 text-neutral-400 hover:text-neutral-500"
                    >
                        Next Page
                    </Link>
                )}
            </footer>
        </div>
    );
}

export default MoviesRoute;

export async function loader({ request }: LoaderFunctionArgs) {
    const queryParams = new URL(request.url).searchParams;
    const searchQuery = queryParams.get("searchQuery");
    const page: number = Number(queryParams.get("page"));
    // console.log(page);
    if (searchQuery) {
        const response = await fetch(
            "http://localhost:8080/search/" + searchQuery
        );
        const resData = await response.json();
        return resData.movies;
    }

    // if (page) {
    //     const response = await fetch(
    //         `http://localhost:8080/movies?page=${page}`
    //     );
    //     const resData = await response.json();
    //     // console.log("THIS", resData.storedMovies);
    //     return resData.storedMovies;
    // }

    const response = await fetch(`http://localhost:8080/movies?page=${page}`);
    const resData = await response.json();
    return resData.storedMovies;
}
