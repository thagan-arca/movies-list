const express = require('express');
// import { dotenv } from dotenv.config();
const app = express();
// // const dotenv = require("dotenv").config();

app.use((req, res) => {
    res.status(200).send('Hello, world!');
});
// Start the server
// const PORT = process.env.REACT_APP_PORT || 8080;
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});