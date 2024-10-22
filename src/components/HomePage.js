import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';  // Correctly import useLocation
import Header from './Header';
import HeroSection from './HeroSection';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';

function HomePage() {
  const location = useLocation();  // Get the current location with useLocation

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);  // Find the section based on the hash
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });  // Smoothly scroll to the section
      }
    }
  }, [location]);  // Re-run the effect when location changes

  return (
    <div>
      <Header />
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;