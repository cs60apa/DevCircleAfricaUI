import React from 'react'

function About() {
  return (
    <div className='py-12 px-5 about flex flex-col justify-center'>
      <div className='flex flex-col items-center justify-center '>
        <h2 className='text-5xl py-6 font-semibold'>Who We Are</h2>
        <p className='text-sm pb-6'>An outdated website means you are not engaging your customers and driving sales. It's time to get unstuck</p>
      </div>
      <div className='flex flex-row py-4 space-x-12 justify-center pb-12'>
        <div className='border border-gray-700 hover:border-green-700 w-5/12 py-2 p-4 rounded-lg flex flex-col justify-center h-48 hover:h-40'>
          <h5  className='text-lg py-6'>NFT Marketplace Development</h5>
          <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid porro quia fugiat corporis omnis tenetur maxime magnam veniam soluta, debitis officiis non sunt ipsa autem dolores molestiae incidunt reiciendis nulla!</p>
        </div>
        <div className='border border-gray-700 hover:border-green-700  w-5/12 py-2 p-4 rounded-lg flex flex-col justify-center h-48 hover:h-40'>
          <h5  className='text-lg py-6'>Web Design and Development</h5>
          <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid porro quia fugiat corporis omnis tenetur maxime magnam veniam soluta, debitis officiis non sunt ipsa autem dolores molestiae incidunt reiciendis nulla!</p>
        </div>
      </div>
      <div className='flex flex-row py-4 space-x-12  justify-center'>
        <div className='border border-gray-700 hover:border-green-700 w-5/12 py-2 p-4 rounded-lg flex flex-col justify-center h-48 hover:h-40'>
          <h5  className='text-lg py-6'>Exchange Wallet Development</h5>
          <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid porro quia fugiat corporis omnis tenetur maxime magnam veniam soluta, debitis officiis non sunt ipsa autem dolores molestiae incidunt reiciendis nulla!</p>
        </div>
        <div className='border border-gray-700 hover:border-green-700 w-5/12 py-2 p-4 rounded-lg flex flex-col justify-center h-48 hover:h-40'>
          <h5  className='text-lg py-6'>Blockchain Development</h5>
          <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid porro quia fugiat corporis omnis tenetur maxime magnam veniam soluta, debitis officiis non sunt ipsa autem dolores molestiae incidunt reiciendis nulla!</p>
        </div>
      </div>
      <div className='flex flex-row justify-center py-6'>
      <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white   px-4 border border-green-500 hover:border-transparent rounded-full w-30 py-3 text-sm">
              Discover More
            </button>
      </div>
      
    </div>
  )
}

export default About