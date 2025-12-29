import React from 'react';
import hhVideo from '../assets/hh.mp4';

const VideoHero = () => {
  return (
    // mt-20 md:mt-24 accounts for the fixed navbar height
    <div className="w-full mt-20">
      <video
        src={hhVideo}
        className="w-full h-auto object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default VideoHero;
