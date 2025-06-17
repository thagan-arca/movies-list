const fs = require("node:fs/promises");
const dotenv = require("dotenv").config();
const BEARER_TOKEN = process.env.BEARER_TOKEN || "No Key";

// console.log(BEARER_TOKEN);

async function getStoredMovies() {
  const url = "https://api.themoviedb.org/3/discover/movie";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${BEARER_TOKEN}`,
    },
  };

  // console.log(options);
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error("Error fetching data:", err);
  }

  // const data = JSON.parse(rawFileContent);
  return "Err";
  // // console.log(data);
  // const storedMovies = rawFileContent ?? [];
  // return storedMovies;
}

// const storedMovies = await getStoredMovies();

// cache (local db)
function storeMovies(movies) {
  return fs.writeFile("movies.json", JSON.stringify({ movies: movies || [] }));
}

exports.getStoredMovies = getStoredMovies;
exports.storeMovies = storeMovies;
