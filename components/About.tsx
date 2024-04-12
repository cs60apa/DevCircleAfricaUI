import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <div className='py-12 px-5 about flex flex-col justify-center'>
      <div className='flex flex-col items-center justify-center '>
        <h2 className='text-5xl py-6 font-semibold'>Who We Are</h2>
        <p className='text-sm pb-6'>An outdated website means you are not engaging your customers and driving sales. It's time to get unstuck</p>
      </div>
      <div className='flex flex-row py-4 space-x-12 justify-center pb-12 relative'>
        <div className='parent-div border border-gray-700 hover:border-green-800 w-5/12 py-2 p-4 rounded-lg flex flex-col justify-center h-48 hover:h-40 mt-3'>
          <Image
          src="/nftIcon.png"
          alt="front end icon"
          height={60}
          width={50}
          className='absolute top-0'/>
          <Image
          src="/nftIcon1.png"
          alt="front end icon"
          height={60}
          width={50}
          className='absolute top-0 opacity-0 transition-opacity duration-300'/>
          <h5  className='text-lg py-6'>NFT Marketplace Development</h5>
          <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid porro quia fugiat corporis omnis tenetur maxime magnam veniam soluta, debitis officiis non sunt ipsa autem dolores molestiae incidunt reiciendis nulla!</p>
        </div>
        <div className=' parent-div border border-gray-700 hover:border-green-800  w-5/12 py-2 p-4 rounded-lg flex flex-col justify-center h-48 hover:h-40 mt-3'>
        <Image
          src="/frontendIcon.png"
          alt="front end icon"
          height={60}
          width={50}
          className='absolute top-0'/>
          <Image
          src="/frontendIcon1.png"
          alt="front end icon"
          height={60}
          width={50}
          className='absolute top-0 opacity-0 transition-opacity duration-300'/>
          <h5  className='text-lg py-6'>Web Design and Development</h5>
          <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid porro quia fugiat corporis omnis tenetur maxime magnam veniam soluta, debitis officiis non sunt ipsa autem dolores molestiae incidunt reiciendis nulla!</p>
        </div>
      </div>
      <div className='flex flex-row py-4 space-x-12  justify-center relative'>
        <div className=' parent-div border border-gray-700 hover:border-green-800 w-5/12 py-2 p-4 rounded-lg flex flex-col justify-center h-48 hover:h-40 mt-3'>
        <Image
          src="/exchangewalletIcon.png"
          alt="front end icon"
          height={60}
          width={50}
          className='absolute top-0 '/>
          <Image
          src="/exchangewalletIcon1.png"
          alt="front end icon"
          height={60}
          width={50}
          className='absolute top-0 opacity-0 transition-opacity duration-300'/>
          <h5  className='text-lg py-6'>Exchange Wallet Development</h5>
          <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid porro quia fugiat corporis omnis tenetur maxime magnam veniam soluta, debitis officiis non sunt ipsa autem dolores molestiae incidunt reiciendis nulla!</p>
        </div>
        <div className='parent-div border border-gray-700 hover:border-green-800 w-5/12 py-2 p-4 rounded-lg flex flex-col justify-center h-48 hover:h-40 mt-3 hover:border-1.5'>
        <Image
          src="/blockchainIcon.png"
          alt="front end icon"
          height={60}
          width={50}
          className='absolute top-0'/>
          <Image
          src="/blockchainIcon1.png"
          alt="front end icon"
          height={60}
          width={50}
          className='absolute top-0 opacity-0 transition-opacity duration-300'/>
          <h5  className='text-lg py-6'>Blockchain Development</h5>
          <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid porro quia fugiat corporis omnis tenetur maxime magnam veniam soluta, debitis officiis non sunt ipsa autem dolores molestiae incidunt reiciendis nulla!</p>
        </div>
      </div>
      <div className='flex flex-row justify-center py-6'>
      <button className="bg-transparent hover:bg-green-800 text-green-800 font-semibold hover:text-white   px-4 border border-green-500 hover:border-transparent rounded-full w-30 py-3 text-sm">
              Discover More
            </button>
      </div>
    </div>
  )
}

export default About