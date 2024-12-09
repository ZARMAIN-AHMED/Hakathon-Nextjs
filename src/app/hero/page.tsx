import Image from 'next/image'
import React from 'react'
import Navbar from '../topnav/page'

function Hero() {
  return (
    <div>
<section className="body-font text-white h-screen bg-black flex justify-center items-center">
  <div className="container mx-auto flex px-5 py-20 flex-col-reverse md:flex-row items-center">
    <div className="lg:flex-grow md:w-1/2 md:ml-16 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <span className="text-orange-500 text-lg md:text-xl">Its Quick & Amusing!</span>
      <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl mb-4">
        <span className="text-orange-500">Th</span>e Art of Speed
        <br className="hidden lg:inline-block" />
        Food Quality
      </h1>
      <p className="mb-8 leading-relaxed text-base md:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
        Varius sed pharetra dictum neque massa congue
      </p>
      <div className="flex justify-center md:justify-start">
        <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded-2xl text-lg">
          See Menu
        </button>
      </div>
    </div>
    <div className="flex justify-center md:w-1/2">
      <Image
        className="object-center rounded"
        alt="hero"
        src="/Image.png"
        height={600}
        width={800}
      />
    </div>
  </div>
</section>
    </div>
  )
}  

export default Hero
