import Image from "next/image";
import { PiQuotes } from "react-icons/pi";

import Food from "../food/page";

const Testimonial = () => {
    const cards = [
        { image: '/Chef Card.png',  },
        { image: '/Card 2.png',   },
        { image: '/Card 3.png',  },
        { image: '/Card 4.png',   },
    ];

    return (
      <div className="bg-black">
        <Food/>
        <div className="bg-black"> 
          <h1 className="text-4xl md:text-6xl font-bold pb-10 text-center text-white">
            <span className="text-orange-500">Me</span>et Our Chefs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="bg-white shadow-lg rounded-lg overflow-hidden"
                >
                    <img
                        src={card.image}
                        className="w-full h-64 object-cover md:h-80 lg:h-96"
                        alt="Chef Card"
                    />
                </div>
            ))}
          </div>

          <section className="bg-black py-16">
            <div className="container px-6 py-10 mx-auto">
              <div className="text-center">
                <span className="text-orange-500">Testimonials</span>
                <h1 className="text-2xl md:text-3xl font-bold text-white capitalize">
                  What our clients are saying
                </h1>
              </div>

              <div className="flex flex-col items-center mt-16">
                <div className="text-center h-auto w-full max-w-xl p-6 rounded-2xl bg-white">
                  <div className="flex flex-col items-center">
                    <Image
                      className="object-cover rounded-full w-14 h-14"
                      src="/Ellipse 6.png"
                      alt="Client"
                      height={100}
                      width={100}
                    />
                    <div className="mt-2 text-orange-500">
                      <PiQuotes className="w-10 h-10 md:w-12 md:h-12" />
                    </div>
                  </div>

                  <p className="mt-6 text-sm md:text-base leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui
                    volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices
                    mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
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
            </div>

            <Image
              className="object-cover mt-10 mx-auto"
              src="/Restraind creative Process.png"
              alt="Creative Process"
              height={100}
              width={1900}
            />
          </section>
        </div>
      </div>
    );
};

export default Testimonial;