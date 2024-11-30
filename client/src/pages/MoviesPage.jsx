import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { fetchMovies } from "../services/api"; // Adjust path based on your file structure
import { Loader } from "../components";

// Custom hook for parallax effect
function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

// Single Movie Component
function Movie({ movie, index, onImageClick }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 200); // Adjust vertical parallax movement

  return (
    <section className="relative h-screen flex items-center justify-center">
      <div
        ref={ref}
        className="w-full max-w-[420px] h-[640px] mx-auto overflow-hidden rounded-lg shadow-lg cursor-pointer"
        onClick={() => onImageClick(movie)}
      >
        <img
          src={movie.coverImage}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
      </div>
      <motion.h2
        style={{ y }}
        className="absolute top-10 left-10 text-4xl sm:text-6xl font-bold text-red-500 bg-black bg-opacity-70 px-4 py-2 rounded-md"
      >
         {movie.title} {index+1}
      </motion.h2>
    </section>
  );
}

// Modal Component for Movie Details
function Modal({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-gray-800 text-white max-w-lg w-full p-6 rounded-lg relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-red-500 font-bold text-2xl"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Movie Details */}
        <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
        <p className="mb-4">
          <strong>Description:</strong> {movie.description}
        </p>
        <p className="mb-2">
          <strong>Director:</strong> {movie.director}
        </p>
        <p className="mb-2">
          <strong>Release Date:</strong> {movie.releaseDate}
        </p>
        <p>
          <strong>Stars:</strong> {movie.stars.join(", ")}
        </p>
      </div>
    </div>
  );
}

// Movies Page Component
const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null); // State for selected movie
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await fetchMovies();
        setMovies(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setLoading(false);
      }
    };

    getMovies();
  }, []);

  const handleImageClick = (movie) => {
    setSelectedMovie(movie); // Set the movie to display in the modal
  };

  const handleCloseModal = () => {
    setSelectedMovie(null); // Close the modal by resetting the state
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500 text-3xl font-bold">
        <Loader />
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto">
        {movies.map((movie, index) => (
          <Movie
            key={movie._id}
            movie={movie}
            index={index}
            onImageClick={handleImageClick} // Pass image click handler
          />
        ))}
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 h-1 bg-red-600 origin-left"
        style={{ scaleX }}
      />

      {/* Modal for displaying movie details */}
      <Modal movie={selectedMovie} onClose={handleCloseModal} />
    </div>
  );
};

export default MoviesPage;
