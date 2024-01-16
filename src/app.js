const express = require("express");

const app = express();

const movieControllers = require("./controllers/movieControllers");
const userControllers = require("./controllers/userControllers")

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);

// Définir la route GET pour obtenir la liste des utilisateurs
app.get('/api/users', userControllers.getUsers);

// Définir la route GET pour obtenir un utilisateur par ID
app.get('/api/users/:id', userControllers.getUserById);

module.exports = app;
