'use client'


import React from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";

const ProductListingComponent = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row gap-8 mt-20">
      {/* Left Section */}
      <div className="w-full md:w-3/4">
        {/* Filters */}
        <div className="flex items-center gap-4 mb-8">
          <label className="text-lg font-semibold">Short By:</label>
          <select className="p-2 border rounded-md focus:ring-2 focus:ring-orange-500">
            <option>Popularity</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
          <label className="text-lg font-semibold">Show:</label>
          <select className="p-2 border rounded-md focus:ring-2 focus:ring-orange-500">
            <option>9</option>
            <option>15</option>
            <option>21</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Individual Product */}
          <div className="flex flex-col items-center">
            <Image
              src="/pro1.png"
              alt="Product 1"
              width={400}
              height={200}
              className="rounded-md object-cover"
            />
            <p className="font-semibold mt-2">French Lime</p>
            <div className="flex gap-2 items-center">
              <span className="text-orange-500 font-bold">$45.00</span>
              <span className="line-through text-gray-400">$50.00</span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/23.png"
              alt="Product 2"
              width={400}
              height={200}
              className="rounded-md object-cover"
            />
            <p className="font-semibold mt-2">Chocolate Muffin</p>
            <div className="flex gap-2 items-center">
              <span className="text-orange-500 font-bold">$40.00</span>
              <span className="line-through text-gray-400">$45.00</span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/34.png"
              alt="Product 2"
              width={400}
              height={200}
              className="rounded-md object-cover"
            />
            <p className="font-semibold mt-2">Burger</p>
            <div className="flex gap-2 items-center">
              <span className="text-orange-500 font-bold">$40.00</span>
              <span className="line-through text-gray-400">$45.00</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <Image
              src="/Mask Group (1).png"
              alt="Product 2"
              width={400}
              height={200}
              className="rounded-md object-cover"
            />
            <p className="font-semibold mt-2">Country Burger</p>
            <div className="flex gap-2 items-center">
              <span className="text-orange-500 font-bold">$40.00</span>
              <span className="line-through text-gray-400">$45.00</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center ">
            <Image
              src="/juice.png"
              alt="Product 2"
              width={400}
              height={10}
              className="rounded-md object-cover"
            />
            <p className="font-semibold mt-2">Drink</p>
            <div className="flex gap-2 items-center">
              <span className="text-orange-500 font-bold">$40.00</span>
              <span className="line-through text-gray-400">$45.00</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <Image
              src="/Mask Group (2).png"
              alt="Product 2"
              width={400}
              height={200}
              className="rounded-md object-cover"
            />
            <p className="font-semibold mt-2">Pizza</p>
            <div className="flex gap-2 items-center">
              <span className="text-orange-500 font-bold">$40.00</span>
              <span className="line-through text-gray-400">$45.00</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <Image
              src="/Mask Group (3).png"
              alt="Product 2"
              width={400}
              height={200}
              className="rounded-md object-cover"
            />
            <p className="font-semibold mt-2">Cheese Butter</p>
            <div className="flex gap-2 items-center">
              <span className="text-orange-500 font-bold">$40.00</span>
              <span className="line-through text-gray-400">$45.00</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <Image
              src="/Mask Group (4).png"
              alt="Product 2"
              width={400}
              height={200}
              className="rounded-md object-cover"
            />
            <p className="font-semibold mt-2">Sandwich</p>
            <div className="flex gap-2 items-center">
              <span className="text-orange-500 font-bold">$40.00</span>
              <span className="line-through text-gray-400">$45.00</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <Image
              src="/re.png"
              alt="Product 2"
              width={400}
              height={200}
              className="rounded-md object-cover"
            />
            <p className="font-semibold mt-2">Chicken Chup</p>
            <div className="flex gap-2 items-center">
              <span className="text-orange-500 font-bold">$40.00</span>
              <span className="line-through text-gray-400">$45.00</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <Image
              src="/Mask Group (1).png"
              alt="Product 2"
              width={400}
              height={200}
              className="rounded-md object-cover"
            />
            <p className="font-semibold mt-2">Country Burger</p>
            <div className="flex gap-2 items-center">
              <span className="text-orange-500 font-bold">$40.00</span>
              <span className="line-through text-gray-400">$45.00</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <Image
              src="/juice.png"
              alt="Product 2"
              width={400}
              height={200}
              className="rounded-md object-cover"
            />
            <p className="font-semibold mt-2">Drink</p>
            <div className="flex gap-2 items-center">
              <span className="text-orange-500 font-bold">$40.00</span>
              <span className="line-through text-gray-400">$45.00</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <Image
              src="/Mask Group (2).png"
              alt="Product 2"
              width={400}
              height={200}
              className="rounded-md object-cover"
            />
            <p className="font-semibold mt-2">Pizza</p>
            <div className="flex gap-2 items-center">
              <span className="text-orange-500 font-bold">$40.00</span>
              <span className="line-through text-gray-400">$45.00</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <Image
              src="/Mask Group (3).png"
              alt="Product 2"
              width={400}
              height={200}
              className="rounded-md object-cover"
            />
            <p className="font-semibold mt-2">Cheese Butter</p>
            <div className="flex gap-2 items-center">
              <span className="text-orange-500 font-bold">$40.00</span>
              <span className="line-through text-gray-400">$45.00</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/Mask Group (4).png"
              alt="Product 2"
              width={400}
              height={200}
              className="rounded-md object-cover"
            />
            <p className="font-semibold mt-2">Sandwich</p>
            <div className="flex gap-2 items-center">
              <span className="text-orange-500 font-bold">$40.00</span>
              <span className="line-through text-gray-400">$45.00</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/re.png"
              alt="Product 2"
              width={400}
              height={200}
              className="rounded-md object-cover"
            />
            <p className="font-semibold mt-2">Chicken Chup</p>
            <div className="flex gap-2 items-center">
              <span className="text-orange-500 font-bold">$40.00</span>
              <span className="line-through text-gray-400">$45.00</span>
            </div>
          </div>
          {/* Add more products similarly */}
        </div>
      </div>

      {/* Right Section */}
      <div
        className="w-full md:w-1/4 border p-4 rounded-md"
        style={{ width: "312px", height: "1489px" }}
      >
        {/* Search Bar */}
        
        <div className="flex items-center  max-w-md">
            <input
              type="text"
              placeholder="Search.."
              className="flex-grow p-2 rounded-l-lg font-medium text-black shadow-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
            <button className="bg-orange-500 text-white px-6 py-3 rounded-r-lg hover:bg-orange-600 shadow-md">
                  <CiSearch />
            </button>
            <br/>
          </div><br/>
        {/* Categories */}
        <h2 className="text-xl font-bold mb-4">Category</h2>
        <div className="flex flex-col gap-2">
          {["Sandwiches", "Burger", "Chicken Chup", "Drink", "Pizza", "Thi", "Non Veg", "Uncategorized"].map(
            (category, index) => (
              <label key={index} className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                <span>{category}</span>
              </label>
            )
          )}
        </div>
<div>
        {/* Uncategorized Images */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          {/* Individual Uncategorized Image */}
          <div>
            <Image
              src="/Banner.png"
              alt="Uncategorized 1"
              width={400}
              height={200}
              className="rounded-md object-cover"
            />
          </div><br/><br/>
          <div>
            <Image
              src="/Filter by Price.png"
              alt="Uncategorized 2"
              width={400}
              height={100}
              className="rounded-md object-cover"
            />
          </div>
          <br/><br/>
          <div>
            <Image
              src="/Latest Product.png"
              alt="Uncategorized 3"
              width={300}
              height={100}
              className="rounded-md object-cover"
            />
          </div>


          <br/><br/>
          <div>
            <Image
              src="/Product Tag.png"
              alt="Uncategorized 4"
              width={400}
              height={100}
              className="rounded-md object-cover"
            />
          </div>
        </div></div>
      </div>
    </div>
  );
};

export default ProductListingComponent;
