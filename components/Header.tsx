'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { notoSerif, jost } from './ui/fonts';

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
    <>
      <nav className='flex items-center justify-between  p-8 absolute w-full'>
        <div className=' ml-12'>
          <Link href="#">
            <Image 
              src='/logo.png'
              alt="logo"
              height={400}
              width={150}
            />
          </Link>
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
      <div className="shape2 h-14 w-24 absolute top-0 left-80">
      </div>
      <div className="shape3 h-8 w-24 absolute top-0 right-64">
      </div>
      </nav>

      <section className='pt-40 flex flex-row'>
        <div className='mt-32 w-6/12 pl-20'>
          <h2 className={` text-5xl pb-8 font-semibold`}>A 360 Degree solution for your NFT Business</h2>
          <p className='text-sm pb-8 pr-20'>logoipsum is a sofware design and engineering partner that hepls you build succesful tech product</p>
          <div className='flex flex-row space-x-6'>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
              Get Started
            </button>
            <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2   px-4 border border-green-500 hover:border-transparent rounded-full">
              View Our Portifolio
            </button>
          </div>
        </div>
        <div className='px-8'>
          <Image 
            src='/headerImage.png'
            alt='hader image'
            height={700}
            width={500}
          />
        </div>
      </section>
      <section className='pl-20 mt-6 pb-8'>
        <h5>Trusted By</h5>
        <ul className={`lg:flex ${showMenu ? 'block' : 'hidden'} items-center h-12 space-x-6`}>
        <li>
            <Link href='#'>
              <Image 
              src='/logo1.png'
              alt="logo"
              height={50}
              width={130}
            />
            </Link>
          </li>
          <li>
            <Link href='#'>
              <Image 
              src='/logo2.png'
              alt="logo"
              height={50}
              width={130}
            />
            </Link>
          </li>
          <li>
            <Link href='#'>
              <Image 
              src='/logo3.png'
              alt="logo"
              height={50}
              width={130}
            />
            </Link>
          </li>
          <li>
            <Link href='#'>
              <Image 
              src='/logo4.png'
              alt="logo"
              height={50}
              width={150}
            />
            </Link>
          </li>
          <li>
            <Link href='#'>
              <Image 
              src='/logo5.png'
              alt="logo"
              height={50}
              width={130}
            />
            </Link>
          </li>
          <li>
            <Link href='#'>
              <Image 
              src='/logo.png'
              alt="logo"
              height={50}
              width={130}
            />
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Header;
