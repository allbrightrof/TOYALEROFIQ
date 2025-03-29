import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
 
  return (
    <>
      <nav className="sticky top-0 font-roboto  z-50 bg-black text-white p-7 border-b-black">
        <div className="container flex justify-between items-center">

          <div className="flex items-center pl-20">
            <img className="h-10 w-25" src="/rescue.png" alt="Rescue" />
          </div>

          <div className="hidden md:flex items-center justify-between pr-20">
            <div className="mr-5">
            <span className="font-bold pr-5">0201 330 6046</span>
            <button className="bg-white text-black px-4 py-2 rounded-full">
              Download The App
            </button>
            </div>
            <div className="hidden pl-5 text-white md:flex items-center">
      <img className= "h-5 w-5" src="/menu.png" alt="menu"/>
        <span ClassName="material-icons">menu</span>
      </div>
          </div>


          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="text-2xl" />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center py-5 border-b border-gray-700">
            <span className="font-bold mb-4">0201 330 6046</span>
            <button className="bg-white text-black px-4 py-2 rounded-full mb-4">
              Download The App
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
