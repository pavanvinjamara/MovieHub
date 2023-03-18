import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LanguageSort.css'
import { useDispatch } from 'react-redux';
import { setMovie } from '../../Statemangament/action/SetMovie';
import { useNavigate } from 'react-router-dom';

const LanguageSort = () => {
  const [movies, setMovies] = useState([]);
  const [language, setLanguage] = useState('en'); // Default language is English
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        'https://api.themoviedb.org/3/discover/movie',
        {
          params: {
            api_key: 'cd1ed03cb5a2d66393b34073c9904d3e',
            with_original_language: language,
            page: 1,
          },
        }
      );
      setMovies(response.data.results);
    };
    fetchMovies();
  }, [language]); // Fetch movies when language is changed

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };
  const handleClick = (movie) => {
    dispatch(setMovie(movie));
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div className='lan-contain'>
      <h1>Watch here the your best movies </h1>
      <div>
        <label htmlFor="language-select">Select Language:</label>
        <select id="language-select" value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
          <option value="de">German</option>
        </select>
      </div>
      <ul className='un-movie-list'>
        {movies.map((movie) => (
          <li key={movie.id}>
           
            <img  src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <button onClick={() => handleClick(movie)}>Play Now</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSort;
