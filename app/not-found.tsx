"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-white">
      <div className="text-center">
        <h1 className="text-6xl text-black font-bold">404</h1>
        <p className="text-4xl text-black mt-4">
          Oops! The page you are looking for does not exist.
        </p>
        <p className="text-2xl text-black mt-2">
          You may have mistyped the address or the page may have moved.
        </p>
      </div>
      <div className="mt-8">
        <button className="mt-4 px-4 py-2 bg-[#ED7133] hover:bg-black text-white  rounded-full">
          <Link className=" text-white" href="/">Go Home</Link>
        </button>
      </div>
    </div>
  );
}