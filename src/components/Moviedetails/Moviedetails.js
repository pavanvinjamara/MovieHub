import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import './Moviedetails.css'
function MovieDetails() {
  const selectedMovie = useSelector((state) => state.movie.selectedMovie);

  if (!selectedMovie) {
    return <div>Loading...</div>;
  }
 
  return (
    <div>
        <Navbar/>
        <hr className='line'></hr>
        <div className='movie-head'>
        
      <img src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`} alt={selectedMovie.title} className="post-img"/>
      <div className='info-movie'>
      <h1>{selectedMovie.title}</h1>
      <p>Action,Adventure,Comdey</p>
      <p><strong>Duration :-</strong> 2:30 hr</p>
<div>
      <button className='watch-now' >Watch Now</button> 
      <button className='watch-later'>Watch Later</button>
      </div>
      </div>
      
        </div>
        <p className='over-view'><strong>Overview</strong><br/>{selectedMovie.overview}</p>
      
    </div>
  );
}

export default MovieDetails;
