import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { BackgroundBeamsDemo} from './components/BackgroundBeamsDemo'
import { MacbookScrollDemo } from './components/MacbookScrolldemo'  
import { LampDemo } from './components/LampDemo'
import friendsImage from './assets/friends2.png'

function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundBeamsDemo />
      <div className="relative z-10">
        <h1 className='Heading'>Doozy</h1>
        {/* Other content goes here */}
      </div>
      <div className="transform scale-125">
        <MacbookScrollDemo />
      </div>
    </div>
  )
}

export default App
