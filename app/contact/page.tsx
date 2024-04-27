'use client'
import React from 'react'
import Image from 'next/image'
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { LuAtSign } from "react-icons/lu";
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const page = () => {
  return (
    <div className='container flex flex-col lg:flex-row mt-20 w-full p-4 mx-2 lg:mx-20 lg:w-5/6 bg-slate-800 rounded-3xl lg:p-8 justify-center'>
      <div className='w-full lg:w-2/5 p-4 pt-0 px-4 lg:px-8'>
        <h5 className='font-semibold text-center pb-2 text-3xl'>Get In Touch</h5>
        <p className='text-center pb-2'>We are here for you. How can we help you?</p>
        
        <div className='mt-4 flex flex-col'>
          <label htmlFor="" className='pb-1'>Full Name*</label>
          <input type="text" placeholder="Full Name" className='input-field h-10 p-2 rounded-lg bg-slate-600 border-none focus:outline-none'/>
        </div>
        
        <div className='mt-4 flex flex-col'>
          <label htmlFor="" className='pb-1'>Email*</label>
          <input type="email" placeholder="Email" className='input-field h-10 p-2 rounded-lg bg-slate-600 border-none focus:outline-none'/>
        </div>
        
        <div className='mt-4 flex flex-col'>
          <label htmlFor="" className='pb-1'>Subject</label>
          <input type="text" placeholder="Subject" className='input-field h-10 p-2 rounded-lg bg-slate-600 border-none focus:outline-none'/>
        </div>
        
        <div className='mt-4 flex flex-col'>
          <label htmlFor="" className='pb-1'>Your Message (optional)</label>
          <textarea name="message" id="message" placeholder="Your Message (optional)" cols={30} rows={5} className='input-field p-2 rounded-lg bg-slate-600 resize-none focus:border-noneborder-none focus:outline-none'></textarea>
        </div>
        <button className="bg-green-800 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-xl w-full mt-3">
              Request service
            </button>
      </div>
      
      <div className='w-full lg:w-6/12 px-4 lg:px-8'>
        <Image
          src='/customerService.jpeg'
          alt=''
          height={300}
          width={350}
          className='rounded-2xl h-80 w-full mb-8'
        />
        
        <div className='flex items-center mt-4 mb-4'>
          <IoLocationOutline className='text-green-700 p-2 rounded-lg bg-slate-600 h-10 w-10'/>
          <p className='text-sm ml-4'>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
        </div>

        <div className='flex items-center mt-4 mb-4'>
          <FiPhoneCall className='text-green-700 p-2 rounded-lg bg-slate-600 h-10 w-10'/>
          <p className='text-sm ml-4'>+919556307048</p>
        </div>

        <div className='flex items-center mt-4 mb-4'>
          <LuAtSign className='text-green-700 p-2 rounded-lg bg-slate-600 h-11 w-10'/>
          <p className='text-sm ml-4'>davidpromisejiri@example.com</p>
        </div>
        <div className="flex text-green-700 space-x-4 ml-1 p-3 rounded bg-slate-600 mt-3 h-18">
            <Link href="https://facebook.com/devcircleafrica">
              <FaFacebook size={24} />
            </Link>
            <Link href="https://github.com/cs60apa">
              <FaGithub size={24} />
            </Link>
            <Link href="https://linkedin.com/company/devcircleafrica">
              <FaLinkedin size={24} />
            </Link>
          </div>
      </div>
    </div>
  );
};


export default page