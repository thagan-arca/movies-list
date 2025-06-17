const express = require('express');
const app = express();

app.use((req, res) => {
    res.status(200).send('Backend to retrieve API data and implement middleware for caching and rate limiting.');
});
// Start the server
const PORT = process.env.REACT_APP_PORT || 8080;
// const PORT = 8080;

app.use((req, res, next) => {
  // Attach CORS headers
  // Required when using a detached backend (that runs on a different domain)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

//@desc Get movies
//@route GET /movies/
//@access private
const url = "https://api.themoviedb.org/3/discover/movie";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${BEARER_TOKEN}`,
  },
};

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});