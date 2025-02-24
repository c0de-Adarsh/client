// App.jsx or BrandingUI.jsx
import React from 'react';

const BrandingUI = () => {
  return (
    <div className="min-h-screen">
      {/* Dark Header at the Top */}
      <header className="bg-gray-900 h-16 flex items-center">
        <div className="container mx-auto">
          {/* You can add a logo or title here if needed */}
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto p-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section (Text Content) */}
        <div className="w-full md:w-1/2 bg-white p-6 shadow-md rounded">
          <h1 className="text-3xl font-bold text-blue-900 mb-4 font-sans">
            Innovative Branding Solutions from Brand Graphix Design
          </h1>
          <p className="text-gray-700 text-base font-sans leading-relaxed mb-6">
            Welcome to BrandGraphixDesign! We specialize in logo design, brand naming, catalog & brochure, menu card design, banners, posters, and more. Our team creates captivating visual solutions to enhance your brand’s identity and communication.
          </p>
          <a 
            href="tel:+1234567890" // Replace with your phone number
            className="inline-block bg-brown-800 text-white px-6 py-2 rounded font-sans text-sm hover:bg-brown-900"
          >
            Call Now
          </a>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full md:w-1/2 p-4 flex justify-center">
          <img 
            src="/path-to-your-eye-image.jpg" 
            alt="Brand Graphix Design Illustration" 
            className="w-full max-w-md object-cover rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default BrandingUI;