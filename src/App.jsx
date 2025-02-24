import React from 'react';
import Navbar from './Components/Navbar';

import Home from './Components/Home';
import BrandingSection from './Components/BrandingSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
     <BrandingSection />
    </div>
  );
}

export default App;