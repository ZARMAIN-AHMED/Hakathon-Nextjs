'use client'

import React from "react";
import Image from "next/image";
import { FiShoppingBag } from "react-icons/fi";
import { FaFacebook, FaHeart, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import ProductListingComponent from "../ourshop/page";

const ProductPage = () => {
  return (
    <div>
          <div className="container mx-auto p-4 px-4 sm:px-6 lg:px-20">
      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Images Section */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Vertical Column of 4 Images */}
          <div className="flex flex-col gap-4 md:w-1/4">
            <div>
              <Image
                src="/99.png"
                alt="Sample 1"
                width={100}
                height={80}
                className="object-cover rounded-md"
              />
            </div>
            <div>
              <Image
                src="/22.png"
                alt="Sample 2"
                width={100}
                height={80}
                className="object-cover rounded-md"
              />
            </div>
            <div>
              <Image
                src="/33.png"
                alt="Sample 3"
                width={100}
                height={80}
                className="object-cover rounded-md"
              />
            </div>
            <div>
              <Image
                src="/44.png"
                alt="Sample 4"
                width={100}
                height={80}
                className="object-cover rounded-md"
              />
            </div>
          </div>

          {/* Large Image */}
          <div className="md:w-3/4">
            <Image
              src="/big.png"
              alt="Large Sample"
              width={400}
              height={350}
              className="object-cover rounded-md"
            />
          </div>
        </div>

        {/* Right Content Section */}
        <div className="flex flex-col gap-4 md:mr-40">
          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-orange-500 text-white px-4 py-2 rounded">In Stock</button>
          </div>

          {/* Product Details */}
          <h1 className="text-2xl font-bold">Yummy Chicken Chup</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui
            volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed
            vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
          </p>
          <div className="items-center gap-4">
            <p className="text-2xl font-bold text-orange-500">$54.00</p><br />
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              <div className="flex">
                <span className="text-gray-600">5.0 Rating</span>
              </div>
              <span className="text-gray-600">22 Reviews</span>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-md">
              <button className="px-2">-</button>
              <span className="px-4">1</span>
              <button className="px-2">+</button>
            </div>
            <button className="flex items-center gap-4 bg-orange-500 text-white px-4 py-2 rounded">
              <span className="material-icons"><FiShoppingBag /></span>
              Add to Cart
            </button>
          </div>

          {/* Wishlist and Compare */}
          <div className="flex gap-4">
            <button className="flex items-center gap-4 text-gray-600">
              <span className="material-icons"><FaHeart /></span>
              Add to Wishlist
            </button>
            <button className="text-gray-600">Compare</button>
          </div>

          {/* Category and Tags */}
          <div className="flex flex-col gap-4">
            <p>
              <strong>Category:</strong> Pizza
            </p>
            <p>
              <strong>Tag:</strong> Our Shop
            </p>
            <p className="flex items-center gap-4">
              <strong>Share:</strong>
              <span className="flex gap-2">
                <i className="fab fa-youtube"><FaYoutube /></i>
                <i className="fab fa-facebook"><FaFacebook /></i>
                <i className="fab fa-twitter"><FaTwitter /></i>
                <i className="fab fa-instagram"><FaInstagram /></i>
              </span>
            </p>
          </div>
        </div>
      </div>

      <br /><br /><br /><br />
      {/* Description and Reviews Buttons */}
      <div className="flex gap-4 mt-8">
        <button className="bg-orange-500 text-white px-4 py-2 rounded">Description</button>
        <button className="bg-white border border-gray-300 text-black px-4 py-2 rounded">
          Reviews (24)
        </button>
      </div>

      {/* Description Section */}
      <div className="text-left mt-4">
        <p>
          Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam
          mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum.
        </p>
        <p>
          Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est
          dignissim nec. Pellentesque scelerisque hendrerit posuere.
        </p>
        <h2 className="text-xl font-bold mt-4">Key Benefits</h2>
        <ul className="list-disc list-inside">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Maecenas ullamcorper est et massa mattis condimentum.</li>
          <li>Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.</li>
          <li>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
          <li>Mauris eget diam magna, in blandit turpis.</li>
        </ul>
      </div>

      {/* Similar Products */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Similar Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
          <div>
            <div className="w-full h-32">
              <Image
                src="/pro1.png"
                alt="Similar Product 1"
                width={250}
                height={120}
                className="object-cover rounded-md"
              />
            </div>
            <br /><br /><br /><br />
            <p className="font-medium">Fresh Lime</p>
            <p className="text-orange-500 font-bold">$45.00</p>
            <p className="line-through text-gray-400">$50.00</p>
          </div>
          <div>
            <div className="w-full h-32">
              <Image
                src="/pro2.png"
                alt="Similar Product 2"
                width={250}
                height={120}
                className="object-cover rounded-md"
              />
            </div><br /><br /><br /><br />
            <p className="font-medium">Chocolate Muffin</p>
            <p className="text-orange-500 font-bold">$45.00</p>
            <p className="line-through text-gray-400">$50.00</p>
          </div>
          <div>
            <div className="w-full h-32">
              <Image
                src="/pro3.png"
                alt="Similar Product 3"
                width={250}
                height={120}
                className="object-cover rounded-md"
              />
            </div><br /><br /><br /><br />
            <p className="font-medium">Burger</p>
            <p className="text-orange-500 font-bold">$45.00</p>
            <p className="line-through text-gray-400">$50.00</p>
          </div>
          <div>
            <div className="w-full h-32">
              <Image
                src="/pro1.png"
                alt="Similar Product 4"
                width={250}
                height={120}
                className="object-cover"
              />
            </div><br /><br /><br /><br />
            <p className="font-medium">Fresh Lime</p>
            <p className="text-orange-500 font-bold">$45.00</p>
            <p className="line-through text-gray-400">$50.00</p>
          </div>
        </div>
      </div>
    </div>
    <ProductListingComponent />
    
    </div>
  );
};

export default ProductPage;
