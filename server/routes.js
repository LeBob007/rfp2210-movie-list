const controller = require('./controllers/MoviesController');
const router = require('express').Router();

router.get('/movies', controller.getMovies);

router.post('/movies', controller.postMovie);

router.patch('/movies/:id', controller.patchMovie);

module.exports = router;