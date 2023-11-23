import React from 'react';
import video from '../../video/thebarber.mp4';
import './index.css';

const VideoPlayer = () => {
  return (
    <div className='vid'>
      <video src={video} width="55%" height="55%" controls />
    </div>
  );
};

export default VideoPlayer;