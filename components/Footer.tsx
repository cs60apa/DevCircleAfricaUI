"use client";
import React from "react";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-row py-12 flex-wrap lg:ml-12 px-4">
        <div className="flex flex-col w-4/12 space-y-3 ml-4 mb-4">
          <Link href="#" className="pb-2">
            <Image src="/2.svg" alt="logo" height={150} width={200}/>
          </Link>
          <p className="text-base ml-1 w-4/5 pr-2 pb-3 hidden md:block">
            An international alliance of autonomous organizations dedicated to
            enlisting and educating
          </p>
          <h6 className="text-xl pt-6 lg:pt-0 pb-2 ml-2">Follow Us</h6>
          <div className="flex text-orange-600 space-x-4 ml-1">
            <Link href="https://facebook.com/devcircleafrica">
              <FaFacebook size={24} />
            </Link>
            <Link href="https://github.com/cs60apa">
              <FaGithub size={24} />
            </Link>
            <Link href="https://linkedin.com/company/devcircleafrica">
              <FaLinkedin size={24} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-32 lg:w-60 ml-12 md:w-48 mb-4">
          <h5 className="font-bold pb-3 text-xl">Quick Link</h5>
          <ul className="text-sm md:text-lg flex flex-col space-y-4">
            <li>
              <Link href="Services">Services</Link>
            </li>
            <li>
              <Link href="#">Portifolio</Link>
            </li>
            <li>
              <Link href="#">Shop</Link>
            </li>
            <li>
              <Link href="#">Careers</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-32 lg:w-60 md:w-48 mb-4 ml-8 md:ml-0 pt-2">
          <h5 className="font-bold pb-3 text-xl">Company</h5>
          <ul className="text-sm md:text-lg flex flex-col space-y-4">
            <li>
              <Link href="#">News and Blogs</Link>
            </li>
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">FAQ</Link>
            </li>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-32 md:w-48 ml-6 pt-2 lg:ml-0">
          <h5 className="font-bold pb-3 text-xl">Support</h5>
          <ul className="text-sm md:text-lg flex flex-col space-y-4">
            <li>
              <Link href="#">Customer Support</Link>
            </li>
            <li>
              <Link href="#">Contact Us</Link>
            </li>
            <li>
              <Link href="#">Live Chat</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright h-12 p-2 flex justify-center items-center">
        <p className="text-base">
          <span>&copy; {new Date().getFullYear()} DevCircle Africa</span> - All
          Rights Reserved{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
