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

function App() {
  return (
    <div className="relative min-h-screen">
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
    </div>
  )
}

export default App
