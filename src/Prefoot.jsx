import React from 'react'

const Prefoot = () => {
  return (
    <div className='p-10 md:p-20'>
    <div className="bg-[#414141] text-white text-center py-10 px-10 md:py-25 md:px-18 rounded-md">
    <h2 className="md:text-3xl text-2xl font-bold mb-3">
      Time to Go! Book Your Taxi and <br/>Experience the Joy of Traveling
    </h2>
    <p className="mb-5 py-2">
      Get ready for an exciting adventure and start your journey by <br/>clicking the button below.
    </p>
    <button className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition">
      Order Now
    </button>
    </div>
  </div>
  
  )
}

export default Prefoot;
