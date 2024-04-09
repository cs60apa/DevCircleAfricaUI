'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div>
      <nav className='flex items-center justify-between  p-8 absolute w-full'>
        <div className='flex items-center space-x-2 ml-12'>
          <Image 
            src='/logo.png'
            alt="logo"
            height={50}
            width={50}
          />
          <span className=''>DevCircle Africa</span>
        </div>

       <menu>
        <div className="block lg:hidden">
        <div onClick={toggleMenu} className='text-green-700 text-2xl'>
          {showMenu ?
            <AiOutlineClose />:
            <FaBars  />
            }
        </div>
        </div>

        <ul className={`lg:flex ${showMenu ? 'block' : 'hidden'} items-center space-x-6 text-sm mr-8`}>
          <li>
            <Link href='#' className='text-white'>Services</Link>
          </li>
          <li>
            <Link href='#' className='text-white'>Portifolio</Link>
          </li>
          <li>
            <Link href='#' className='text-white'>About Us</Link>
          </li>
          <li>
            <Link href='#' className='text-white '>Shop</Link>
          </li>
          <li>
            <Link href='#' className='text-white '>Careers</Link>
          </li>
          <li>
            <Link href='#' className='text-white '>Blog</Link>
          </li>
          <li>
            <Link href="#">
            <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-2 border border-green-500 hover:border-transparent rounded-full flex space-x-1">
            <Image
             src="/call-icon.png"
             alt="call icon"
             width={20}
             height={20} />
            <p>+919556307048</p>
            </button>
            </Link>
          </li>
        </ul>
       </menu>
       <div className="shape1 h-4 w-32 absolute bottom-0">

      </div>
      </nav>
      <div className="shape2 h-14 w-24 absolute top-0 left-80">

      </div>
      <div className="shape3 h-8 w-24 absolute top-0 right-64">

      </div>

      <section>
        {/* Other content */}
      </section>
    </div>
  );
};

export default Header;
