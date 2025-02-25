import React from 'react';
import { Palette } from 'lucide-react';

const BrandingSection = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      {/* Main Card Container */}
      <div className="bg-white w-full max-w-7xl rounded-lg overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Left Content */}
          <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
            <div className="flex items-center gap-2 mb-8">
              <Palette className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold text-gray-900">BrandGraphix</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Innovative Branding Solutions from Brand Graphix Design
            </h1>
            
            <p className="text-gray-600 mb-8">
              Welcome to BrandGraphixDesign! We specialize in logo design, 
              brand naming, catalog & brochure, menu card design, banners, 
              posters, and more. Our team creates captivating visual solutions to 
              enhance your brand's identity and communication.
            </p>
            
            <button className="bg-[#4a0404] hover:bg-[#3a0303] text-white font-medium py-3 px-8 rounded-md transition duration-300 w-fit">
              Call Now
            </button>
          </div>

          {/* Right Image */}
          <div className="relative h-full">
            <img 
              src="./images/img.jpg"
              alt="Creative Eye Art"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-blue-500/10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandingSection;