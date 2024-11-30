import React, { useEffect, useState } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Loader } from "../components";

const ComicPage = () => {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedComic, setSelectedComic] = useState(null); // Track the selected comic for expansion
  const { scrollYProgress } = useScroll();

  const apiUrl =
    "https://gateway.marvel.com/v1/public/characters/1009268/comics?ts=1&apikey=50003c9aa37a7962a7a7bc5b19a2081e&hash=bff4327019ecbe9aff48279a174550e8";

  useEffect(() => {
    const fetchComics = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setComics(data.data.results || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching comics:", error);
        setLoading(false);
      }
    };

    fetchComics();
  }, []);

  if (loading) {
    return (
      <div >
        <Loader />
        {/* Loading Deadpool Comics... */}
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <motion.div
        className="fixed top-0 left-0 h-2 bg-deadpoolRed"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold text-deadpoolRed text-center mb-8">
          Deadpool Comics
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {comics.map((comic) => (
            <motion.div
              key={comic.id}
              className="bg-darkGray p-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
              onClick={() => setSelectedComic(comic)} // Handle comic click
              layout
            >
              <motion.div layoutId={comic.id}>
                <img
                  src={
                    comic.thumbnail && comic.thumbnail.path && comic.thumbnail.extension
                      ? `${comic.thumbnail.path}.${comic.thumbnail.extension}`
                      : "https://via.placeholder.com/300x450?text=No+Image"
                  }
                  alt={comic.title || "No Title"}
                  className="w-full h-64 object-cover rounded-md border-2 border-deadpoolRed mb-4"
                />
                <h2 className="text-xl font-semibold text-center mt-4">
                  {comic.title || "Untitled"}
                </h2>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Comic Details Modal */}
      <AnimatePresence>
        {selectedComic && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center"
            onClick={() => setSelectedComic(null)} // Close modal on background click
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-darkGray rounded-lg p-8 w-1/2 text-center"
              layoutId={selectedComic.id}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              <img
                src={
                  selectedComic.thumbnail &&
                  selectedComic.thumbnail.path &&
                  selectedComic.thumbnail.extension
                    ? `${selectedComic.thumbnail.path}.${selectedComic.thumbnail.extension}`
                    : "https://via.placeholder.com/300x450?text=No+Image"
                }
                alt={selectedComic.title || "No Title"}
                className="w-full h-80 object-cover rounded-md mb-4"
              />
              <h2 className="text-3xl font-bold text-deadpoolRed mb-4">
                {selectedComic.title || "Untitled"}
              </h2>
              <p className="text-lg text-white mb-4">{selectedComic.description || "No Description Available"}</p>
              <p className="text-lg font-semibold text-white">
                Issue #{selectedComic.issueNumber || "N/A"}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ComicPage;
