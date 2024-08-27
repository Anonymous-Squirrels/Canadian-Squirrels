import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import the Link component

const ContactBackground = () => {
  return (
    <div className="relative h-[40vh] md:h-screen w-screen overflow-x-hidden">
      {/* Top shadow for 100px height */}
      <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-black/80 to-transparent z-10"></div>
      {/* Bottom shadow */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>

      <Link href="/contact">
        <div className="absolute bottom-5 left-5 text-white text-3xl md:text-6xl z-20 group hover:cursor-pointer">
          <p className='font-semibold transform transition-transform duration-300 group-hover:scale-105'>CONTACT US</p>
          <div className='flex items-center gap-3 md:mt-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-6 md:group-hover:translate-x-12'>
            <div className='w-5 md:w-20 h-[2px] bg-white'></div>
            <div className='text-xl md:text-4xl'>LET&apos;S TALK</div>
            <div className='w-5 md:w-10 h-[2px] bg-white'></div>
          </div>
        </div>
      </Link>

      <div className="relative grid grid-cols-1 md:grid-cols-3 h-full">
        {/* Image 1 */}
        <div className="relative col-span-1 md:col-span-1">
          <Image
            src="/assets/vmkolkata.jpg"
            alt="Image 3"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
          <div className="absolute inset-x-0 top-1/3 transform -translate-y-1/2 bg-black bg-opacity-30 flex flex-col justify-center lg:justify-between gap-1 lg:min-h-20 text-white text-center">
            <p className="text-lg md:text-2xl text-white font-semibold my-1">HYDERABAD</p>
            <div className='hidden lg:block'>
            <p className="text-white text-xs font-semibold">OFF NO 208, BALAJI TOWER C, MIYAPUR X</p>
            <p className="text-white text-xs font-semibold">ROADS, HYDERABAD, TELENGANA, INDIA</p>
            </div>
          </div>
        </div>
        {/* Image 2 */}
        <div className="relative col-span-1 md:col-span-1 hidden md:block">
          <Image
            src="/assets/canada.jpg"
            alt="Image 1"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
            <div className="absolute inset-x-0 top-1/3 transform -translate-y-1/2 bg-black bg-opacity-30 flex flex-col justify-center lg:justify-between gap-1 lg:min-h-20 text-white text-center">
            <p className="text-lg md:text-2xl text-white font-semibold my-1">CALGARY</p>
            <div className='hidden lg:block'>
              <p className="text-white text-xs font-semibold">820 26 ST NE</p>
              <p className="text-white text-xs font-semibold">CALGARY AB, T2A 2M4, CANADA</p>
            </div>
          </div>
        </div>
        {/* Image 3 */}
        <div className="relative col-span-1 md:col-span-1 hidden md:block">
          <Image
            src="/assets/hussain.jpg"
            alt="Image 2"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
            <div className="absolute inset-x-0 top-1/3 transform -translate-y-1/2 bg-black bg-opacity-30 flex flex-col justify-center lg:justify-between gap-1 lg:min-h-20 text-white text-center">
            <p className="text-lg md:text-2xl text-white font-semibold my-1">KOLKATA</p>
            <div className='hidden lg:block'>
              <p className="text-white text-xs font-semibold">4TH FLOOR, BROJODHAM TOWER, AIRPORT</p>
              <p className="text-white text-xs font-semibold">GATE NO 1, DUMDUM, KOLKATA, INDIA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBackground;
