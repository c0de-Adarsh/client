import React from 'react';
import Navbar from './Components/Navbar';
import BrandingSection from './Components/BrandingSection';
import Hero from './Components/Hero';
import Hero2 from './Components/Hero2';
import Service from './Components/Service';
import Contact from './Components/Contact';
import Hero3 from './Components/Hero3';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
     <BrandingSection />
     <Hero/>
     <Hero2/>
     <Service/>
     <Contact/>
     <Hero3/>
     <Footer/>
    </div>
  );
}

export default App;