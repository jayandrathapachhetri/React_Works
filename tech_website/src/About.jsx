import React, {useEffect} from 'react'
import HeroSection from './Components/HeroSection'
import { useGlobalContext } from './context'

function About() {
  const {updateAboutPage} = useGlobalContext();

  useEffect(() => updateAboutPage(), []);

  return (
    <div>
      <HeroSection />
    </div>
  )
}

export default About
