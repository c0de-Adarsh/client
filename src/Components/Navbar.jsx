import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="bg-transparent absolute w-full z-10 py-5">
        <div className="container mx-auto px-4">
          <div className="flex justify-between px-4  items-center">
            {/* Logo */}
            <div className="flex items-center w-1/4">
              <span className="text-3xl font-bold text-[#FFA500]">Brand</span>
              <span className="text-white text-sm ml-1">GRAPHIX DESIGN</span>
            </div>

            {/* Desktop Menu - Now centered */}
            <div className="hidden md:flex items-center text-sm font-semibold justify-center w-2/4">
              <div className="flex items-center space-x-8">
                <a href="#" className="text-white hover:text-[#FFA500]">Home</a>
                <a href="#" className="text-white hover:text-[#FFA500]">Services</a>
                <a href="#" className="text-white hover:text-[#FFA500]">Shop</a>
                <a href="#" className="text-white hover:text-[#FFA500]">Our Clients Work</a>
                <a href="#" className="text-white hover:text-[#FFA500]">Blogs</a>
                <a href="#" className="text-white hover:text-[#FFA500]">Contact</a>
              </div>
            </div>

            {/* Whatsapp Button */}
            <div className="hidden md:flex items-center justify-end w-1/4">
              <button className="bg-[#800000] text-white px-6 py-2 rounded hover:bg-[#600000]">
                Whatsapp Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-black/95 fixed top-0 right-0 h-full w-64 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-white">
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col space-y-4 p-4">
            <a href="#" className="text-white hover:text-[#FFA500]">Home</a>
            <a href="#" className="text-white hover:text-[#FFA500]">Services</a>
            <a href="#" className="text-white hover:text-[#FFA500]">Shop</a>
            <a href="#" className="text-white hover:text-[#FFA500]">Our Clients Work</a>
            <a href="#" className="text-white hover:text-[#FFA500]">Blogs</a>
            <a href="#" className="text-white hover:text-[#FFA500]">Contact</a>
            <button className="bg-[#800000] text-white px-6 py-2 rounded hover:bg-[#600000]">
              Whatsapp Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div 
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center max-w-4xl px-4">
            Graphic Design Services to Strengthen Your Brand
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;