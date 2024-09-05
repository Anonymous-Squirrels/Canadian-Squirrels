'use client'
import React, { useState, useEffect } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { format, toZonedTime } from 'date-fns-tz';
import { TfiEmail } from "react-icons/tfi";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import Image from 'next/image';

const ThankYou = () => {
  const [calgaryTime, setCalgaryTime] = useState('');

  useEffect(() => {
    const updateCalgaryTime = () => {
      // Get current time in UTC
      const now = new Date();
      
      // Define the time zone for Calgary
      const timeZone = 'America/Edmonton';
      
      // Convert UTC time to Calgary time
      const zonedTime = toZonedTime(now, timeZone);
      
      // Format the time (HH:MM AM/PM)
      const formattedTime = format(zonedTime, 'hh:mm a', { timeZone });
      setCalgaryTime(formattedTime);
    };

    // Update the time immediately and then every minute
    updateCalgaryTime();
    const interval = setInterval(updateCalgaryTime, 1000); // Update every minute

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full md:mt-10 mt-5'>
        <div className='p-5 mb-5 md:mb-10'>
        <div className="flex items-center gap-3 md:mt-4 ml-2 justify-center">
        <div className="w-5 md:w-28 h-[4px] bg-white"></div>
        <div className="text-xl font-bold md:text-5xl text-[#5237D8]">THANK YOU</div>
        <div className="w-5 md:w-28 h-[4px] bg-white"></div>
      </div>
      <p className='text-white text-center font-bold text-lg md:text-2xl mt-2'>Let us Keep in touch</p>
      <div className='mt-10 md:mt-20 md:gap-5 text-white max-w-xl mx-auto'>
        <div className='flex items-center justify-between gap-10'>
          <div className=''>
            <p className='text-3xl md:text-6xl font-bold'>CANADA</p>
            <p className='mt-2 text-xl md:text-3xl'>
            {calgaryTime}
            </p>
          </div>
          <Image
          src="/assets/calgary.png"
          alt="logo"
          width={112}
          height={112}
          className=" w-fit h-16 sm:h-28"
          />
        </div>
        <div className='mt-5 flex md:flex-row flex-col justify-between gap-2'>
          <div className='flex gap-5 justify-start items-center text-base md:text-xl'>
            <FaLocationDot className='text-base md:text-2xl text-white'/>
            <p>Calgary</p>
          </div>
          <div className='flex gap-5 justify-start items-center text-base md:text-xl'>
          <TfiEmail className='text-base md:text-2xl text-white'/>
          <a href="mailto:kingshuk@thesquirrels.ca" className="text-white hover:underline">
            kingshuk@thesquirrels.ca
          </a>
        </div>
        </div>
      </div>
        </div>
      
      <div className='w-full flex flex-col md:flex-row md:gap-10 items-center justify-center px-2 py-5 bg-[#8F00FF] text-white'>
            <div className='flex gap-1 justify-start items-center text-base md:text-xl'>
            <CiLinkedin className='text-2xl md:text-5xl'/>
            <div className='text-2xl md:text-5xl'>/</div>
            <a
              href="https://www.linkedin.com/company/anonymous-squirrels/?viewAsMember=true"
              target="_blank"
              rel="linkedinlink"
              className='text-xs md:text-lg font-semibold'
            >
              linkedin.com/company/anonymous-squirrels/
            </a>
            </div>
            

            <div className='flex gap-1 justify-start items-center text-base md:text-xl'>
            <IoLogoInstagram className='text-2xl md:text-5xl'/>
            <div className='text-2xl md:text-5xl'>/</div>
            <a
              href="https://www.instagram.com/anonymous_squirrels/?igsh=MzRlODBiNWFlZA%3D%3D"
              target="_blank"
              rel="linkedinlink"
              className='text-xs md:text-lg font-semibold'
            >
              anonymous_squirrels
            </a>
            </div>
      </div>
    </div>
  );
}

export default ThankYou;
