import React from "react";
import Image from "next/image";
import { FaApple, FaAndroid, FaReact, FaPython } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";

function Works() {
  return (
    <div className="py-12  flex flex-col justify-center">
      <div className="flex flex-col items-center justify-center pb-6 pl-20 pr-20">
        <h2 className="text-5xl py-6 mt-20 font-semibold">Recent Works</h2>
        <div className="text-sm pb-12 flex w-full space-x-4 justify-center items-center">
          <div className="flex flex-row space-x-2">
            <Image src="/frontendIcon3.png" alt="icon" height={25} width={25} />
            <p>All Work</p>
          </div>
          <div className="flex flex-row space-x-2">
            <Image src="/frontendIcon3.png" alt="icon" height={25} width={25} />
            <p>Website</p>
          </div>
          <div className="flex flex-row space-x-2">
            <Image src="/frontendIcon3.png" alt="icon" height={25} width={25} />
            <p>Mobile App</p>
          </div>
          <div className="flex flex-row space-x-2">
            <Image src="/frontendIcon3.png" alt="icon" height={25} width={25} />
            <p>Software Development</p>
          </div>
        </div>

        <div className="flex flex-row space-x-8 pb-8">
          <div className="bg-gray-800 rounded-xl p-4 hover:border hover:border-green-800 ">
            <Image
              src="/niftImage.jpeg"
              alt="icon"
              height={100}
              width={300}
              className="rounded-lg h-52"
            />
            <h5 className="text-xl pt-4 pb-3 p-0">
              NFT Marketplace Development
            </h5>
            <p className="text-sm p-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              porro quia fugiat corporis omnis tenetur maxime magnam veniam
              soluta,
            </p>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 hover:border hover:border-green-800 ">
            <Image
              src="/realEstateImage.jpg"
              alt="icon"
              height={100}
              width={250}
              className="rounded-lg w-full h-52"
            />
            <h5 className="text-xl pt-4 pb-3 p-0">Real Estate Website</h5>
            <p className="text-sm p-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              porro quia fugiat corporis omnis tenetur maxime magnam veniam
              soluta,
            </p>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 hover:border hover:border-green-800 ">
            <Image
              src="/carMarketPageImage.jpeg"
              alt="icon"
              height={100}
              width={300}
              className="rounded-lg h-52"
            />
            <h5 className="text-xl pt-4 pb-3 p-0">
              Car Marketplace Landing Page
            </h5>
            <p className="text-sm p-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              porro quia fugiat corporis omnis tenetur maxime magnam veniam
              soluta,
            </p>
          </div>
        </div>

        <div className="flex flex-row space-x-8 pb-8">
          <div className="bg-gray-800 rounded-xl p-4 hover:border hover:border-green-800 ">
            <Image
              src="/restaurantSiteImage.jpeg"
              alt="icon"
              height={100}
              width={300}
              className="rounded-lg h-52"
            />
            <h5 className="text-xl pt-4 pb-3 p-0">
              Restaurant Responsive Website
            </h5>
            <p className="text-sm p-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              porro quia fugiat corporis omnis tenetur maxime magnam veniam
              soluta,
            </p>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 hover:border hover:border-green-800 ">
            <Image
              src="/financeAppDesignImage.jpeg"
              alt="icon"
              height={100}
              width={250}
              className="rounded-lg w-full h-52"
            />
            <h5 className="text-xl pt-4 pb-3 p-0">Finance App Design</h5>
            <p className="text-sm p-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              porro quia fugiat corporis omnis tenetur maxime magnam veniam
              soluta,
            </p>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 hover:border hover:border-green-800 ">
            <Image
              src="/responsiveNftImage.png"
              alt="icon"
              height={100}
              width={300}
              className="rounded-lg h-52"
            />
            <h5 className="text-xl pt-4 pb-3 p-0">
              Responsive NFT Marketplace
            </h5>
            <p className="text-sm p-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              porro quia fugiat corporis omnis tenetur maxime magnam veniam
              soluta,
            </p>
          </div>
        </div>
        <button className="bg-transparent hover:bg-green-800 text-green-800 font-semibold hover:text-white   px-4 border border-green-500 hover:border-transparent rounded-full w-40 py-3 text-sm">
          View Our Portifolio
        </button>
      </div>
    </div>
  );
}

export default Works;
