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
      <nav className="flex items-center justify-between  p-8 absolute w-full">
        <div className=" ml-12">
          <Link href="/">
            <Image src="/2.svg" alt="logo" height={450} width={200} />
          </Link>
        </div>

        <menu>
          <div className="block lg:hidden">
            <div onClick={toggleMenu} className="text-green-700 text-2xl">
              {showMenu ? <AiOutlineClose /> : <FaBars />}
            </div>
          </div>

          <ul
            className={`lg:flex ${
              showMenu ? "block" : "hidden"
            } items-center space-x-6 text-sm mr-8`}
          >
            <li>
              <Link href="features" className="text-white text-lg">
                Features
              </Link>
            </li>
            <li>
              <Link href="services" className="text-white text-lg">
                Services
              </Link>
            </li>
            <li>
              <Link href="pricing" className="text-white text-lg">
                Princing
              </Link>
            </li>

            <li>
              <Link href="career" className="text-white text-lg ">
                Careers
              </Link>
            </li>
            <li>
              <Link href="tel:+919556307048">
                <button
                  className="bg-transparent hover:bg-green-800 text-green-800 font-semibold hover:text-white
                 py-3 px-2 border border-green-800 hover:border-transparent rounded-full flex space-x-1"
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
