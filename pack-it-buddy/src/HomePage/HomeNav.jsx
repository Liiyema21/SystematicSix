import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PackitByddyLogo from '../assets/OurLogo.png';

const HomeNav = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);

  return (
    <nav className="flex justify-between items-center w-full h-20 px-4 text-white bg-white shadow-lg">
      <div>
        <Link to="/">
          <img
            src={PackitByddyLogo}
            alt="Our Logo"
            className="object-contain h-48 w-32 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] text-3xl mb-10"
          />
        </Link>
      </div>

      <ul className="hidden md:flex">
        <li>
          <Link
            className="px-2 font-bold cursor-pointer capitalize text-gray-800 hover:scale-105 duration-200"
            to="/SignUpFormDriver"
          >
            Become a driver
          </Link>
        </li>
        <li className="relative group">
                    <label
                        className="px-4 cursor-pointer capitalize font-bold text-gray-800 hover:scale-105 duration-200"
                    >
                        Services
                    </label>
                    <ul className="absolute left-0 mt-2 w-48 bg-white text-gray-700 opacity-0 group-hover:opacity-100 group-hover:block hidden transition-opacity duration-200 z-50">
                        <li className="px-4 py-2 hover:bg-gray-200 shadow-sm">
                            <Link to="/">Local Moving</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-200 shadow-sm">
                            <Link to="/">International Moving</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-200 shadow-sm">
                            <Link to="/">Packing Services</Link>
                        </li> <li className="px-4 py-2 hover:bg-gray-200 shadow-sm">
                            <Link to="/"> Office Move</Link>
                        </li> <li className="px-4 py-2 hover:bg-gray-200 shadow-sm">
                            <Link to="/"> Business Moving</Link>
                        </li>
                        
                    </ul>
                </li>

        <li className="relative group">
                    <label
                        className="px-4 cursor-pointer capitalize font-bold text-gray-800 hover:scale-105 duration-200"
                    >
                        About
                    </label>
                    <ul className="absolute left-0 mt-2 w-48 bg-white text-gray-700 opacity-0 group-hover:opacity-100 group-hover:block hidden transition-opacity duration-200 z-50">
                        <li className="px-4 py-2 hover:bg-gray-200 shadow-sm">
                            <Link to="/">Our Story</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-200 shadow-sm">
                            <Link to="/">Team</Link>
                        </li>
                    </ul>
                </li>

                <li className="relative group">
                    <label
                        className="px-4 cursor-pointer capitalize font-bold text-gray-800 hover:scale-105 duration-200"
                    >
                        Contact
                    </label>
                    <ul className="absolute left-0 mt-2 w-48 bg-white text-gray-700 opacity-0 group-hover:opacity-100 group-hover:block hidden transition-opacity duration-200 z-50">
                        <li className="px-4 py-2 hover:bg-gray-200 shadow-sm">
                            <Link to="/">Location</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-200 shadow-sm">
                            <Link to="/">Support</Link>
                        </li>
                    </ul>
                </li>


        <label className="nav-item text-white">
          <Link className='bg-[#131a4b] font-bold px-4 rounded-md py-2' to='/SignUpFormClient'>
            Sign In
          </Link>
        </label>
      </ul>

      <div
        onClick={toggleNav}
        className="cursor-pointer pr-4 z-20 text-gray-500 md:hidden"
        aria-label="Toggle navigation menu"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <div
          className="fixed top-0 left-0 w-full h-1/3 bg-slate-50 text-gray-500 z-50 flex flex-col"
          style={{ 
            transform: `translateY(${nav ? '0' : '-100%'})`,
            transition: 'transform 0.3s ease-in-out'
          }}
        >
          <div
            onClick={toggleNav}
            className="flex justify-end p-4 cursor-pointer text-gray-500"
            aria-label="Close navigation menu"
          >
            <FaTimes size={30} />
          </div>
          <ul className="flex items-center justify-center flex-grow">
            <li className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] 
             px-4 hover:text-[#131a4b] cursor-pointer capitalize py-6 text-2xl hover:underline">
              <Link onClick={toggleNav} to="/SignUpFormDriver">Become a driver</Link>
            </li>
            <li className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] 
             px-4 hover:text-[#131a4b] cursor-pointer capitalize py-6 text-2xl hover:underline">
              <Link onClick={toggleNav} to="/Reviews">Services</Link>
            </li>
            <li className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] 
             px-4 hover:text-[#131a4b] cursor-pointer capitalize py-6 text-2xl hover:underline">
              <Link onClick={toggleNav} to="/SupportPage">About</Link>
            </li>
            <li className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]
             hover:text-[#131a4b] px-4 cursor-pointer capitalize py-6 text-2xl hover:underline">
              <Link onClick={toggleNav} to="/Deals">Contacts</Link>
            </li>
            <label className="nav-item text-white">
          <Link className='bg-[#131a4b] font-bold px-4 rounded-md py-2' to='/SignUpFormClient'>
            Sign In
          </Link>
        </label>

          </ul>
        </div>
      )}
    </nav>
  );
};

export default HomeNav;
