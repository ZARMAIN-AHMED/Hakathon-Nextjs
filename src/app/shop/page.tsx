import Image from "next/image";
import React from "react";
import Navbar from "../topnav/page";

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
              <div className="flex items-center gap-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-md"
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
                <p className="text-sm text-gray-600 lg:pl-56">{product.price}</p>
                <p className="text-sm text-gray-600">{product.quantity}</p>
                <p className="text-sm text-gray-600 lg:pr-32">{product.total}</p>
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
    </div>
  );
};

export default ShoppingCard;