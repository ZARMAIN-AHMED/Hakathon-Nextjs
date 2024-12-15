'use client'

import Image from 'next/image';
import Navbar from '../topnav/page';

const Menu = () => {
  return (
    <div>
      <Navbar />
    <div className="bg-white py-14">
    
      <div className="container mx-auto px-4 space-y-10">
        {/* First Menu Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/3">
            <Image
              src="/f1.png" // Replace with your image path
              alt="Menu Image"
              width={500}
              height={300}
              className="rounded-lg w-full h-auto"
            />
          </div>
          {/* Right Side - Menu Details */}
          <div className="w-full md:w-2/3 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">Starter Menu</h2>

            {/* Menu Items */}
            <div className="space-y-6">
              <div className="border-b pb-4">
                <span className='text-xl md:text-3xl font-bold'>Alder Grilled Chinook Salmon</span>
                <p className='mt-2 text-sm md:text-base'>Toasted French bread topped with romano, cheddar</p>
                <p className='text-sm md:text-base'>560 CAL</p>
                <div className='text-right mt-2'>
                  <span className="text-[#FF9F0D] font-bold text-lg md:text-xl">$12.99</span>
                </div>
              </div>
              <div className="border-b pb-4">
                <span className='text-xl md:text-3xl font-bold text-[#FF9F0D]'>Berries and Creme Tart</span>
                <p className='mt-2 text-sm md:text-base'>Gorgonzola, ricotta, mozzarella, taleggio</p>
                <p className='text-sm md:text-base'>700 CAL</p>
                <div className='text-right mt-2'>
                  <span className="text-[#FF9F0D] font-bold text-lg md:text-xl">$8.99</span>
                </div>
              </div>
              <div className="border-b pb-4">
                <span className='text-xl md:text-3xl font-bold'>Tormentoso Bush Pizza Pintoage</span>
                <p className='mt-2 text-sm md:text-base'>Ground cumin, avocados, peeled and cubed</p>
                <p className='text-sm md:text-base'>1000 CAL</p>
                <div className='text-right mt-2'>
                  <span className="text-[#FF9F0D] font-bold text-lg md:text-xl">$10.50</span>
                </div>
              </div>
              <div className="border-b pb-4">
                <span className='text-xl md:text-3xl font-bold'>Spicy Vegan Potato Curry</span>
                <p className='mt-2 text-sm md:text-base'>Spreadable cream cheese, crumbled blue cheese</p>
                <p className='text-sm md:text-base'>560 CAL</p>
                <div className='text-right mt-2'>
                  <span className="text-[#FF9F0D] font-bold text-lg md:text-xl">$9.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Menu Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
          {/* Left Side - Menu Details */}
          <div className="w-full md:w-2/3 space-y-6 order-2 md:order-1">
            {/* Menu Items */}
            <div className="space-y-6">
              <div className="border-b pb-4">
                <span className='text-xl md:text-3xl font-bold'>Optic Big Breakfast Combo Menu</span>
                <p className='mt-2 text-sm md:text-base'>Toasted French bread topped with romano, cheddar</p>
                <p className='text-sm md:text-base'>560 CAL</p>
                <div className='text-right mt-2'>
                  <span className="text-[#FF9F0D] font-bold text-lg md:text-xl">$18.99</span>
                </div>
              </div>
              <div className="border-b pb-4">
                <span className='text-xl md:text-3xl font-bold'>Cashew Chicken With Stir-Fry</span>
                <p className='mt-2 text-sm md:text-base'>Gorgonzola, ricotta, mozzarella, taleggio</p>
                <p className='text-sm md:text-base'>700 CAL</p>
                <div className='text-right mt-2'>
                  <span className="text-[#FF9F0D] font-bold text-lg md:text-xl">$16.50</span>
                </div>
              </div>
              <div className="border-b pb-4">
                <span className='text-xl md:text-3xl font-bold'>Vegetables & Green Salad</span>
                <p className='mt-2 text-sm md:text-base'>Ground cumin, avocados, peeled and cubed</p>
                <p className='text-sm md:text-base'>1000 CAL</p>
                <div className='text-right mt-2'>
                  <span className="text-[#FF9F0D] font-bold text-lg md:text-xl">$20.00</span>
                </div>
              </div>
              <div className="border-b pb-4">
                <span className='text-xl md:text-3xl font-bold'>Spicy Vegan Potato Curry</span>
                <p className='mt-2 text-sm md:text-base'>Spreadable cream cheese, crumbled blue cheese</p>
                <p className='text-sm md:text-base'>560 CAL</p>
                <div className='text-right mt-2'>
                  <span className="text-[#FF9F0D] font-bold text-lg md:text-xl">$14.75</span>
                </div>
              </div>
            </div>
          </div>
          {/* Right Side - Image */}
          <div className="w-full md:w-1/3 order-1 md:order-2">
            <Image
              src="/f2.png" // Replace with your image path
              alt="Menu Image"
              width={500}
              height={300}
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </div>








<br/><br/><br/>


      <Image
              src="/Clients.png" // Replace with your image path
              alt="Menu Image"
              width={2000}
              height={300}
              
            />

<br/><br/><br/><br/>

<div className="container mx-auto px-4 space-y-10">
  {/* First Menu Section */}
  <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
    {/* Left Side - Image */}
    <div className="w-full md:w-1/3">
      <Image
        src="/f3.png" // Replace with your image path
        alt="Menu Image"
        width={500}
        height={300}
        className="rounded-lg w-full h-auto"
      />
    </div>
    {/* Right Side - Menu Details */}
    <div className="w-full md:w-2/3 space-y-4">
      <h2 className="text-3xl md:text-5xl font-bold">Desert</h2>

      {/* Menu Items */}
      <div className="space-y-4">
        <div className="border-b py-4">
          <span className='text-xl md:text-3xl font-bold'>Fig and lemon cake</span><br/><br/>
          <span className='block'>Toasted French bread topped with romano, cheddar</span><br/>
          <span>560 CAL</span>
          <div className='text-right'>
            <span className="text-[#FF9F0D] font-bold">$12.99</span>
          </div>
        </div>
        <div className="border-b py-4">
          <span className='text-xl md:text-3xl font-bold text-[#FF9F0D]'>Creamy mascarpone cake</span><br/><br/>
          <span className='block'>Gorgonzola, ricotta, mozzarella, taleggio</span><br/>
          <span>700 CAL</span>
          <div className='text-right'>
            <span className="text-[#FF9F0D] font-bold">$8.99</span>
          </div>
        </div>
        <div className="border-b py-4">
          <span className='text-xl md:text-3xl font-bold'>Pastry, blueberries, lemon juice</span><br/><br/>
          <span className='block'>Ground cumin, avocados, peeled and cubed</span><br/>
          <span>1000 CAL</span>
          <div className='text-right'>
            <span className="text-[#FF9F0D] font-bold">$10.50</span>
          </div>
        </div>
        <div className="border-b py-4">
          <span className='text-xl md:text-3xl font-bold'>Pain au chocolat</span><br/><br/>
          <span className='block'>Spreadable cream cheese, crumbled blue cheese</span><br/>
          <span>560 CAL</span>
          <div className='text-right'>
            <span className="text-[#FF9F0D] font-bold">$9.00</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Second Menu Section */}
  <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
    {/* Left Side - Menu Details */}
    <div className="w-full md:w-2/3 space-y-4 order-2 md:order-1">
      <h2 className="text-3xl md:text-5xl font-bold">Drinks</h2>
      {/* Menu Items */}
      <div className="space-y-4">
        <div className="border-b py-4">
          <span className='text-xl md:text-3xl font-bold'>Caffè macchiato</span><br/><br/>
          <span className='block'>Toasted French bread topped with romano, cheddar</span><br/>
          <span>560 CAL</span><br/>
          <div className='text-right'>
            <span className="text-[#FF9F0D] font-bold">$18.99</span>
          </div>
        </div>
        <div className="border-b py-4">
          <span className='text-xl md:text-3xl font-bold'>Aperol Spritz Capacianno</span><br/><br/>
          <span className='block'>Gorgonzola, ricotta, mozzarella, taleggio</span><br/>
          <span>700 CAL</span><br/>
          <div className='text-right'>
            <span className="text-[#FF9F0D] font-bold">$16.50</span>
          </div>
        </div>
        <div className="border-b py-4">
          <span className='text-xl md:text-3xl font-bold'>Caffe Latte Campuri</span><br/><br/>
          <span className='block'>Ground cumin, avocados, peeled and cubed</span><br/>
          <span>1000 CAL</span><br/>
          <div className='text-right'>
            <span className="text-[#FF9F0D] font-bold">$20.00</span>
          </div>
        </div>
        <div className="border-b py-4">
          <span className='text-xl md:text-3xl font-bold'>Tormentoso BushTea Pintoage</span><br/><br/>
          <span className='block'>Tormentoso BushTea Pintoage</span><br/>
          <span>560 CAL</span><br/>
          <div className='text-right'>
            <span className="text-[#FF9F0D] font-bold">$14.75</span>
          </div>
        </div>
      </div>
    </div>
    {/* Right Side - Image */}
    <div className="w-full md:w-1/3 order-1 md:order-2">
      <Image
        src="/f4.png" // Replace with your image path
        alt="Menu Image"
        width={600}
        height={400}
        className="rounded-lg w-full h-auto"
      />
    </div>
  </div>
</div>



<br/><br/><br/>

    
<Image
        src="/Clients and partner.png" // Replace with your image path
        alt="Menu Image"
        width={1700}
        height={400}
        className="rounded-lg "
      />

<br/><br/><br/>



    </div></div>
  );
};

export default Menu;
