import React from 'react';

const Hero3 = () => {
  return (
    <div className=" flex flex-col items-center justify-center relative">
      {/* Fixed Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("./images/icons.jpg")', backgroundAttachment: 'fixed' }}
      ></div>

      {/* Content Overlay */}
      <div className="relative z-10 text-white  text-center w-full ">
        <h1 className="text-7xl font-semibold mt-20">“ 
          
         </h1>
         
         <h1 className="text-4xl font-semibold "> We believe in collaboration and </h1>

          
          <h1 className="text-4xl font-semibold mb-2">transparency throughout the </h1>
          <h1 className="text-4xl font-semibold  mb-2 ">design journey </h1>
        {/* Newsletter Signup Section */}
        <div className="bg-gray-200 p-12 h-[230px] mt-24 flex items-center justify-center  w-full  ">
      <p className="text-gray-900 sm:text-xl md:text-2xl  text-xl mb-4 text-center font-semibold">
        Get all the latest news and info sent to your inbox
      </p>
     
      <form className="flex flex-col sm:flex-row p-10 w-full gap-4 justify-center">
        <input
          type="email"
          placeholder="Your Work Email"
          className="p-2 border border-gray-300 rounded md:w-96 sm:w-36"
        />
        <button type="submit" className="bg-brown-800 text-white p-2 rounded hover:bg-brown-800">
          Submit
        </button>
      </form>
    </div>
      </div>
    </div>
  );
};

export default Hero3;