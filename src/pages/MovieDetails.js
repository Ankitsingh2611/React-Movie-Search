import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import '../App.css'

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${id}`);
      setMovie(response.data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) {
    return <span className='loader'></span>;
  }

  return (
    <div className='md:flex w-11/12 mx-auto mt-20'>
      
    <div>
    <button
        onClick={() => navigate('/searchResults', { state: { searchTerm: location.state?.searchTerm, movies: location.state?.movies, currentPage: location.state?.currentPage } })}
        className="bg-cyan-500 text-white px-4 py-2 rounded-md mb-4"
      >
        Back
      </button>
      <img src={movie.Poster} alt={movie.Title} className="w-full h-96 object-cover rounded-md mb-4" /></div>
    <div className="max-w-4xl bg-transparent p-8 mt-4">
      <h1 className="text-4xl font-bold mb-4 text-gray-100">{movie.Title}</h1>
      <p className="text-gray-200"><strong className='text-gray-100 mr-1'>Rating:</strong> {movie.imdbRating}</p>
      <p className="text-gray-200"><strong className='text-gray-100 mr-1'>Runtime:</strong> {movie.Runtime}</p>
      <p className="text-gray-200"><strong className='text-gray-100 mr-1'>Released:</strong> {movie.Released}</p>
      <p className="text-gray-200"><strong className='text-gray-100 mr-1'>Genre:</strong> {movie.Genre}</p>
      <p className="text-gray-200"><strong className='text-gray-100 mr-1'>Cast:</strong> {movie.Actors}</p>
      <p className="text-gray-200"><strong className='text-gray-100 mr-1'>Language:</strong> {movie.Language}</p>
      <p className="text-gray-200"><strong className='text-gray-100 mr-1'>Awards:</strong> {movie.Awards}</p>
      <p className="text-gray-200"><strong className='text-gray-100 mr-1'>Country:</strong> {movie.Country}</p>
      <p className="text-gray-200"><strong className='text-gray-100 mr-1'>BoxOffice:</strong> {movie.BoxOffice}</p>
      <p className="text-gray-200"><strong className='text-gray-100 mr-1'>Plot:</strong> {movie.Plot}</p>
      
    </div>
   </div>
  );
};

export default MovieDetails;
