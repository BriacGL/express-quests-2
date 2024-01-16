// userControllers.js
const database = require('../../database');

const getUsers = (req, res) => {
  database
    .query('SELECT * FROM users')
    .then(([users]) => {
      res.json(users);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query('SELECT * FROM users WHERE id = ?', [id])
    .then(([user]) => {
      if (user.length > 0) {
        res.json(user[0]);
      } else {
        res.status(404).send('User not found');
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
};

const postUser = (req, res) => {
  
    const { firstname, lastname, email, city, language } = req.body;
  
    database
      .query(
        "INSERT INTO users(firstname, lastname, email, city, language) VALUES (?, ?, ?, ?, ?)",
        [firstname, lastname, email, city, language]
      )
      .then(([result]) => {
        res.status(201).send({ id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

module.exports = {
  getUsers,
  getUserById,
  postUser
};
