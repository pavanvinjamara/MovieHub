import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setMovie } from '../../Statemangament/action/SetMovie';
import { useNavigate } from 'react-router-dom';
import '../LanguageSort/LanguageSort.css'

const GenreSort = () => {
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState(28); // Default genre is action
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        'https://api.themoviedb.org/3/discover/movie',
        {
          params: {
            api_key: 'cd1ed03cb5a2d66393b34073c9904d3e',
            with_genres: genre,
            page: 1,
          },
        }
      );
      setMovies(response.data.results);
    };
    fetchMovies();
  }, [genre]); // Fetch movies when genre is changed

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };
  const handleClick = (movie) => {
    dispatch(setMovie(movie));
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div className='lan-contain'>
      <h1> Watch Movies based on your feel</h1>
      <div>
        <label htmlFor="language-select">Select Genre:</label>
        <select id="language-select" value={genre} onChange={handleGenreChange}>
          <option value="28">Action</option>
          <option value="12">Adventure</option>
          <option value="16">Animation</option>
          <option value="35">Comedy</option>
          <option value="80">Crime</option>
          <option value="99">Documentary</option>
          <option value="18">Drama</option>
          <option value="10751">Family</option>
          <option value="14">Fantasy</option>
          <option value="36">History</option>
          <option value="27">Horror</option>
          <option value="10402">Music</option>
          <option value="9648">Mystery</option>
          <option value="10749">Romance</option>
          <option value="878">Science Fiction</option>
          <option value="10770">TV Movie</option>
          <option value="53">Thriller</option>
          <option value="10752">War</option>
          <option value="37">Western</option>
        </select>
      </div>
      <ul className='un-movie-list'>
        {movies.map((movie) => (
          <li key={movie.id}>
          
            <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <button onClick={() => handleClick(movie)}>Play Now</button>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreSort;
