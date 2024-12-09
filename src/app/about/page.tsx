import Image from 'next/image';
import React from 'react';
import { PiQuotes } from 'react-icons/pi';
import Navbar from '../topnav/page';

function About() {
  return (
    <div>
      <Navbar />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col-reverse md:flex-row py-12 md:py-24 items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="/triangle.png"
              height={400}
              width={600}
            />
          </div>
          <div className="md:w-1/2 flex flex-col md:items-start items-center text-center md:text-left">
            <span className="text-yellow-500 mb-4">About us__</span>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-black">
              Food is an important
              <br className="hidden lg:inline-block" />
              part of a balanced Diet
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum
              non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id
              elementum. Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="inline-flex text-white bg-yellow-500 border-0 py-3 px-7 focus:outline-none hover:bg-orange-600 rounded text-lg">
                Show More
              </button>
              <Image 
                src={'/Video Button.png'}
                alt='button'
                height={50}
                width={150}
                className='inline-flex'
              />
            </div>
          </div>
        </div>

        <section className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-16 mx-auto text-center">
            <div className="max-w-lg mx-auto">
              <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                Why Choose Us
              </h1>
              <p className="mt-6 text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
              </p>
            </div>

            <div className="flex justify-center mt-10">
              <Image
                className="object-cover rounded-xl w-full max-w-[90%] md:max-w-[80%] lg:max-w-[70%]"
                src="/food.png"
                alt="Why Choose Us"
                width={800}
                height={400}
              />
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-10 mx-auto">
            <span className="text-orange-500 block text-center md:text-left">Testimonials</span>
            <h1 className="text-2xl font-bold text-gray-800 capitalize lg:text-3xl dark:text-white text-center md:text-left">
              What our clients are saying
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 mt-16">
              <button
                title="left arrow"
                className="hidden md:block p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="text-center flex-1">
                <div className="flex flex-col items-center">
                  <Image
                    className="object-cover rounded-full w-14 h-14"
                    src="/Ellipse 6.png"
                    alt="Client"
                    height={100}
                    width={100}
                  />
                  <div className="mt-2 text-orange-500">
                    <PiQuotes className='w-10 h-10'/>
                  </div>
                </div>
                <p className="mt-6 text-gray-500 px-4 md:px-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui
                  volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum.
                </p>
                <div className="flex flex-col items-center mt-6">
                  <div className="flex">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-gray-400">⭐</span>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white">Mia Brown</h3>
                </div>
              </div>

              <button
                title="right arrow"
                className="hidden md:block p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default About;