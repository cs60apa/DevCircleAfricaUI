"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <section className="lg:pt-10 pt-0 flex flex-row w-full pb-8">
        <div className="mt-10 lg:mt-32 w-full lg:w-6/12 px-0 lg:pl-20 lg:text-start text-center">
          <h2 className='text-3xl md:text-4xl lg:text-5xl pb-8 font-semibold w-full'>
            Empowering Educators to Transform Lives
          </h2>
          <p className="text-base pb-8 pr-0 lg:pr-20 px-0 md:px-20 lg:pl-0">
            A global network of independent organizations that recruit and train
            passionate individuals to commit two years to teach in high-need
            schools and to become lifelong leaders in the effort to expand
            educational opportunity.
          </p>
          <div className="flex flex-row space-x-6 w-full justify-center lg:justify-start">
            <button className="bg-green-800 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-full">
              Get Started
            </button>
            <button
              className="bg-transparent hover:bg-green-800 text-green-800 font-semibold hover:text-white py-3   
            px-4 border border-green-800 hover:border-transparent rounded-full"
            >
              View Our Portifolio
            </button>
          </div>
        </div>
        <div className="pl-8 hidden lg:block pr-0">
          <Image
            src="/headerImage.png"
            alt="hader image"
            height={700}
            width={500}
          />
        </div>
      </section>
      <section className="pl-20 mt-6 pb-8 hidden">
        <h5>Trusted By</h5>
        <ul
          className='flex  items-center h-12 space-x-6'
        >
          <li>
            <Link href="#">
              <Image src="/logo1.png" alt="logo" height={50} width={130} />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src="/logo2.png" alt="logo" height={50} width={130} />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src="/logo3.png" alt="logo" height={50} width={130} />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src="/logo4.png" alt="logo" height={50} width={150} />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src="/logo5.png" alt="logo" height={50} width={130} />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src="/logo.png" alt="logo" height={50} width={130} />
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Header;
