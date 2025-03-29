import React from 'react'

const Workpart = () => {
  return (
    <div className='bg-black flex items-center flex-col justify-between w-[100%] p-20 text-white py-12 px-6'>
        <h2 className='text-center text-2xl md:text-2xl font-semibold'>
            Various Taxi Classes Available <br/>  Your Every Travel Need
        </h2>
        <div className='flex flex-col items-center mt-6  pr-7'>
        <div className='absolute w-full max-w-lg'>
        <svg className="absolute w-full h-6 top-4 left-0" viewBox="0 0 330 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M-7 10 L340 10" stroke="rgb(46,46,46)" strokeWidth="2" strokeLinecap="round" />
</svg>


        <div className='flex justify-between items-center w-full px-4'>
            {[ "ECONOMY", "COMFORT","BUSINESS", "VIP", "SUV",
             "ELECTRIC", "MINIBUS"].map((category, index)=> (
                <div key={index} className='flex flex-col items-center relative'>
                        <p className={`text-sm mt-2 ${category === "COMFORT" ? "text-red-500 md:flex hidden" : "text-gray-400"}`}>{category}</p>
                        <span className={`w-2 h-2 rounded-full ${category=== "COMFORT" ? " hidden md:flex bg-red-500": "bg-gray-400"}`}> </span> 
                </div>
             )
             
             )}
            </div>
            </div>
            </div>
            <div>
            <img className="w-[100%]" src="./cab.png" alt="car"/> 
            </div>
    </div>
  )
}

export default Workpart
