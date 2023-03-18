import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setMovie } from '../../Statemangament/action/SetMovie';
import { useNavigate } from 'react-router-dom';
import './Movies.css';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [displayCount, setDisplayCount] = useState(9);
  const loadCount = 9;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=cd1ed03cb5a2d66393b34073c9904d3e&language=en-US&page=1`;

    axios.get(apiUrl)
      .then(response => setMovies(response.data.results))
      .catch(error => console.log(error));
  }, []);

  const handleClick = (movie) => {
    dispatch(setMovie(movie));
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div>
      <div className="movie-grid">
        {Array.isArray(movies) && movies.slice(0, displayCount).map(movie => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <div className="movie-info">
              <h5>{movie.title}</h5>
             
              
                <button onClick={() => handleClick(movie)}>Play Now</button>
             
            </div>
          </div>
        ))}
      </div>
      <div className='info-btn-container'>
      <button className='info-btn'
        onClick={() => setDisplayCount(displayCount + loadCount)}
        disabled={displayCount >= movies.length}
      >
        View More
      </button>
      </div>
    </div>
  );
}

export default Movies;
