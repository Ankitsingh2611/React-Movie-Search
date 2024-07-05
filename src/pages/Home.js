import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Home = ({ setSearchTerm, setMovies, setCurrentPage, setTotalResults }) => {
  const [input, setInput] = useState('avengers');
  const navigate = useNavigate();

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearchTerm(input);
    setCurrentPage(1);
    const response = await axios.get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${input}&page=1`);
    setMovies(response.data.Search || []);
    setTotalResults(response.data.totalResults);
    navigate('/searchResults');
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-white text-4xl mb-4">Search for Movies</h1>
      <form onSubmit={handleSubmit} className="flex w-full max-w-md">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-gray-300 p-2 rounded-l-md flex-grow outline-none"
          placeholder="Enter movie title"
        />
        <button type="submit" className="bg-cyan-400 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-r-lg transition">
          Search
        </button>
      </form>
    </div>
  );
};

export default Home;
