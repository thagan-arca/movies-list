const express = require("express");
const bodyParser = require("body-parser");
const {
    getStoredMovies,
    getMovie,
    searchMovie,
    storeMovies,
} = require("./data/movies");
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    // Attach CORS headers
    // Required when using a detached backend (that runs on a different domain)
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

// app.use((req, res) => {
//     res.status(200).send('Backend to retrieve API data and implement middleware for caching and rate limiting.');
// });
// Start the server
const PORT = process.env.REACT_APP_PORT || 8080;
// const PORT = 8080;

app.get("/", (req, res, next) => {
    res.status(200).json({ message: "This is the home page" });
});

app.get("/movies", async (req, res) => {
    const storedMovies = await getStoredMovies(req, res);
    // await new Promise((resolve, reject) => setTimeout(() => resolve(), 1500)); // Adds a delay in retrieving data in json file
    res.json({ storedMovies });
});

app.get("/movies/:id", async (req, res) => {
    const storedMovies = await getStoredMovies(req, res);
    // console.log("Stored movies:", Object.entries(storedMovies.results));
    try {
        // checks local DB for data
        const movie = Object.entries(storedMovies.results).find(
            ([movie]) => movie.id === parseInt(req.params.id)
        );
        // console.log("Movie:", movie);
        if (movie === undefined) {
            throw new Error("Movie is not available in local DB.");
        } // note === needs an int here
        res.json({ movie });
    } catch (e) {
        // console.log("TEST THROWN ERROR");
        const movie = await getMovie(req, res);
        // console.log("Movie has been assigned in catch: " + movie);
        res.json({ movie });
    }
    // const movie = Object.values(storedMovies).find(
    //   (movie) => movie.id === req.params.id
    // );
    // console.log(movie)
    // const movie = storedMovies.find((movie) => movie.id === req.params.id);
    // res.json({ movie });
    // res.json({ message: `Get movie with ID ${req.params.id}`})
});

app.get("/search/:title", async (req, res) => {
    const movies = await searchMovie(req, res);
    res.json({ movies });
    // res.json({
    //     message: `Search for movie which includes ${req.params.title}`,
    // });
});

// app.post('/movies', async (req, res) => {
//   const existingMovies = await getStoredMovies();
//   const movieData = req.body;
//   // console.log(movieData);
//   const newMovie = {
//     ...movieData,
//     id: Math.random().toString(),
//   };
//   const updatedMovies = [newMovie, ...existingMovies];
//   await storeMovies(updatedMovies);
//   res.status(201).json({ message: 'Stored new post.', movie: newMovie });
// });

// app.use((req, res, next) => {
//   // Attach CORS headers
//   // Required when using a detached backend (that runs on a different domain)
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

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

// app.get('/movies/:id', async (req, res) => {
//   const storedMovies = await getStoredMovies();
//   const post = storedMovies.find((post) => post.id === req.params.id);
//   res.json({ post });
// });

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log("Press Ctrl+C to quit.");
});
