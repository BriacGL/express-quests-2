// app.js

const express = require('express');
const app = express();
app.use(express.json());

const movieControllers = require('./controllers/movieControllers');
const userControllers = require('./controllers/userControllers');

app.get('/api/movies', movieControllers.getMovies);
app.get('/api/movies/:id', movieControllers.getMovieById);

// Définir la route GET pour obtenir la liste des utilisateurs
app.get('/api/users', userControllers.getUsers);

// Définir la route GET pour obtenir un utilisateur par ID
app.get('/api/users/:id', userControllers.getUserById);

// Définir la route POST pour ajouter un nouveau film
app.post('/api/movies', (req, res) => {
    movieControllers.postMovie(req, res);
});

// Définir la route POST pour ajouter un nouvel utilisateur
app.post('/api/users', (req, res) => {
    userControllers.postUser(req, res);
});

module.exports = app;
