import { Route, BrowserRouter, Routes } from 'react-router-dom'
import {useState, useRef, useEffect} from 'react'


import Navbar from './components/Navbar'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

import bgMusic from "./assets/bgMusic.mp3";
import { soundoff, soundon } from "./assets/icons";

const App = () => {

  const audioRef = useRef(new Audio(bgMusic));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [isplayingMusic, setIsPlayingMUsic] = useState(false);

  useEffect(() => {
    if (isplayingMusic) {
      audioRef.current.play();
    }

    return () => audioRef.current.pause();
  }, [isplayingMusic]);
  return (
  <main className='bg-slate-300/20 select-none min-h-screen'>
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    </BrowserRouter>
    <div className="fixed bottom-2 left-2 ">
        <img
          src={!isplayingMusic ? soundoff : soundon}
          alt="play-music-icon"
          className="w-10 h-10 cursor-pointer object-contain" 
          onClick={() => setIsPlayingMUsic(!isplayingMusic)}
        />
      </div>
  </main>
  )
}

export default App
