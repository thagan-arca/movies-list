const express = require('express');
const { getStoredMovies } = require('./data/movies');
const app = express();

// app.use((req, res) => {
//     res.status(200).send('Backend to retrieve API data and implement middleware for caching and rate limiting.');
// });
// Start the server
const PORT = process.env.REACT_APP_PORT || 8080;
// const PORT = 8080;

app.get('/', (req, res, next) => {
  res.status(200).json({ message: "This is the home page" });
})

app.get('/movies', async (req, res) => {
  const storedMovies = await getStoredMovies();
  // await new Promise((resolve, reject) => setTimeout(() => resolve(), 1500)); // Adds a delay in retrieving data in json file
  res.json({ storedMovies });
});

app.get("/movies/:id", (req, res) => {
  res.json({ message: `Get movie with ID ${req.params.id}`})
})

app.get("/search/:title", (req, res) => {
  res.json({ message: `Search for movie which includes ${req.params.title}`})
})

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
    console.log('Press Ctrl+C to quit.');
});