import Image from 'next/image';
import React from 'react';

export default function Food() {
  return (
    <div className="bg-black">
      {/* Main Section */}
      <section className="text-white bg-black body-font">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center py-12 md:py-24">
          {/* Left Section: Image */}
          <div className="md:w-1/2 w-full lg:pl-44 flex justify-center md:justify-start">
            <Image
              className="object-cover rounded"
              alt="Why choose us"
              src="/Why chose us.png"
              height={400}
              width={400}
              priority
            />
          </div>
          {/* Right Section: Text Content */}
          <div className="md:w-1/2 w-full text-center md:text-left md:pr-12">
            <span className="text-yellow-500">About us__</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mt-4">
              <span className="text-orange-500">Ex</span>traordinary Taste
              <br /> And Experienced
            </h1>
            <p className="mt-4 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque diam pellentesque bibendum
              non dui volutpat fringilla bibendum. Urna elit augue urna vitae feugiat pretium donec id
              elementum. Ultrices mattis vitae mus risus. Lacus nisi et ac dapibus sit eu velit in consequat.
            </p>
            <div className=" flex-col sm:flex-row justify-center md:justify-start mt-6 gap-4">
              <Image
                src="/box.png"
                alt="Extraordinary Taste"
                height={100}
                width={200}
                className="object-contain"
              /><br/>
              <Image
                src="/experience.png"
                alt="Experienced"
                height={100}
                width={200}
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <Image
                src="/Clients.png"
                alt="image"
                height={900}
                width={1800}
                className="object-contain"
              /><br/><br/>
      </section>

     
    
    </div>
  );
}
