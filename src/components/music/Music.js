import React from 'react';
import useSound from 'use-sound';
import lifeMusic from './life.mp3';

const Music = () => {
    const [play, { stop }] = useSound(lifeMusic, {
        interrupt: true
    });
    
    const handleClick = () => {
        play()
    }
    const stopPlay = () => {
        stop()
    }
   
    return (
        <div>
      <button className="music" onClick={handleClick} >
       Play Music
      </button>
      <button className="music" onClick={stopPlay}>Stop Music</button>
      </div>
    );
  };
export default Music;