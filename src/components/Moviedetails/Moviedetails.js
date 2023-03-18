import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import './Moviedetails.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
function MovieDetails() {
  const selectedMovie = useSelector((state) => state.movie.selectedMovie);
  const [genreNames, setGenreNames] = useState({});
  // const [similarMovies, setSimilarMovies] = useState([]);
  

  if (!selectedMovie) {
    return <div>Loading...</div>;
  }
  const fetchGenreNames = async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=cd1ed03cb5a2d66393b34073c9904d3e`);
    const genreNamesMap = {};
    response.data.genres.forEach((genre) => {
      genreNamesMap[genre.id] = genre.name;
    });
    setGenreNames(genreNamesMap);
  };

  // const fetchSimilarMovies = async () => {
  //   const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=YOUR_API_KEY`);
  //   setSimilarMovies(response.data.results);
  // };

  
  fetchGenreNames();
  // fetchSimilarMovies();
  const handlePlayVideo = () => {
    window.location.href = `/player`;
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
      
    </div>
  );
}

export default MovieDetails;
