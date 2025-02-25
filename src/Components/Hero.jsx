import React from 'react';
import { Lightbulb, Palette, Target } from 'lucide-react';

function Hero() {
    return (
        <div className="min-h-screen bg-white">
          {/* Navigation */}
          <nav className="p-4">
            <div className="max-w-7xl mx-auto flex items-center">
              <div className="text-2xl font-bold text-orange-500">
                Graphix Design
              </div>
            </div>
          </nav>
    
          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Column - Images */}
              <div className="space-y-4">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800"
                    alt="Designer workspace"
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="bg-[#4A0404] text-white p-8 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4">Partnering with Brand Graphix Design offers a myriad of benefits</h2>
                  <div className="flex items-center">
                    <Lightbulb className="w-8 h-8 text-yellow-400" />
                    <span className="text-yellow-400 text-xl ml-2">Branding</span>
                  </div>
                </div>
              </div>
    
              {/* Right Column - Content */}
              <div className="space-y-12">
                {/* Feature 1 */}
                <div>
                  <h2 className="text-3xl font-bold mb-4">Strategic Brand Positioning</h2>
                  <p className="text-gray-600">Design isn't just about aesthetics. It's about strategically positioning your brand in the market.</p>
                </div>
    
                {/* Feature 2 */}
                <div>
                  <h2 className="text-3xl text-black font-bold mb-4">Customer Engagement and Conversion</h2>
                  <p className="text-gray-600">Great design doesn't just look good. It also drives results. Our designs are optimized for maximum customer engagement and conversion.</p>
                </div>
    
                {/* Feature 3 */}
                <div>
                  <h2 className="text-3xl font-bold text-black mb-4">Cost-Effective Solutions</h2>
                  <p className="text-gray-600">We understand the importance of maximizing your ROI. That is why our cost-effective design solutions deliver exceptional value for your investment.</p>
                </div>
    
                {/* CTA Button */}
                <button className="bg-[#4A0404] text-white px-8 py-3 rounded-md hover:bg-[#3A0303] transition-colors">
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Hero;