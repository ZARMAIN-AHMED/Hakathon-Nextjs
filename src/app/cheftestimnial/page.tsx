'use client'
import Image from "next/image";
import { PiQuotes } from "react-icons/pi";

import Food from "../food/page";
import Link from "next/link";

const Testimonial = () => {
  const cards = [
    { image: "/Chef Card.png" },
    { image: "/Card 2.png" },
    { image: "/Card 3.png" },
    { image: "/Card 4.png" },
  ];

  return (
    <div className="bg-black">
      <Food />
      
      <div className="w-full flex flex-col items-center mt-10 px-4">
        <Image
          src={'/Our Menu.png'}
          className="object-cover rounded-md"
          alt="Our Menu"
          height={900}
          width={1300}
        />
        <div className="flex justify-center mt-6">
          <Link href="/menu">
            <button className="flex justify-center sm:font-medium bg-black items-center text-center w-40 text-white sm:py-2 rounded-3xl border-2 border-orange-500 hover:bg-orange-500 hover:text-black transition">
              See More
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-black">
        <h1 className="text-4xl md:text-6xl font-bold pb-10 text-center text-white">
          <span className="text-orange-500">Me</span>et Our Chefs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-8 lg:px-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <Image
                src={card.image}
                className="w-full h-48 sm:h-64 lg:h-72 object-cover"
                alt="Chef Card"
                height={900}
                width={400}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <Link href="/ourchef">
            <button className="flex justify-center bg-black items-center text-center w-40 text-white py-2 rounded-3xl border-2 border-orange-500 hover:bg-orange-500 hover:text-black transition">
              See More
            </button>
          </Link>
        </div>

        <section className="bg-black py-16 px-4 sm:px-8 lg:px-12">
          <div className="text-center">
            <span className="text-orange-500 uppercase text-sm tracking-wide">
              Testimonials
            </span>
            <h1 className="text-2xl md:text-3xl font-bold text-white capitalize mt-2">
              What our clients are saying
            </h1>
          </div>

          <div className="flex flex-col items-center mt-16">
            <div className="w-full max-w-xl p-6 rounded-2xl bg-white shadow-lg">
              <div className="flex flex-col items-center">
                <Image
                  className="object-cover rounded-full w-20 h-20"
                  src="/Ellipse 6.png"
                  alt="Client"
                  height={100}
                  width={100}
                />
                <div className="mt-2 text-orange-500">
                  <PiQuotes className="w-10 h-10 md:w-12 md:h-12" />
                </div>
              </div>

              <p className="mt-6 text-sm md:text-base leading-relaxed text-gray-700 text-center">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat fringilla bibendum.
                Urna elit augue urna, vitae feugiat pretium donec id elementum.
                Ultrices mattis sed vitae mus risus. Lacus nisi et ac dapibus
                sit eu velit in consequat.
              </p>

              <div className="flex flex-col items-center mt-6">
                <div className="flex">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-gray-400">⭐</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold">Mia Brown</h3>
              </div>
            </div>
          </div>
        </section>

        <Image
          className="object-cover w-full mt-10"
          src="/Restraind creative Process.png"
          alt="Creative Process"
          height={100}
          width={1900}
        />
      </div>
      <br/><br/>
      <div className="w-full flex flex-col items-center mt-10 px-4">
        <Image
          src={'/Blog.png'}
          className="object-cover rounded-md"
          alt="blog"
          height={900}
          width={1300}
        />
        <div className="flex justify-center mt-6">
          <Link href="/blog">
            <button className="flex justify-center sm:font-medium bg-black items-center text-center w-40 text-white sm:py-2 rounded-3xl border-2 border-orange-500 hover:bg-orange-500 hover:text-black transition">
              See More
            </button>
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default Testimonial;
