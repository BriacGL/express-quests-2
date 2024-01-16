// movieControllers.js
const database = require('../../database');

const getMovies = (req, res) => {
  database
    .query('SELECT * FROM movies')
    .then(([movies]) => {
      res.json(movies);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getMovieById = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query("select * from movies where id = ?", [id])
    .then(([movie]) => {
      if (movie.length > 0) {
        res.json(movie);
      } else {
        res.status(404).json({ error: "Movie not found" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getMovies,
  getMovieById,
};
