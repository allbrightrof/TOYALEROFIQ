import React from "react";

const Hero = () => {
  return (
    <div className="flex font-roboto flex-col md:flex-row justify-between  items-center w-full h-[100%] md:h-[100vh] pt-10 pr-20 pb-20 pl-20 bg-gradient-to-br from-red-700 via-black to-black">
              <div className="md:w-1/2 space-y-4 md:max-w-150">
          <h1 className="text-3xl text-white md:text-5xl font-bold leading-tight">
            Tow anywhere With <span className="text-red-500">iRescue</span>
          </h1>
          <p className="text-gray-400 text-sm">
            Seek a tow or an ambulance with just one request.
          </p>

          <div className="space-y-3">
            <div className="flex items-center space-x-2 bg-white p-3 rounded-md">
              <span className="text-red-500">●</span>
              <input
                type="text"
                placeholder="Enter Location"
                className="flex-1 text-black text-sm  w-2.5 outline-none"
              />
            </div>
            <div className="flex items-center space-x-2 bg-white p-3 rounded-md">
              <span className="text-black">■</span>
              <input
                type="text"  
                placeholder="Enter Destination"
                className="flex-1 text-black text-sm outline-none"
              />
            </div>
          </div>

          <button className="bg-red-500  px-6 py-2 text-white font-semibold rounded-md">
            TOW NOW
          </button>
        </div>

      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img className="max-w-xs md:max-w-md" src="/Frame.png" alt="Car Crash" />
      </div>
    </div>
  );
};

export default Hero;
