"use client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon } from "lucide-react";

import Link from "next/link";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiUser, FiShoppingBag } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-black shadow dark:bg-gray-800 h-80 bg-cover bg-center bg-[url('/tomato.png')]">
      <div className="container flex items-center justify-between px-6 py-3 mx-auto">
        {/* Logo */}
        <h2 className="text-white text-3xl title-font">
          Food<span className="text-orange-500">tuck</span>
        </h2>

        {/* Navbar Links */}
        <div className="hidden lg:flex space-x-6 text-white">
          <Link
            href="/homepage"
            className="transition-colors duration-300 transform rounded-lg hover:text-orange-500"
          >
            Home
          </Link>
          <Link
            href="/menu"
            className="transition-colors duration-300 transform rounded-lg hover:text-orange-500"
          >
            Menu
          </Link>
          <Link
            href="blog"
            className="transition-colors duration-300 transform rounded-lg hover:text-orange-500"
          >
            Blog
          </Link>
          <Link
            href="/chectoutpage"
            className="transition-colors duration-300 transform rounded-lg hover:text-orange-500"
          >
            Pages
          </Link>
          <Link href={"/about"}>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 transition-colors duration-300 transform rounded-lg hover:text-orange-500">
                <span>About</span>
                <ChevronDownIcon className="w-5 h-5" />
              </DropdownMenuTrigger>
            </DropdownMenu>
          </Link>
          <Link
            href="/shop"
            className="transition-colors duration-300 transform rounded-lg hover:text-orange-500"
          >
            Shop
          </Link>
          <Link
            href="/sigin"
            className="transition-colors duration-300 transform rounded-lg hover:text-orange-500"
          >
            Sign in
          </Link>
        </div>

        {/* Icons */}
        <div className="flex space-x-6 text-white">
          <CiSearch className="w-6 h-6 cursor-pointer hover:text-orange-500" />
          <FiUser className="w-6 h-6 cursor-pointer hover:text-orange-500" />
          <FiShoppingBag className="w-6 h-6 cursor-pointer hover:text-orange-500" />
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
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

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${
          isOpen ? "block" : "hidden"
        } bg-black text-white px-6 py-4`}
      >
        <Link href="/homepage" className="block py-2 hover:text-orange-500">
          Home
        </Link>
        <Link href="/menu" className="block py-2 hover:text-orange-500">
          Menu
        </Link>
        <Link href="blog" className="block py-2 hover:text-orange-500">
          Blog
        </Link>
        <Link href="/chectoutpage" className="block py-2 hover:text-orange-500">
          Pages
        </Link>
        <Link href={"/about"}>
          <DropdownMenu>
            <DropdownMenuTrigger className="block py-2 hover:text-orange-500">
              <span>About</span>
              <ChevronDownIcon className="w-5 h-5" />
            </DropdownMenuTrigger>
          </DropdownMenu>
        </Link>
        <Link href="/shop" className="block py-2 hover:text-orange-500">
          Shop
        </Link>
        <Link href="/sigin" className="block py-2 hover:text-orange-500">
          Sign in
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
