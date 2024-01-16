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

module.exports = {
  getUsers,
  getUserById,
};
