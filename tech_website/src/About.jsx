import React, {useEffect} from 'react'
import HeroSection from './Components/HeroSection'
import { useGlobalContext } from './context'

function About() {
  const {udpateAboutPage} = useGlobalContext();

  useEffect(() => udpateAboutPage(), []);

  return (
    <div>
      <HeroSection />
    </div>
  )
}

export default About
