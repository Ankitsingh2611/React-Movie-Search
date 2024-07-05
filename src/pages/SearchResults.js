import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const SearchResults = ({ movies, searchTerm, setMovies, currentPage, setCurrentPage, totalResults }) => {
  const totalPages = Math.ceil(totalResults / 10);
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setCurrentPage(location.state.currentPage);
      setMovies(location.state.movies);
    }
  }, [location.state, setMovies, setCurrentPage]);

  const handlePageChange = async (page) => {
    const response = await axios.get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchTerm}&page=${page}`);
    setMovies(response.data.Search || []);
    setCurrentPage(page);
  };

  return (
    <div>
      <h2 className="text-white text-2xl mt-6 mb-6">Search Results for "{searchTerm}"</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:w-11/12 w-10/12 ml-14 mt-20 ">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="h-full w-full bg-transparent pr-14 md:p-4 hover:shadow-lg hover:scale-110 transition">
            <Link to={`/moviesDetails/${movie.imdbID}`} state={{ searchTerm, movies, currentPage }}>
              <img src={movie.Poster} alt={movie.Title} className="max-w-full h-auto object-cover rounded-md" />
              <div className="p-4">
                <h2 className="text-xl font-bold mt-2 text-gray-100">{movie.Title}</h2>
                <p className="text-gray-200 font-medium">{movie.Year}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SearchResults;
