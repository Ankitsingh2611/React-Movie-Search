import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import MovieDetails from './pages/MovieDetails';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 p-4">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home setSearchTerm={setSearchTerm} setMovies={setMovies} setCurrentPage={setCurrentPage} setTotalResults={setTotalResults} />} />
          <Route path="/searchResults" element={<SearchResults movies={movies} searchTerm={searchTerm} setMovies={setMovies} currentPage={currentPage} setCurrentPage={setCurrentPage} totalResults={totalResults} />} />
          <Route path="/moviesDetails/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
