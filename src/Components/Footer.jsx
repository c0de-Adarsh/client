import React from 'react';

function Footer() {
  return (
    <div className=" flex flex-col justify-between bg-white">
      {/* Header */}
      <header className="p-10 px-40 flex justify-between items-center border-b border-gray-200">
        <div className="flex gap-2 sm:items-center md:items-center sm:justify-center flex-col items-start">
          <h1 className="text-3xl font-cursive text-orange-600 sm:flex sm:items-center sm:justify-center">Brand</h1>
          <h2 className="text-2xl font-bold text-brown-800">GRAPHIX DESIGN</h2>
        </div>
        <div className="flex mt-4 gap-1 sm:items-center flex-col items-end">
          <h3 className="text-2xl md:text-4xl font-semibold sm:text-center md:text-center mb-4 text-gray-800">Contact Us</h3>
          <p className="text-gray-600 text-sm">(+91) 911 891 1172, (+91) 911 891 1171</p>
          <p className="text-gray-600 text-sm">nishi@brandgraphixdesign.in</p>
          <p className="text-gray-600 text-sm">disha@brandgraphixdesign.in</p>
          <div className="flex space-x-4 sm:items-center mt-6">
            <a href="#" className="text-orange-600 hover:text-orange-800">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.798c0-2.508 1.493-3.892 3.776-3.892 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.771-1.628 1.563V12h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            <a href="#" className="text-orange-600 hover:text-orange-800">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.333 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.013-4.947.072-1.318.06-2.603.277-3.636 1.31C2.7 2.143 2.483 3.328 2.422 4.647c-.059 1.28-.072 1.688-.072 4.947s.013 3.667.072 4.947c.06 1.318.277 2.603 1.31 3.636.975.975 2.318 1.246 3.636 1.31 1.28.059 1.688.072 4.947.072s3.667-.013 4.947-.072c1.318-.06 2.603-.277 3.636-1.31.975-.975 1.246-2.318 1.31-3.636.059-1.28.072-1.688.072-4.947s-.013-3.667-.072-4.947c-.06-1.318-.277-2.603-1.31-3.636-.975-.975-2.318-1.246-3.636-1.31-1.28-.059-1.688-.072-4.947-.072z"/>
                <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.162 12 18.162 18.162 15.403 18.162 12 15.403 5.838 12 5.838zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/>
                <circle cx="18.406" cy="5.594" r="1.44"/>
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content (optional, can be empty for this design) */}
      <main className="flex-grow"></main>

      {/* Footer */}
      <footer className="p-4 text-center text-gray-600 border-t border-gray-200">
        <p>Copyright © 2025 Brand Graphix Design</p>
      </footer>
    </div>
  );
}

export default Footer;