const express = require('express');
const { getMovies, getMovieById, createMovie } = require('../controllers/movieController')

const router = express.Router();

//Routes

router.get('/', getMovies);
router.get('/:id', getMovieById);
router.post('/', createMovie);

module.exports = router;