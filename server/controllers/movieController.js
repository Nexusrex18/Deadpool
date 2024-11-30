const Movie = require('../models/Movie');

exports.getMovies = async(req, res) => {
    try{
        const movies = await Movie.find();
        res.status(200).json(movies);
    }
    catch(err) {
        res.status(500).json({message : 'Error fetching movies',err});
    }
};

exports.getMovieById = async(req,res) => {
    try {
        const id = req.params.id;
        const movie = await Movie.findById(id);
        if(!movie){
            return res.status(404).json({message : 'Movie not found'});
        }
        res.status(200).json(movie);
    } catch (err) {
        res.status(404).json({message: 'Error fetching movie',err});
    }
};

exports.createMovie = async(req,res) => {
    try {
        const { title, description ,releaseDate, director, stars, coverImage} = req.body;

        const newMovie = new Movie({
            title,
            description,
            releaseDate,
            director,
            stars,
            coverImage,
        });

        const savedMovie = await newMovie.save();
        res.status(201).json(savedMovie);
    } catch(err) {
        res.status(500).json({message : 'Error creating movie',err});
    }
};