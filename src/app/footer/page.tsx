import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div>

<div className="flex flex-col md:flex-row items-center justify-between bg-black p-6 md:p-12 gap-6">
            {/* Left Side: Heading and Paragraph */}
            <div className="flex flex-col md:w-1/2 text-center md:text-left">
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4"><span className='text-orange-500'>St</span>ill You Need Our Support ?</h2>
                <p className="text-white text-sm md:text-base leading-relaxed">
                Don’t wait make a smart & logical quote here. Its pretty easy.
                </p>
            </div>

            {/* Right Side: Input and Button */}
            <div className="flex md:w-1/2 justify-center md:justify-end">
                <div className="flex items-center w-full max-w-md">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-grow p-3 rounded-l-lg bg-orange-500 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-600"
                    />
                    <button className="bg-white text-orange-500 px-6 py-3 rounded-r-lg hover:bg-orange-900">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>


<footer className="text-white body-font bg-black">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center ">
       
        <span className="ml-3 text-xl">About Us.</span>
      </a>
      <p className="mt-2 text-sm ">
      orporate clients and leisure travelers has
been relying on Groundlink for dependab
safe, and professional chauffeured car
service in major cities across World.
      </p>
      <br/><br/>
<div className='inline-flex'>      <Image 
      src={'/Watch.png'}
      alt='watch'
      height={100}
      width={100} />
      <h1 className='inline-flex pl-5'>Opening Houres
Mon - Sat(8.00 - 6.00)
Sunday - Closed</h1></div>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium  tracking-widest text-sm mb-3">
          Useful Links
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className=" hover:text-gray-800">About</a>
          </li>
          <li>
            <a className=" hover:text-gray-800">News</a>
          </li>
          <li>
            <a className=" hover:text-gray-800">patners</a>
          </li>
          <li>
            <a className=" hover:text-gray-800">Team</a>
          </li>
          <li>
            <a className=" hover:text-gray-800">Meny</a>
          </li>
          <li>
            <a className=" hover:text-gray-800">Contact</a>
          </li>


        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium  tracking-widest text-sm mb-3">
        Help
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className=" hover:text-gray-800">FAQ</a>
          </li>
          <li>
            <a className=" hover:text-gray-800">Term & Condition</a>
          </li>
          <li>
            <a className=" hover:text-gray-800">Repoting</a>
          </li>
          <li>
            <a className=" hover:text-gray-800">Documentation</a>
          </li>
          <li>
            <a className=" hover:text-gray-800">Support policy</a>
          </li>
          <li>
            <a className=" hover:text-gray-800">Privacy</a>
          </li>
        </nav>
      </div>
      
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium  tracking-widest text-sm mb-3">
          Recent Post
        </h2>
        <nav className="list-none mb-10">
        <Image 
      src={'/Resent post cadr 1.png'}
      alt='watch'
      height={100}
      width={200} 
       className='border border-gray-800 rounded-lg'
      /><br/>
           <Image 
      src={'/Resent post cadr 2.png'}
      alt='watch'
      height={100}
      width={200} 
       className='border border-gray-800 rounded-lg'
      /><br/>
           <Image 
      src={'/Resent post cadr 3.png'}
      alt='watch'
      height={100}
      width={200} 
      className='border border-gray-800 rounded-lg'/>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-black">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className=" text-sm text-center sm:text-left">
       Foodtuck
        <a
          href="https://twitter.com/knyttneve"
          rel="noopener noreferrer"
          className="text-gray-600 ml-1"
          target="_blank"
        >
          @knyttneve
        </a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a className="ml-3 ">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        <a className="ml-3 ">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
        </a>
        <a className="ml-3 ">
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            />
            <circle cx={4} cy={4} r={2} stroke="none" />
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>






    </div>
  )
}
