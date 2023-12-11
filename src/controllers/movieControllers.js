const database = require("../../database");
const getMovies = (req, res) => {
  database
    .query("select * from movies")
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
    .then(([movies]) => {
      if (movies && movies.length > 0) {
        res.status(200).json(movies);
      } else {
        res.status(404).json({ message: "No users found" });
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