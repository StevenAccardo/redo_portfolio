import React from 'react';
import typingVideo from '../../../../assets/videos/typing.mp4';
import typingVideo2 from '../../../../assets/videos/typing.webm';

const BGVideo = () => {
  return (
    <div className="bgVideo">
      <video className="bgVideo__content" autoPlay loop>
        <source src={typingVideo} type="video/mp4" />
        <source src={typingVideo2} type="video/webm" />
        Your browser is not supported!
      </video>
    </div>
  );
};

export default BGVideo;
