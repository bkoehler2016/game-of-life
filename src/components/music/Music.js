import React from 'react';
import useSound from 'use-sound';
import lifeMusic from './life.mp3';
const Music = () => {
  const [play] = useSound(lifeMusic);
  
  
 return(
     <div>
         <button onClick={play}>Play Music</button>
     </div>
 )
};
export default Music;