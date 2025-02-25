import React from 'react';
import { Lightbulb } from 'lucide-react';

function Hero2() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-[#4A0404] leading-tight">
              Crafting Your Brand's Identity: The Power of Design
            </h1>
            
            <p className="text-gray-700 text-lg">
              Your brand is more than just a name or a logo. It's the embodiment of your 
              company's values, personality, and promise to your customers. At{' '}
              <span className="text-blue-500">Brand graphix</span> design, 
              we understand that design plays a pivotal role in crafting and 
              communicating your brand's identity to the world.
            </p>

            <button className="bg-[#4A0404] text-white px-8 py-4 text-lg font-semibold rounded hover:bg-[#3A0303] transition-colors">
              Let's Shape Your Brand's Identity Together
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg overflow-hidden">
              <div className="relative p-24">
                <div className="text-orange-500 text-4xl font-bold space-y-2">
                  <div>Crafting</div>
                  <div>Your</div>
                  <div>Brand's</div>
                  <div>Identity</div>
                </div>
                <img
                  src="./images/dark.jpg"
                  alt="Glowing lightbulb"
                  className="absolute right-0 object-fill bottom-0  mix-blend-lighten opacity-90"
                />
                <div className="absolute bottom-4 right-4 text-white text-3xl font-bold">
                  The<br />Power of<br />Design
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

   
    </div>
  );
}

export default Hero2;