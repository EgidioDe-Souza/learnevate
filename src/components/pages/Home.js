import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import AboutSection from '../AboutSection';


function Home () {
  return (
    <React.Fragment>
      <HeroSection />
      <AboutSection />
      <Cards />
      <Footer />
    </React.Fragment>

  )
}

export default Home;