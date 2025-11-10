import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { BackgroundBeamsDemo} from './components/BackgroundBeamsDemo'
import { MacbookScrollDemo } from './components/MacbookScrolldemo' 
import { NavbarDemo } from './components/NavbarDemo'
import friendsImage from './assets/friends2.png'
import  TextPressure  from './components/Textpressure'
import {SmoothCursor} from './components/cursor'
import Carousel from './components/Carousel'



const tShirtItems = [
  {
    id: 1,
    title: "Cosmic Voyager",
    description: "A tee for the dreamers and explorers.",
    imgSrc: "/path/to/your/tshirt-1.png", // Use transparent PNGs for best results
    bgSrc: "/path/to/your/background-1.jpg",
  },
  {
    id: 2,
    title: "Urban Abstract",
    description: "Wear a piece of the city's soul.",
    imgSrc: "/path/to/your/tshirt-2.png",
    bgSrc: "/path/to/your/background-2.jpg",
  },
  // ... more items
];
function App() {
  return (
    <div className="relative min-h-screen">
      <div>
        <SmoothCursor />
      <BackgroundBeamsDemo />
      <div className="relative z-10 flex items-center justify-center h-screen">
        <div style={{width: '100%', maxWidth: '1200px'}}>
          <TextPressure
          text="Doozy"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={36}
        />
        </div>
        {/* Other content goes here */}
      </div>
      {/* <div className="transform scale-125">
        <MacbookScrollDemo />
      </div> */}
      <NavbarDemo />
      <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <Carousel items={tShirtItems} animationDuration={1} />
    </div>
    </div>
    </div>
  )
}

export default App
