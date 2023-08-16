import React, { useEffect } from 'react'
import HeroSection from './Components/HeroSection'
import { useGlobalContext } from './context'

function Home() {
  const {updateHomePage} = useGlobalContext();

  useEffect(() => updateHomePage(), []);


  return (
    <div>
      <HeroSection/>
    </div>
  )
}

export default Home
