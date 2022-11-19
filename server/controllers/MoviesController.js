const MoviesModel = require('../models/MoviesModel');

const getMovies = (req, res) => {
  MoviesModel.getMovies((err, movies) => {
    if (err) {
      res.status(404).send('Unable to get movies');
    } else {
      res.status(200).send(movies);
    }
  })
};

const postMovie = (req, res) => {
  MoviesModel.postMovie(req.body, (err, movie) => {
    if (err) {
      res.status(404).send('Unable to post movie');
    } else {
      res.status(201).send(movie);
    }
  })
};

const patchMovie = (req, res) => {
  MoviesModel.patchMovie(req.params.id, (err, movie) => {
    if (err) {
      res.status(404).send(`Unable to patch movie with id ${req.params.id}`);
    } else {
      res.status(200).send(movie);
    }
  })
};

module.exports = {
  getMovies,
  postMovie,
  patchMovie
}