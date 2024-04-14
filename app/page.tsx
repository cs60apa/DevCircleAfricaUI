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
      <section className="pt-40 flex flex-row">
        <div className="mt-32 w-6/12 pl-20">
          <h2 className={` text-5xl pb-8 font-semibold`}>
            Empowering Educators to Transform Lives
          </h2>
          <p className="text-base pb-8 pr-20">
            A global network of independent organizations that recruit and train
            passionate individuals to commit two years to teach in high-need
            schools and to become lifelong leaders in the effort to expand
            educational opportunity.
          </p>
          <div className="flex flex-row space-x-6">
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
        <div className="px-8">
          <Image
            src="/headerImage.png"
            alt="hader image"
            height={700}
            width={500}
          />
        </div>
      </section>
      <section className="pl-20 mt-6 pb-8">
        <h5>Trusted By</h5>
        <ul
          className={`lg:flex ${
            showMenu ? "block" : "hidden"
          } items-center h-12 space-x-6`}
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
