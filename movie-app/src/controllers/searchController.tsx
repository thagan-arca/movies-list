// // const asyncHandler = require("express-async-handler");
// const dotenv = require("dotenv").config();
// const BEARER_TOKEN = process.env.REACT_APP_BEARER_TOKEN || "No Key";
// console.log(BEARER_TOKEN);

// // let headersList = {
// //  "Accept": "*/*",
// //  "User-Agent": "Thunder Client (https://www.thunderclient.com)"
// // }

// // //@desc Get movie
// // //@route GET /movies/:movieId
// // //@access private
// // let response = await fetch("https://www.themoviedb.org/search?language=en-GB&query=saw", {
// //   method: "GET",
// //   headers: headersList
// // });

// // let data = await response.text();
// // console.log(data);

// //@desc Get movies
// //@route GET /movies/
// //@access private
// const url = "https://api.themoviedb.org/3/discover/movie";
// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization: `Bearer ${BEARER_TOKEN}`,
//   },
// };

// console.log(options);

// fetch(url, options)
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.error(err));
