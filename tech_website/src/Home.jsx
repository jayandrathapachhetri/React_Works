import React from 'react'
import HeroSection from './Components/HeroSection'

function Home() {
  const data={
    name: "Alex Thapa", 
    image:  "Images/hero.svg",
  }
  return (
    <div>
      <HeroSection {...data}/>
    </div>
  )
}

export default Home
