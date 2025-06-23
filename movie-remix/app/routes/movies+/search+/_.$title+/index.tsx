// import type { LinksFunction } from "@remix-run/node";
// // import { Links, Outlet } from "@remix-run/react";

// import stylesUrl from "../../../../styles/index.css";
// import { useLoaderData } from "react-router";
// import { useLocation } from "react-router-dom";

// export const links: LinksFunction = () => [
//     { rel: "stylesheet", href: stylesUrl },
// ];

// type MoviesProps = { id: string; original_title: string; overview: string };
// function SearchRoute() {
//     const location = useLocation();
//     console.log("LOCATION:", location);

//     const queryParams = new URLSearchParams(location.search);

//     console.log("QUERY PARAMS:", queryParams);

//     // if (queryParams.get("redirected_from") === "/") {
//     //     return <Error403 />;
//     // } else {
//     //     return (
//     //         <>
//     //             <Route path="/" element={<Dashboard />} />
//     //             <Route path="*" element={<Error404 />} />
//     //         </>
//     //     );
//     // }
//     const data = useLoaderData() as { movies: MoviesProps[] };
//     console.log(data);
//     return (
//         <div>
//             <p>List of potential movies</p>
//             <p>
//                 This will list all potential movies as a result of a search. It
//                 is an example and these will be populated by GET requests to
//                 TMDB in the future.
//             </p>
//         </div>
//     );
// }

// export default SearchRoute;

// // instead of this we need to match title to and string within titles and get by movie:id
// // export async function loader({ params }: { params: { title: string } }) {
// //     console.log("TEST");
// //     console.log("Title:", params.title);
// //     const response = await fetch(
// //         "http://localhost:8080/search/" + params.title
// //     );
// //     const resData = await response.json();
// //     console.log(resData.movie);
// //     //console.log(resData.movies);
// //     //console.log(typeof resData.movies);
// //     return "Test";
// // }
