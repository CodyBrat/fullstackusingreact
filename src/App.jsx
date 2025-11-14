import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { BackgroundBeamsDemo } from './components/BackgroundBeamsDemo'
import { MacbookScrollDemo } from './components/MacbookScrolldemo'
import { NavbarDemo } from './components/NavbarDemo'
import TextPressure from './components/Textpressure'
import { SmoothCursor } from './components/cursor'
import Carousel from './components/Carousel'
import { ProductCard } from './components/productlists/ProductCard'
import { LoadingCard } from './components/productlists/Loading'
import { Products } from './components/productlists/data'

function App() {
  const loading = false// Add your product list here

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SmoothCursor />
      <BackgroundBeamsDemo />
      <NavbarDemo />

      {/* Hero Text Section */}
      <div className="relative z-10 flex items-center justify-center h-screen">
        <div className="w-full max-w-[1200px]">
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
      </div>

      {/* Carousel Section */}
      <div className="w-full h-[90vh] flex justify-center items-center">
        <div className="w-[95vw]">
          <Carousel />
        </div>
      </div>
      

      {/* Product Section */}
      <div className="w-full h-full py-4 flex flex-wrap justify-center items-center gap-8">
  {loading
    ? Array.from({ length: 10}, (_, i) => i + 1).map((i) => (
          <LoadingCard key={i} />
        ))
    : Products.map((product, index) => {
      return (
        <ProductCard key={index} index={index} product={product} />
      );
    })}
</div>
      
    </div>
  )
}

export default App
