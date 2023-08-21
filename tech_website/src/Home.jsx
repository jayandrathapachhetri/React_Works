import React, { useEffect } from 'react'
import HeroSection from './Components/HeroSection'
import { useGlobalContext } from './context'
import ServiceInfo from './ServiceInfo';
import Contact from './Contact';

function Home() {
  const {updateHomePage} = useGlobalContext();

  useEffect(() => updateHomePage(), []);


  return (
    <div>
      <HeroSection/>
      <ServiceInfo/>
      <Contact/>
    </div>
  )
}

export default Home
