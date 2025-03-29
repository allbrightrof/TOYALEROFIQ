import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  {faCar, faTruckRampBox, faAmbulance, faMapMarkerAlt, faHeadset,faCalendarCheck,faChild, faRoute} from "@fortawesome/free-solid-svg-icons"; 
const Morecontext = () => {
  return (
    <div className='w-[100%] p-10 md:p-20 bg-white'>
        <div className='flex flex-col  md:flex-row item-center justify-between'>
        <div className='flex flex-col items-center'>
            <h3 className='text-3xl text-black mt-20 font-bold max-w-100'>We Are Here to Make Your Journey Smoother</h3>
            <p className="text-black max-w-100 mt-10">
Sit back, relax, and enjoy your journey,
 because we prioritize your comfort and satisfaction every step of the way.
            </p>
            <button className='bg-black hover:bg-gray-900 mt-10 text-white w-fit pt-3 pb-3 pl-10 pr-10 rounded-md'>Learn More</button>
        </div>
  
    <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
      <div className='flex flex-col md:row  gap-4'>
          <div className="bg-white text-black p-4 md:p-6 rounded-lg max-w-100 space-y-2">
           <div class="bg-black p-2 text-white font-bold text-2xl rounded-full w-10 h-10 flex items-center justify-center">
            <h2>1</h2>
            </div>
            <h3 className='font-bold'>Booking</h3>
            <p>Customers select their pickup location and finak destination via our app or website.
               They can also specify a prefferred pick-up time</p>
          </div>
          <div className="bg-white text-black p-4 md:p-6 rounded-lg max-w-100 space-y-2 ">
           <div class="bg-black p-2 text-white font-bold text-2xl rounded-full w-10 h-10 flex items-center justify-center">
            <h2>2</h2>
            </div>
            <h3 className='font-bold'>Confirmation</h3>
            <p>Once the trip details are entered our system will display information about available drivers,
               estimated time of arrival and estiated trip cost</p>
          </div>
          </div>
   <div className='flex flex-col md:row  gap-4'>
          <div className="bg-white text-black mt-2.5 p-4 md:p-6 rounded-lg max-w-100 space-y-2">
           <div class="bg-black p-2 text-white font-bold text-2xl rounded-full w-10 h-10 flex items-center justify-center">
            <h2>3</h2>
            </div>
            <h3 className='font-bold'>Pick up</h3>
            <p>The driver will take the order and head to the designated pick-up location. 
              Customers will receive a notification when the driver has arrived.
            </p>
          </div>
          <div className="bg-white text-black p-4 md:p-6 rounded-lg  max-w-100 space-y-2  mt-3">
           <div class="bg-black p-2 text-white font-bold text-2xl rounded-full w-10 h-10 flex items-center justify-center shadow-lg ">
            <h2>4</h2>
            </div>
            <h3 className='font-bold'>Journey</h3>
            <p>The customer boards a taxi and travels to the final destination.
               They can monitor the journey and make payments  upon arrival</p>
          </div>
          </div>
          </div>
          </div>
<div className='flex justify-between items-center flex-col md:flex-row'>
          <div class="text-black max-w-160 pt-20 pl-7 pr-20-pb-40 h-[100%]">
    <h2 className="font-bold text-2xl md:text-4xl">Find The Right Transportation Solution WIth Our Taxes</h2>
    <p className='max-w-131 pt-10'>Find the Right Transportation Solution with Our Taxis
Book your taxi now and find convenience in every trip with our taxi service. Make your trip more enjoyable and effective with our taxi service.</p>
    
      <div className='flex flex-col md:flex-row pt-10 gap-10'>
        <div className='flex flex-col space-y-4'> 
          <div className="bg-white text-black p-4 md:p-6 rounded-lg max-w-100 space-y-2">
          <div className="flex items-center flex-row gap-2">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-black-500 text-2xl" />
        <span className='font-bold'>Real-time Tracking</span>
      </div>
            <p>Track your taxi location in real time via our app,
               so you always know where your driver is</p>
          </div>
          <div className="bg-white text-black p-4 md:p-6 rounded-lg max-w-100 space-y-2 ">
          <div className="flex items-center flex-row gap-2">
        <FontAwesomeIcon icon={faHeadset} className="text-black-500 text-2xl" />
        <span className='font-bold'>Customer Support</span>
      </div>
            <p>Once the trip details are entered our system will display information about available drivers,
               estimated time of arrival and estiated trip cost</p>
          </div>
          </div>
          <div >
          <div className="bg-white text-black mt-2.5 p-4 md:p-6 rounded-lg max-w-100 space-y-2">
          <div className="flex items-center flex-row gap-2">
        <FontAwesomeIcon icon={faChild} className="text-black-500 text-2xl" />
        <span className='font-bold'>Child Seat</span>
      </div>
            <p>Ensure the safety of your children with child seat services
               available for a safe and comfortable trip with the family
            </p>
          </div>
          <div className="bg-white text-black p-4 md:p-6 rounded-lg max-w-100 space-y-2  mt-3">
           <div className="flex items-center flex-row gap-2">
        <FontAwesomeIcon icon={faCalendarCheck} className="text-black-500 text-2xl" />
        <span className='font-bold'>Pre-Booking Options</span>
      </div>
            <h3 className='font-bold'>Journey</h3>
            <p>The customer boards a taxi and travels to the final destination.
               They can monitor the journey and make payments  upon arrival</p>
          </div>
          </div>
          </div>
          </div>
          <div>
 <img className="w-[100%] md:w-[80%] pt-2" src="./elegant.png" alt="elegant"/> 
 </div> 
          </div>
    </div>
  )
}

export default Morecontext
