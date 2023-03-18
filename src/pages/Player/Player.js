import React, { useRef } from 'react';

import ReactPlayer from 'react-player';
import VideoPath from '../../assets/uchiha.mp4'

const PlayerPage = () => {
 
  const playerRef = useRef(null);

  

  return (
    <div>
      <ReactPlayer
        url={VideoPath}
        ref={playerRef}
        playing={true}
        controls={true}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default PlayerPage;
