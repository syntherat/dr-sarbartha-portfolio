import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Reviews from './components/Reviews/Reviews';
import Timeline from './components/Timeline/Timeline';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Reviews />
      <Timeline />
    </div>
  );
}

export default App;
