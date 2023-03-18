import React, { useRef } from 'react';
import './Player.css'
import ReactPlayer from 'react-player';
import VideoPath from '../../assets/uchiha.mp4'
import Navbar from '../../components/Navbar/Navbar';

const PlayerPage = () => {
 
  const playerRef = useRef(null);

  

  return (
    <div>
        <Navbar/>
        <hr className='liner'></hr>
        <div className='moviects'>
      <ReactPlayer
        url={VideoPath}
        ref={playerRef}
        playing={true}
        controls={true}
        className="movie-contain"

      />
      </div>
    </div>
  );
};

export default PlayerPage;
