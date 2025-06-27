const fs = require("node:fs/promises");
const dotenv = require("dotenv").config();
const BEARER_TOKEN = process.env.BEARER_TOKEN || "No Key";

// console.log(BEARER_TOKEN);

const getStoredMovies = async (req, res) => {
    // console.log(req);
    const queryParams = new URL("https://localhost/" + req.originalUrl)
        .searchParams;
    const page = Number(queryParams.get("page"));
    console.log(queryParams);
    try {
        const rawFileContent = await fs.readFile("movies.json", {
            encoding: "utf-8",
        });
        const data = JSON.parse(rawFileContent);
        const storedMovies = data.movies ?? [];
        // console.log(storedMovies);
        if (storedMovies) {
            if (page === storedMovies.page) {
                console.log("RETRIEVED FROM JSON FILE");
                return storedMovies;
            }
        }
    } catch (err) {
        console.error("Error fetching data:", err);
    }

    console.log("FETCHING FROM TMDB");

    let url = "https://api.themoviedb.org/3/discover/movie";

    // console.log(page);
    // needs to be changed as page will always be available
    if (page) {
        // console.log(req.params.page);
        url = "https://api.themoviedb.org/3/discover/movie?page=" + page; // needs updated to retrieve all or each time a new page is loaded the next page on TMDB API is fetched
    }

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
        // console.log(data);
        return data;
    } catch (err) {
        console.error("Error fetching data:", err);
    }

    // const data = JSON.parse(rawFileContent);
    return "Err";
    // // console.log(data);
    // const storedMovies = rawFileContent ?? [];
    // return storedMovies;
};

// const storedMovies = await getStoredMovies();

// cache (local db)
function storeMovies(movies) {
    return fs.writeFile(
        "movies.json",
        JSON.stringify({ movies: movies || [] })
    );
}

// async function getTrueStoredMovies() {
//     const rawFileContent = await fs.readFile("movies.json", {
//         encoding: "utf-8",
//     });
//     const data = JSON.parse(rawFileContent);
//     const storedMovies = data.movies ?? [];
//     return storedMovies;
// }

const searchMovie = async (req, res) => {
    const url =
        "https://api.themoviedb.org/3/search/movie?query=" +
        req.params.title +
        "&include_adult=false&language=en-US&page=1"; // + req.params.page
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${BEARER_TOKEN}`,
        },
    };
    // const movie = await movies.findbyId(req.params.title););
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (err) {
        console.error("Error fetching data:", err);
    }

    // const data = JSON.parse(rawFileContent);
    return "Err";
};

// /movies/:id
const getMovie = async (req, res) => {
    const url = "https://api.themoviedb.org/3/movie/" + req.params.id;
    console.log(url);
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${BEARER_TOKEN}`,
        },
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (err) {
        console.error("Error fetching data:", err);
    }
};

// movies = getTrueStoredMovies();
// console.log(movies);
// storeMovies(movies);

exports.getMovie = getMovie;
exports.searchMovie = searchMovie;
exports.getStoredMovies = getStoredMovies;
// exports.getTrueStoredMovies = getTrueStoredMovies;
exports.storeMovies = storeMovies;
