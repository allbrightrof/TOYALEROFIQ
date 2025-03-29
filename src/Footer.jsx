import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='bg-black p-20 '>
         <div className='flex flex-col md:flex-row justify-around items-center'>
            <div className='flex flex-col justify-evenly p-10'>
            <h3 className='text-4xl text-white'>0201 330 6046</h3>
            <h6 className='text-2xl text-white'>hello@irescue.ng</h6>
            <div className='flex flex-row'>
            <div className="bg-[#414141] p-2 text-black font-bold text-2xl rounded-full w-10 h-10 flex items-center justify-center shadow-lg ">
            <FontAwesomeIcon icon={faFacebook} /> 
            </div>
            <div className="bg-[#414141] p-2 text-black font-bold text-2xl rounded-full w-10 h-10 flex items-center justify-center shadow-lg ">
            <FontAwesomeIcon icon={faXTwitter} /> 
            </div>
            <div className="bg-[#414141] p-2 text-black font-bold text-2xl rounded-full w-10 h-10 flex items-center justify-center shadow-lg ">
            <FontAwesomeIcon icon={faLinkedin} /> 
            </div>
            <div className="bg-[#414141] p-2 text-black font-bold text-2xl rounded-full w-10 h-10 flex items-center justify-center shadow-lg ">
            <FontAwesomeIcon icon={faInstagram} /> 
            </div>
            <div className="bg-[#414141] p-2 text-black font-bold text-2xl rounded-full w-10 h-10 flex items-center justify-center shadow-lg ">
            <FontAwesomeIcon icon={faInstagram} /> 
            </div>
            </div>
            </div>
  <div>
    <div>
        <div className='flex justify-between flex-col md:flex-row p-5'>
          <div>
          <h3 className='text-2xl text-white'>Coverage</h3>
          <dt className='text-[#414141]'>
            <dl>Airport Towing </dl>
            <dl>Cities </dl>
            <dl>High Ways</dl>
            <dl>VIP Exclusive </dl>
            <dl>Premium Tow </dl>
              </dt>
              </div>
              <div>
          <h3 className='text-2xl text-white'>Partner with iRescue</h3>
          <dt className='text-[#414141]'> 
            <dl>Become a mechanic</dl>
            <dl>Become a towing van</dl>
            <dl>Sign up as a iReszone</dl>
            <dl>Sign up as a iReszone</dl>
            <dl>Franchise</dl>
              </dt>
              </div>
              <div>
          <h3 className='text-2xl text-white'>Company</h3>
          <dt className='text-[#414141]'>
            <dl>About us </dl>
            <dl>Careers</dl>
            <dl>Press</dl>
            <dl>Blog </dl>
            <dl>Contact us</dl>
              </dt>
              </div>
              </div>
              <div className='flex flex-col md:flex-row'>
              <img className="" src="./app_store 1.png" alt="apple store" />
              <img className="" src="./play_market 2.png" alt="play market" />
              <img className="" src="./huawei 2.png" alt="huawei" />
              </div>
        </div>
  </div>
            </div>
           
   <div className="bg-[#414141] flex-col md:flex-row p-2 text-black font-bold mt-2 rounded-full w-[100%] h-[100%] flex items-center justify-between shadow-lg ">
  <div>
  <p className="text-white">&copy; 2025 iRescue Emergency Solutions.</p>
  </div>
  <div className="flex flex-col md:flex-row justify-between">
    <h3 className="text-white text-1xl ">Privacy Policy</h3>
    <h3 className="text-white text-1xl ml-2">Terms & Conditions</h3>
  </div>
            </div>
                    </div>
  )
}

export default Footer
