import React from 'react';
import Header from './components/Header';  // Your existing Header component
import HeroSection from './components/HeroSection';  // Your HeroSection component
import About from './components/About';  // About Us section component
import Services from './components/Services';  // Services section component
import Contact from './components/Contact';  // Contact section component
// import Footer from './componentsFooter';  // Footer component

function HomePage() {
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
      {/* <Footer /> */}
    </div>
  );
}

export default HomePage;
