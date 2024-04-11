'use client'
import React from 'react'
import Image from 'next/image'
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <div className='flex flex-row space-x-8 py-12 px-12 '>
        <div className='flex flex-col w-4/12 space-y-3 ml-8'>
          <Link href="#" className='pb-2'>
            <Image 
              src='/logo.png'
              alt="logo"
              height={50}
              width={130}
            />
          </Link>
          <p className='text-sm ml-1 w-4/5 pr-2 pb-3'>Lorem ipsum dolor, sit amet consectetur adipiscing elit, nulla</p>
          <h6 className='text-xl ml-1'>Follow Us</h6>
          <div className='flex text-blue-700 space-x-4 ml-1'>
            <Link href="#" >
              <FaFacebook size={24}  />
            </Link>
            <Link href="#">
              <FaTwitter size={24}  />
            </Link>
            <Link href="#">
              <FaLinkedin size={24} />
            </Link>
          </div>
        </div>
        <div className='flex flex-col w-64 space-y-2 ml-12'>
          <h5 className='font-bold pb-3'>Quick Link</h5>
          <ul className='text-sm flex flex-col space-y-4'>
            <li>
              <Link href="Services">Services</Link>
            </li>
            <li>
              <Link href="#">Portifolio</Link>
            </li>
            <li>
              <Link href="#">Shop</Link>
            </li>
            <li>
              <Link href="#">Careers</Link>
            </li>
          </ul>
      </div>
      <div className='flex flex-col w-64 space-y-2'>
          <h5 className='font-bold pb-3'>Company</h5>
          <ul className='text-sm flex flex-col space-y-4'>
            <li>
              <Link href="#">News and Blogs</Link>
            </li>
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">FAQ</Link>
            </li>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Terms & Conditions</Link>
            </li>
          </ul>
      </div>
      <div className='flex flex-col w-64 space-y-2'>
          <h5 className='font-bold pb-3'>Support</h5>
          <ul className='text-sm flex flex-col space-y-4'>
            <li>
              <Link href="#">Customer Support</Link>
            </li>
            <li>
              <Link href="#">Contact Us</Link>
            </li>
            <li>
              <Link href="#">Live Chat</Link>
            </li>
          </ul>
      </div>
      </div>
      <div className='copyright h-12 p-2 flex justify-center items-center'>
        <p className='text-sm'>Copyright 2024 loremipsum - All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer