import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io";

function page() {
  return (
    <div className='container flex mt-12 w-full mx-2 lg:mx-20 lg:w-5/6 lg:p-8 justify-center items-center lg:space-x-8'>
      <div className='w-11/12 md:w-2/5 py-4 text-center lg:text-start flex flex-col justify-center items-center lg:items-start'>
        <h1 className='text-5xl pb-8 font-semibold'>Join Our Team</h1>
        <p className='text-base pb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iusto optio qui rerum provident quasi ullam impedit commodi recusandae illum cumque fuga, perferendis labore expedita neque cupiditate officia delectus nostrum?</p>
        <Link href="#">
        <div className="flex items-center border-b-2 border-green-700 w-40">
          <p className='mr-2'>View Job Openings</p>
          <IoIosArrowForward className="text-green-700" />
        </div>
        </Link>
      </div>
      <div className='hidden md:flex'>
        <Image 
        src="/careers.png"
        height={200}
        width={500}
        alt='careers image'
        />
      </div>
    </div>
  )
}

export default page