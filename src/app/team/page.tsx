'use client'

import Image from 'next/image';
import React from 'react';

export default function Team() {
  return (
    <div className="w-full lg:h-60 bg-orange-400 text-white flex flex-col items-center py-10">
      <div className="text-center px-4">
        <h1 className="text-3xl font-bold lg:pt-6">Team Member</h1>
        <p className="mt-4 text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
          Varius sed pharetra dictum neque massa congue
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        <Image
          src={'/Mark Henry.png'}
          className="object-cover rounded-md"
          alt="Team Member"
          height={200}
          width={300}
        />
        <Image
          src={'/Mark Henry (1).png'}
          className="object-cover rounded-md"
          alt="Team Member"
          height={200}
          width={300}
        />
        <Image
          src={'/Mark Henry (2).png'}
          className="object-cover rounded-md"
          alt="Team Member"
          height={200}
          width={300}
        />
        <Image
          src={'/Mark Henry (3).png'}
          className="object-cover rounded-md"
          alt="Team Member"
          height={200}
          width={300}
        />
      </div>
    </div>
  );
}
