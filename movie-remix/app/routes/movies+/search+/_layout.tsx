// // import { Outlet } from "@remix-run/react";

// import { LoaderFunctionArgs } from "@remix-run/node";
// import { Outlet, useLocation } from "@remix-run/react";

// function SearchRoute() {
//     const location = useLocation();
//     console.log(location.search);
//     //const queryParams = new URLSearchParams(location.search);

//     // if (queryParams) {
//     //     console.log(queryParams);
//     // } else {
//     //     console.log("NONE");
//     // }

//     // console.log("QUERY PARAMS:", queryParams);
//     return (
//         <div>
//             <h1> TEST </h1>
//             <Outlet />
//         </div>
//     );
// }
// export default SearchRoute;

// // export async function loader({ params, request }: LoaderFunctionArgs) {
// //     const queryParams = new URL(request.url).searchParams;
// //     console.log("Title:", params.title);
// //     const title = queryParams.get("title");
// //     const response = await fetch("http://localhost:8080/search/" + title);
// //     const resData = await response.json();
// //     console.log(resData.movie);
// //     //console.log(resData.movies);
// //     //console.log(typeof resData.movies);
// //     return "Test";
// // }
