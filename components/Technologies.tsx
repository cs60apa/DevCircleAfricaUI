import React from 'react'
import Image from 'next/image'
import {FaApple, FaAndroid, FaReact, FaPython} from 'react-icons/fa'
import { SiFlutter } from "react-icons/si";

function Technologies() {
  return (
    <div className='py-12  flex flex-col justify-center'>
      <div className='flex flex-col items-center justify-center pb-6'>
        <h2 className='text-5xl py-6 font-semibold'>Technologies we work with</h2>
        <p className='text-sm pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugit maiores</p>
      </div>
      <div className='flex flex-row pl-20 space-x-12 pr-20 w-full'>
        <div className='flex flex-col space-y-4 flex-grow w-full'>
        <div className='p-12 greye rounded-xl mb-6 h-86'>
          <Image 
            src='/techImage3.png'
            alt='image'
            height={200}
            width={100}
            className='w-full h-64'
            
          />
        </div>

        <div className='flex flex-row space-x-2 mt-6 items-center h-4'>
            <Image
            src='/nftLogo.png'
            alt='nft logo'
            height={25}
            width={25}
             />
          <p className=' text-sm'>NFT Development</p>
        </div>
        <div className="border-t-2 border-green-800 h-2"></div>
        <div className='flex flex-row space-x-2 mt-6 items-center h-4'>
            <Image
            src='/frontendIcon3.png'
            alt='nft logo'
            height={25}
            width={25} 
             />
          <p className=' text-sm'>Front End</p>
        </div>
        <div className="border-t-2 border-gray-500 h-2 w-16"></div>
        <div className='flex flex-row space-x-2 items-center h-4'>
            <Image
            src='/blockchainLogo.png'
            alt='nft logo'
            height={20}
            width={20} 
             />
          <p className=' text-sm'>Blockchain</p>
        </div>
        <div className="border-t-2 border-gray-500 h-2 w-16"></div>
        <div className='flex flex-row space-x-2 mt-6 items-center h-4'>
            <Image
            src='/smartContractIcon.png'
            alt='nft logo'
            height={22}
            width={22} 
             />
          <p className=' text-sm'>smart contract development</p>
        </div>
        <div className="border-t-2 border-gray-500 h-2 w-16"></div>
        <button className="bg-transparent hover:bg-green-800 text-green-800 font-semibold hover:text-white   px-4 border border-green-500 hover:border-transparent rounded-full w-32 py-3 text-sm">
              Contact Us
            </button>
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