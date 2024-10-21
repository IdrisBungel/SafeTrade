import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;