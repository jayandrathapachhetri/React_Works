import React from 'react'
import HeroSection from './Components/HeroSection'

function About() {
  const data={
    name: "Alex Thapa", 
    image:  "Images/about1.svg",
  }
  return (
    <div>
      <HeroSection {...data}/>
    </div>
  )
}

export default About
