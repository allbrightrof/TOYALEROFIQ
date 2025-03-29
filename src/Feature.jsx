import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  {faCar, faTruckRampBox, faAmbulance, faRoute} from "@fortawesome/free-solid-svg-icons";                                                                                                                                                                                                                                                                                             
const FeatureOne = () => {
  return (
<div className="bg-white p-5">
  <div className='flex flex-col items-center justify-between md:flex md:flex-row p-5 md:p-20'>
  <div class="text-black max-w-160 space-y-2">
    <h2 className="font-bold md:text-4xl md:3xl: ">Offering An Emergency Services Every Time</h2>
    <p className='max-w-131'>Every vehicle in our fleet is equipped with modern comfort features
       and undergoes regular inspections to ensure optimal performances.
        Our drivers are not only experienced but also trained to provide friendly and professional service</p>
  </div>
  <div className="bg-black text-white p-4 md:p-6 rounded-lg shadow-lg max-w-100 space-y-2  mt-3">
   <div class="bg-red-500 p-2 rounded-full w-15 h-15 flex items-center justify-center shadow-lg ">
    <FontAwesomeIcon icon={faCar} className='text-white text-2xl'/>
    </div>
    <h3 className='font-bold'>Standard Taxi Service</h3>
    <p>Reliable and efficient taxi service for daily transportation needs</p>
  </div>
  </div>
  <div className='flex flex-col md:flex-row md:p-20 items-center w-[100%] p-4 justify-between'>
  <div className="bg-white shadow-lg text-black p-5 md:p-6 rounded-lg max-w-100 space-y-2  mb-2.5">
   <div class="bg-red-500 p-2 rounded-2xl w-15 h-15 flex items-center justify-center shadow-lg ">
    <FontAwesomeIcon icon={faTruckRampBox} className='text-white text-2xl'/>
    </div>
    <h3 className='font-bold'>Towing Services</h3>
    <p>U European Lingues es members del sam familie. 
      Lor seperat existentie es un myth.Por scientie, musica, sport etc, Iliot Europa usa li sam vocabular</p>
  </div>
  <div className="bg-white text-black p-5 md:p-6 rounded-lg shadow-lg max-w-100 space-y-2  mt-3">
   <div class="bg-red-500 p-2 rounded-2xl w-15 h-15 flex items-center justify-center shadow-lg ">
    <FontAwesomeIcon icon={faAmbulance} className='text-white text-2xl'/>
    </div>
    <h3 className='font-bold'>Standard Taxi Service</h3>
    <p>U European Lingues es members del sam familie. 
      Lor seperat existentie es un myth.Por scientie, musica, sport etc, Iliot Europa usa li sam vocabular</p>
  </div>
  <div className="bg-white p-5 md:p-6 rounded-lg shadow-lg max-w-100 text-black space-y-2  mt-3">
 <div class="bg-red-500 p-2 rounded-2xl w-15 h-15 flex items-center justify-center shadow-lg ">
    <FontAwesomeIcon icon={faRoute} className='text-white text-2xl'/>
      </div>   
    <h3 className='font-bold'>Irezone</h3>
    <p>U European Lingues es members del sam familie. 
    Lor seperat existentie es un myth.Por scientie, musica, sport etc, Iliot Europa usa li sam vocabular</p> </div>
  </div>

 <div className='flex flex-col md:flex-row w-[100%] md:p-10 p-5' >
  <div>
 <img className="w-[100%] md:w-[80%]" src="./hdman.jpg" alt="place"/> 
 </div> 
          
          <div className='p-10 w-[100%] flex flex-col justify-evenly'>
            <h3 className='font-bold  text-1xl md:text-2xl max-w-90'>Enjoy a Peaceful Ride with a Friendly and Experienced Driver </h3>
<p>Sit back, relax, and enjoy your journey, because we prioritize your comfort 
and satisfaction every step of the way.</p>
<button className='bg-black mt-4 hover:bg-gray-900 text-white text-xs w-fit pt-3 pb-3 pl-10 pr-10 px-3 rounded-md'>Learn More</button>
          </div>
          </div>
</div>
  )
}

export default FeatureOne; 