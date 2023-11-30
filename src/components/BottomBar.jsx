import { Link } from "react-router-dom";
import {useState, useRef, useEffect} from 'react'

import bgMusic from "../assets/bgMusic.mp3";
import { soundoff, soundon } from "../assets/icons";

import { socialLinks } from '../constants'
const BottomBar = () => {

 const audioRef = useRef(new Audio(bgMusic));
  audioRef.current.volume = 0.7;
  audioRef.current.loop = true;

  const [isplayingMusic, setIsPlayingMUsic] = useState(false);

  useEffect(() => {
    if (isplayingMusic) {
      audioRef.current.play();
    }

    return () => audioRef.current.pause();
  }, [isplayingMusic]);

  return (
    <>
    <div className="fixed bottom-2 left-2 ">
        <img
          src={!isplayingMusic ? soundoff : soundon}
          alt="play-music-icon"
          className="w-10 h-10 cursor-pointer object-contain" 
          onClick={() => setIsPlayingMUsic(!isplayingMusic)}
        />
      </div>

      <div className="fixed bottom-1/2 right-2 flex flex-col justify-center items-center gap-4 ">
        {socialLinks.map((link) => (
          <div key={link.name}>
            <Link to={link.link} target={link.name !== 'Contact' ? '_blank' : '_self'} >
                <img src={link.iconUrl} alt={link.name} className="w-5 h-5 cursor-pointer object-contain" />
            </Link>
          </div>
        ))}
      </div>
      </>
  )
}

export default BottomBar
