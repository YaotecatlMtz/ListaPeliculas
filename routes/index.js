const router = require('express').Router();
const authMiddleware = require('../src/middleware/auth');
const moviesController = require('../src/controllers/moviescn');

router.use('/movies', authMiddleware);

router.get('/movies', moviesController.list);
router.post('/movies/add', moviesController.create);
router.get('/movies/add', moviesController.create);
router.put('/movie/add', moviesController.edit);
router.get('/movie', moviesController.show);
router.delete('/movie/Add', moviesController.delete);


module.exports = router;

// const router = require('express').Router();
// const moviesController = require('./../src/controllers/movies');

// router.get('/listMovies', moviesController.getMovies);
// router.post('/listMovies', moviesController.createMovie);

// module.exports = router;
