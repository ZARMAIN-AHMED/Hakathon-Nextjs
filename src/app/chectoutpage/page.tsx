"use client";

import React, { useState } from "react";
import Navbar from "../topnav/page";
import Image from "next/image";

const Checkout = () => {
  const [billingAddressSame, setBillingAddressSame] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row justify-center items-start gap-4 p-4 pb-10">
        {/* Checkout Form */}
        <div className="w-full md:w-[872px] h-auto bg-white shadow-lg rounded-lg p-6 opacity-100">
          <h2 className="text-2xl font-bold mb-4">Checkout</h2>
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
              <div>
                <label className="block">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="input-field my-5 w-full"
                />
              </div>
              <div>
                <label className="block">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input-field my-5 w-full"
                />
              </div>
              <div>
                <label className="block">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input-field my-5 w-full"
                />
              </div>
              <div>
                <label className="block">Phone Number</label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="input-field my-5 w-full"
                />
              </div>
              <div>
                <label className="block">Company</label>
                <input
                  type="text"
                  placeholder="Company"
                  className="input-field my-5 w-full"
                />
              </div>
              <div>
                <label className="block">City</label>
                <input
                  type="text"
                  placeholder="City"
                  className="input-field my-5 w-full"
                />
              </div>
              <div>
                <label className="block">Address 1</label>
                <input
                  type="text"
                  placeholder="Address 1"
                  className="input-field my-5 w-full"
                />
              </div>
              <div>
                <label className="block">Zip Code</label>
                <input
                  type="text"
                  placeholder="Zip Code"
                  className="input-field my-5 w-full"
                />
              </div>
              {/* Country Dropdown */}
              <div>
                <label className="block">Country</label>
                <select className="input-field my-5 w-full">
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                  {/* Add more countries as needed */}
                </select>
              </div>
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={billingAddressSame}
                    onChange={() => setBillingAddressSame(!billingAddressSame)}
                  />
                  Billing address is the same as shipping address
                </label>
              </div>
            </div>

            <div className="flex justify-between mt-6 mb-8">
              <button className="flex items-center text-gray-600">
                <span className="mr-2">{"<"}</span> Back to Cart
              </button>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-lg">
                Proceed to Shipping
              </button>
            </div>
          </form>
        </div>

        {/* Right-side Panel with Images and Summary */}
        <div className="w-full md:w-[424px] h-auto bg-gray-100 border-t border-gray-300 py-4 px-4 mt-6 md:mt-0">
          {/* Images */}
          <div className="mb-4 flex flex-col gap-2">
            <Image
              src="/Chiken.png"
              alt="Chicken"
              className="object-cover"
              height={100}
              width={200}
            />
            <Image
              src="/Chiken.png"
              alt="Chicken"
              className="object-cover"
              height={100}
              width={200}
            />
            <Image
              src="/Chiken.png"
              alt="Chicken"
              className="object-cover"
              height={100}
              width={200}
            />
          </div>

          {/* Price Summary */}
          <div className="border-t pt-4">
            <div className="flex justify-between mb-2">
              <span>Sub-total</span>
              <span>$130</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Discount</span>
              <span>25%</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Tax</span>
              <span>$54.76</span>
            </div>
            <div className="flex justify-between mb-4 font-bold">
              <span>Total</span>
              <span>$432.65</span>
            </div>

            {/* Place Order Button */}
            <button className="bg-orange-500 text-white w-full py-2 rounded-lg">
              Place an Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
