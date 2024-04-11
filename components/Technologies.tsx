import React from 'react'
import Image from 'next/image'
import {FaApple, FaAndroid, FaReact, FaPython} from 'react-icons/fa'
import { SiFlutter } from "react-icons/si";

function Technologies() {
  return (
    <div className='py-12 px-5 flex flex-col justify-center'>
      <div className='flex flex-col items-center justify-center pb-6'>
        <h2 className='text-5xl py-6 font-semibold'>Technologies we work with</h2>
        <p className='text-sm pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugit maiores</p>
      </div>
      <div className='flex flex-row ml-20 space-x-12 mr-20'>
        <div className='flex flex-col space-y-4  w-full'>
        <div className='p-8 greye rounded-xl'>
          <Image 
            src='/techImage3.png'
            alt='image'
            height={1200}  
            width={900}    
          />
        </div>

        </div>
        <div className='greye rounded-xl flex flex-col space-y-3 p-4'>
          <div className='flex flex-row p-4 items-start justify-start space-x-4'>
            <div className='pt-1'>
              <FaApple size={40} />
            </div>
            <div className='pt-2'>
              <h5 className='text-2xl font-bold'>iOS</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
          </div>
          <div className='flex flex-row  p-4 items-start justify-start space-x-3'>
            <div className='text-green-700'>
            <FaAndroid size={35} />
            </div>
            <div>
              <h5 className='text-2xl font-bold'>Adroid</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
          </div>
          <div className='flex flex-row  p-4 items-start justify-start space-x-3'>
           <div className='text-blue-700 pt-2'>
             <SiFlutter size={35} />
           </div>
            <div className='pt-2'>
              <h5 className='text-2xl font-bold'>Flutter</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
          </div>
          <div className='flex flex-row  p-4 items-start justify-start space-x-3'>
           <div className='text-blue-700 pt-2'>
             <FaReact size={35} />
           </div>
            <div className='pt-2'>
              <h5 className='text-2xl font-bold'>React</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
          </div>
          <div className='flex flex-row  p-4 items-start justify-start space-x-3'>
           <div className='text-blue-700 pt-2'>
             <FaPython size={35} />
           </div>
            <div className='pt-2'>
              <h5 className='text-2xl font-bold'>Python</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technologies