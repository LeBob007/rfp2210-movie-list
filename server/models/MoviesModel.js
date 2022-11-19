const db = require('../db');

const getMovies = (callback) => {
  db.query('SELECT * FROM movies', callback);
};

const postMovie = (reqBody, callback) => {
  db.query(`INSERT INTO movies (movie_name) VALUES ("${reqBody.movie_name}");`, callback);
};

const patchMovie = (reqID, callback) => {
  db.query(`UPDATE movies SET watched=1 WHERE movies.id="${reqID}"`, callback);
};

module.exports = {
  getMovies,
  postMovie,
  patchMovie
}