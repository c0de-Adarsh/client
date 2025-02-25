import React from 'react';
import { Check } from 'lucide-react';

function Service() {
  const services = [
    'Logo Design',
    'Visiting Card Design', 
    'Brand Naming Services',
    'Poster Design',
    'Catalogue Design',
    'Menu Card Design',
    'Brochure Design',
    'Social Media Post design'
  ];

  return (
    <div className="min-h-screen bg-[#2B0707] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Mockups */}
          <div className="relative">
            <div className="relative">
              {/* iMac Display */}
              <div className="relative w-full aspect-[5/2] bg-[#1a1a1a] rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1613909207039-6b173b755cc1?auto=format&fit=crop&q=80&w=1000"
                  alt="Design Work in iMac"
                  className=" h-full object-cover"
                />
              </div>
              
              {/* MacBook Display */}
              <div className="relative w-[65%] aspect-[16/10] bg-[#1a1a1a] rounded-lg overflow-hidden shadow-2xl ml-auto -mt-16 z-10">
                <img 
                  src="https://images.unsplash.com/photo-1586717799252-bd134ad00e26?auto=format&fit=crop&q=80&w=1000"
                  alt="Design Work in MacBook"
                  className=" h-full object-cover"
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4">
              <div className="w-16 h-16">
                <div className="w-12 h-12 border-2 border-orange-500 rounded-full absolute"></div>
                <div className="w-3 h-3 bg-orange-500 rounded-full absolute top-0 right-0"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold text-orange-500">
                Today's Exclusive :
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-orange-500">
                Limited-Time Offer for New Clients
              </h2>
            </div>

            <p className="text-lg md:text-xl text-gray-300">
              First Time Customers will get a Free Logo on choosing any of the services from our Branding Package
            </p>

            <button className="bg-white text-black px-8 py-3 text-lg font-bold rounded-full hover:bg-gray-100 transition-colors">
              Order Now
            </button>

            <p className="text-orange-500 font-semibold">
              Get Brand Graphix Design Limited Time Risk-Free Satisfaction Guarantee
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 mt-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Check className="text-orange-500" size={20} />
                  <span className="text-sm md:text-base">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;