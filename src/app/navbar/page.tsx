"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon } from "lucide-react";

import Link from "next/link";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="relative bg-black shadow dark:bg-gray-800">
        <h2 className="text-white text-3xl text-center title-font pt-5 ">
          <span className="text-orange-500 ">Food</span>tuck
        </h2>
        <div className="container px-6 bg-black py-3 mx-auto md:flex">
          {/* Mobile menu button */}
          <div className="flex lg:hidden bg-black">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu open: "block", Menu closed: "hidden" */}
        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out  dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between ${
            isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
          }`}
        >
          <div className="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0 text-white bg-black">
            <Link
              href="/homepage"
              className="px-2.5 py-2  transition-colors duration-300 transform rounded-lg  hover:bg-orange-500 md:mx-2"
            >
              Home
            </Link>
            <Link
              href="/ourchef"
              className="px-2.5 py-2 0 transition-colors duration-300 transform rounded-lg  hover:bg-orange-500  md:mx-2"
            >
              Menu
            </Link>
            <Link
              href="#"
              className="px-2.5 py-2  transition-colors duration-300 transform rounded-lg  hover:bg-orange-500 md:mx-2"
            >
              Blog
            </Link>
            <Link
              href="/chectoutpage"
              className="px-2.5 py-2  transition-colors duration-300 transform rounded-lg 0 hover:bg-orange-500  md:mx-2"
            >
              Pages
            </Link>

            <Link
              href="/ourchef"
              className="px-2.5 py-2   transition-colors duration-300  rounded-lg   hover:bg-orange-500 md:mx-2"
            >
              {" "}
              <DropdownMenu>
                <DropdownMenuTrigger>
                  About <ChevronDownIcon className="w-5 h-5 inline-flex" />
                </DropdownMenuTrigger>
              </DropdownMenu>
            </Link>

            <Link
              href="/shop"
              className="px-2.5 py-2 text-white transition-colors duration-300 transform rounded-lg  hover:bg-orange-500 md:mx-2"
            >
              Shop
            </Link>
            <Link
              href="#"
              className="px-2.5 py-2  transition-colors duration-300 transform rounded-lg  hover:bg-orange-500  md:mx-2"
            >
              Contact
            </Link>
          </div>

          <div className="relative mt-4 md:mt-0 mr-14">
            <input
              type="text"
              className="w-full py-2 pl-3 pr-4 text-white bg-black border rounded-3xl  dark:border-[FF9F0D] focus:border-orange-400 dark:focus:border-orange-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-orange-500"
              placeholder="Search..."
            />
            <span className="absolute inset-y-0 left-0 flex items-center pl-44">
              <CiSearch className="w-6 h-6 text-white" />
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
