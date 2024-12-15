
'use client'
import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';
import { FaCalendarAlt } from 'react-icons/fa';

const Blogdetail = () => {
  const blogPosts = [
    {
      id: 1,
      title: '10 Reasons To Do A Digital Detox Challenge',
      description:
        'Netus pretium tellus nulla commodo massa adipiscing in elementum magna congue condimentum placerat habitasse potenti ac orci a quisque tristique elementum et viverra at condimentum scelerisque eu mi. Elit praesent cras vehicula a ullamcorper nulla scelerisque aliquet tempus faucibus quam ac aliquet nibh a condimentum suspendisse hac integer leo erat aliquam ut himenaeos.',
      description1:
        'Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac.Nec hac et vestibulum duis a tincidunt per a aptent interdum purus feugiat a id aliquet erat himenaeos nunc torquent euismod adipiscing adipiscing dui gravida justo.',
      image: '/broast.png',
    },
  ];

  return (
    <div className="p-4 md:p-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side */}
        <div className="flex flex-col gap-8 md:w-2/3">
          {blogPosts.map((blog) => (
            <div key={blog.id} className="flex flex-col gap-4 border p-4 rounded-lg shadow-md">
              <Image src={blog.image} alt={blog.title} width={800} height={400} className="rounded-md" />
              <h2 className="text-2xl font-semibold">{blog.title}</h2>
              <p className="text-gray-600">{blog.description}</p>
              <p className="text-gray-600">{blog.description1}</p>

              <br />
              <div className="lg:w-full">
                <Image src="/Conmment.png" alt="Comment" width={1000} height={300} />
              </div>
            </div>
          ))}

          <p className="text-gray-700 mt-8">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </p>

          <div className="flex mt-8">
            <p className="text-lg text-gray-700">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              <br />
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>

          {/* Comment Section */}
          <div className="space-y-6 mt-8">
            <div className="flex space-x-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image src="/first.png" alt="User" height={100} width={100} className="object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <div className="font-semibold">MD Sojib Khan</div>
                  <div className="flex items-center text-sm text-gray-500">
                    <FaCalendarAlt className="mr-1" />
                    2024-12-15
                  </div>
                </div>
                <p className="text-gray-700 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et sem. Fusce hendrerit faucibus sollicitudin.
                </p>
                <button className="text-blue-500 mt-2">Reply</button>
              </div>
            </div>

            <div className="ml-12 flex space-x-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image src="/second.png" alt="Replier" height={100} width={100} className="object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <div className="font-semibold">MD Moon Khan</div>
                  <div className="flex items-center text-sm text-gray-500">
                    <FaCalendarAlt className="mr-1" />
                    2024-12-15
                  </div>
                </div>
                <p className="text-gray-700 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et sem. Fusce hendrerit faucibus sollicitudin.
                </p>
                <button className="text-blue-500 mt-2">Reply</button>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image src="/third.png" alt="Second User" height={100} width={100} className="object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <div className="font-semibold">MD Gulli Khan</div>
                  <div className="flex items-center text-sm text-gray-500">
                    <FaCalendarAlt className="mr-1" />
                    2024-12-15
                  </div>
                </div>
                <p className="text-gray-700 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et sem. Fusce hendrerit faucibus sollicitudin.
                </p>
                <button className="text-blue-500 mt-2">Reply</button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-[424px] mt-8 md:mt-0">
          {/* Search Input */}
          <div className="flex justify-center md:justify-end mb-8">
            <div className="flex items-center w-full max-w-md">
              <input
                type="email"
                placeholder="Search your Keyword..."
                className="flex-grow p-2 text-gray-500 border bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
              <button className="bg-orange-500 text-white px-6 py-3 hover:bg-orange-900">
                <CiSearch />
              </button>
            </div>
          </div>

          {/* Sidebar Image */}
          <Image
            src="/Side ber.png"
            alt="Sidebar"
            width={400}
            height={300}
            className="rounded-md w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Blogdetail;
