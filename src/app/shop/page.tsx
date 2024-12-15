'use client'

import React from "react";
import Navbar from "../topnav/page";
import Image from "next/image";
import DetailPage from "../shopdetail/page";


const ShoppingCard = () => {
  const products = [
    {
      id: 1,
      image: "/burger1.png", // Replace with your product image URL
      name: "Product 1",
      price: "$20",
      quantity: 2,
      total: "$40",
      starimage: "/Star.png",
    },
    {
      id: 2,
      image: "/burdger2.png",
      name: "Product 2",
      price: "$15",
      quantity: 1,
      total: "$15",
    },
    {
      id: 3,
      image: "/burger3.png",
      name: "Product 3",
      price: "$30",
      quantity: 3,
      total: "$90",
    },
    {
      id: 4,
      image: "/burger4.png",
      name: "Product 4",
      price: "$25",
      quantity: 1,
      total: "$25",
    },
    {
      id: 5,
      image: "/burger5.png",
      name: "Product 5",
      price: "$40",
      quantity: 2,
      total: "$80",
    },
  ];

  return (
    <div>
      <Navbar />
      <DetailPage />
      <div className="p-4 lg:p-10">
        <div className="hidden md:flex justify-between items-center text-xl font-semibold border-b pb-2">
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span className="pr-32">Total</span>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col md:flex-row items-center justify-between bg-white shadow-md rounded-md overflow-hidden p-4 gap-4 md:gap-0"
            >
              <div className="flex items-center gap-4 w-full md:w-auto">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-md"
                  height={100}
                  width={100}
                />
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between flex-1 gap-4">
                <p className="text-sm text-gray-600">{product.price}</p>
                <p className="text-sm text-gray-600">{product.quantity}</p>
                <p className="text-sm text-gray-600">{product.total}</p>
              </div>

              <button
                className="text-red-500 hover:text-red-700 flex items-center justify-center"
                aria-label="Remove product"
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Coupon Code and Order Summary Section */}
      <div className="container mx-auto p-4 sm:px-6 lg:px-20">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section: Coupon Code */}
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl font-bold mb-4">Coupon Code</h1>
            <p className="text-gray-600 mb-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
              Vitae animi tenetur perferendis officiis.
            </p>
            <div className="flex items-center w-full max-w-md">
              <input
                type="text"
                placeholder="Enter your code"
                className="flex-grow p-3 rounded-l-lg text-black shadow-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
              <button className="bg-orange-500 text-white px-6 py-3 rounded-r-lg hover:bg-orange-600 shadow-md">
                Apply
              </button>
            </div>
          </div>

          {/* Right Section: Order Summary */}
          <div className="w-full md:w-1/3">
            <div className="border p-6 rounded-md shadow-md">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Subtotal:</span>
                <span className="text-orange-500">$54.00</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Shipping:</span>
                <span className="text-orange-500">$5.00</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-600 font-bold">Total:</span>
                <span className="text-orange-500 font-bold">$59.00</span>
              </div>
            </div>
            <button className="w-full bg-orange-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-orange-600 shadow-md">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
