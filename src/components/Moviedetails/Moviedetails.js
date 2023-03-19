import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import './Moviedetails.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setMovie } from '../../Statemangament/action/SetMovie';

function MovieDetails() {
  const selectedMovie = useSelector((state) => state.movie.selectedMovie);
  const [genreNames, setGenreNames] = useState({});
  const [similarMovies, setSimilarMovies] = useState([]);
  const isAuthenticated = useSelector((state) => state.auth && state.auth.isAuthenticated);
  const navigate = useNavigate();
  const dispatch = useDispatch();
 

  useEffect(() => {
    const fetchGenreNames = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=cd1ed03cb5a2d66393b34073c9904d3e`);
      const genreNamesMap = {};
      response.data.genres.forEach((genre) => {
        genreNamesMap[genre.id] = genre.name;
      });
      setGenreNames(genreNamesMap);
    };

    const fetchSimilarMovies = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${selectedMovie.id}/similar?api_key=cd1ed03cb5a2d66393b34073c9904d3e`);
      setSimilarMovies(response.data.results);
    };

    fetchGenreNames();
    fetchSimilarMovies();
  }, [selectedMovie]);

  const handlePlayVideo = () => {
    if (isAuthenticated) {
      navigate('/player');
    } else {
      navigate('/login');
    }
  };

  if (!selectedMovie) {
    return <div>Loading...</div>;
  }
  const handleClick = (movie) => {
    dispatch(setMovie(movie));
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div className='container-movie-details'>
      <Navbar/>
      <hr className='line'></hr>
      <div className='movie-head'>
        <img src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`} alt={selectedMovie.title} className="post-img"/>
        <div className='info-movie'>
          <h1>{selectedMovie.title}</h1>
          <p>Genres: {selectedMovie.genre_ids.map((genreId) => genreNames[genreId]).join(', ')}</p>
          <p><strong>Duration :-</strong> 2:30 hr</p>
          <div>
            <button className='watch-now' onClick={handlePlayVideo} >Watch Now</button> 
            <button className='watch-later'>Watch Later</button>
          </div>
        </div>
      </div>
      <p className='over-view'><strong>Overview</strong><br/>{selectedMovie.overview}</p>
      <div className='similar-movies'>
        <h2>Similar Movies</h2>
        <div className='movie-container'>
          {similarMovies.map((movie) => (
            <div onClick={() => handleClick(movie)}>
            <Link to={`/movie/${movie.id}`} key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="post-imga"/>
            </Link>
           <h5>{movie.title}</h5>
           </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
