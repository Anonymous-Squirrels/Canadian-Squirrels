

import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; 

const locations = [
    { src: '/assets/kolkata.png', alt: 'Image 2', title: 'KOLKATA' },
    { src: '/assets/Lightcalgary.png', alt: 'Image 1', title: 'CALGARY' },
    { src: '/assets/hyderabad.png', alt: 'Image 3', title: 'HYDERABAD' },    
];

const ContactBackground = () => {
  return (
    <div className="relative h[70vh] xl:h-screen w-full overflow-x-hidden">
      {/* Top shadow for 100px height */}
      <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-b from-transparent to-black/90 z-10 hidden md:flex"></div>
      {/* Bottom shadow */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 md:from-black/40 to-transparent z-10"></div>

      <Link href="/contact">
        <div className="absolute bottom-5 left-5 text-white text-3xl md:text-6xl z-20 group hover:cursor-pointer">
          <p className="font-semibold transform transition-transform duration-300 group-hover:scale-105">
            CONTACT US
          </p>
          <div className="flex items-center gap-3 md:mt-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-6 md:group-hover:translate-x-12">
            <div className="w-5 md:w-20 h-[2px] bg-white"></div>
            <div className="text-xl md:text-4xl">LET&apos;S TALK</div>
            <div className="w-5 md:w-10 h-[2px] bg-white"></div>
          </div>
        </div>
      </Link>

      <div className="relative grid grid-cols-1 md:grid-cols-3 min-h-screen h-auto">
  {locations.map((location, index) => (
    <div
      key={index}
      className={`relative col-span-1 md:col-span-1 ${
        index > 0 ? 'block md:block' : ''
      }`}
    >
      <Image
        src={location.src}
        alt={location.alt}
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />
      <div className="absolute inset-x-0 top-1/3 transform -translate-y-1/2 bg-black bg-opacity-30 text-white text-center">
        <p className="text-5xl md:text-4xl lg:text-5xl 2xl:text-7xl text-white my-1">
          {location.title}
        </p>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default ContactBackground;
