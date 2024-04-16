"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { notoSerif, jost } from "./ui/fonts";

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
      <nav className="flex lg:items-center justify-between py-0 lg:py-4 w-full">
        <div className="ml-4 sm:ml-12 py-8 lg:py-0 ">
          <Link href="/">
            <Image src="/2.svg" alt="logo" height={450} width={200} />
          </Link>
        </div>

        <menu className="py-7 lg:py-0 flex flex-col lg:flex-row justify-center space-y-3">
          <div className="block lg:hidden px-6">
            <div onClick={toggleMenu} className="text-green-700 text-3xl pl-12 w-24">
              {showMenu ? <AiOutlineClose /> : <FaBars />}
            </div>
          </div>

          <ul
            className={`lg:flex ${
              showMenu ? "block" : "hidden"
            } items-center flex-col lg:flex-row justify-start lg:p-0  mr-0 lg:mr-8  lg:bg-transparent lg:space-x-2 `}
          >
            <li className="w-full px-4 py-1 ">
              <Link href="features" className="text-white text-lg hover:text-gray-300">
                Features
              </Link>
            </li>
            <li className="w-full px-4 py-1 ">
              <Link href="services" className="text-white text-lg hover:text-gray-300">
                Services
              </Link>
            </li>
            <li className="w-full px-4 py-1 ">
              <Link href="pricing" className="text-white text-lg hover:text-gray-300">
                Princing
              </Link>
            </li>

            <li className="w-full px-4 py-1 ">
              <Link href="career" className="text-white text-lg hover:text-gray-300">
                Careers
              </Link>
            </li>
            <li className="hidden lg:flex ">
              <Link href="tel:+919556307048">
                <button
                  className="bg-transparent hover:bg-green-800 text-green-800 font-semibold hover:text-white
                 py-3 px-2 border border-green-800 hover:border-transparent rounded-full flex space-x-1 text-lg w-44 justify-center items-center" 
                >
                  <Image
                    src="/call-icon.png"
                    alt="call icon"
                    width={20}
                    height={20}
                  />
                  919556307048
                </button>
              </Link>
            </li>
          </ul>
        </menu>
      </nav>
    </>
  );
};

export default Header;
