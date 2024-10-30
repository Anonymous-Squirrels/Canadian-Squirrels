'use client';
import React, { useState, useEffect } from 'react';
import { FaLocationDot, FaEnvelope, FaPhone } from 'react-icons/fa6';
import { format, toZonedTime } from 'date-fns-tz';
import Image from 'next/image';
import Button from '../ui/Button';

const ThankYou = () => {
  const [indiaTime, setIndiaTime] = useState('');
  const [calgaryTime, setCalgaryTime] = useState('');

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();

      // India Time Zone
      const indiaZone = 'Asia/Kolkata';
      const indiaZonedTime = toZonedTime(now, indiaZone);
      const formattedIndiaTime = format(indiaZonedTime, 'hh:mm a', {
        timeZone: indiaZone,
      });
      setIndiaTime(formattedIndiaTime);

      // Calgary (Canada) Time Zone
      const calgaryZone = 'America/Edmonton';
      const calgaryZonedTime = toZonedTime(now, calgaryZone);
      const formattedCalgaryTime = format(calgaryZonedTime, 'hh:mm a', {
        timeZone: calgaryZone,
      });
      setCalgaryTime(formattedCalgaryTime);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-light-purple dark:bg-black md:mt-10 mt-5">
      <div className="p-5">
        <div className="flex items-center gap-3 md:mt-4 ml-2 justify-center">
          <div className="w-5 md:w-28 h-[4px] dark:bg-white bg-black"></div>
          <div className="text-3xl font-bold md:text-5xl text-[#5237D8]">
            THANK YOU
          </div>
          <div className="w-5 md:w-28 h-[4px] dark:bg-white bg-black"></div>
        </div>
        <p className="dark:text-white text-black text-center font-bold text-lg md:text-2xl mt-2">
          Let us Keep in touch
        </p>
        <div className="mt-10 md:mt-20 flex flex-col lg:flex-row justify-between gap-10 dark:text-white text-black max-w-6xl mx-auto">
          {/* Canada Section */}
          <div className="">
            <div className="flex justify-between gap-10">
              <div className="">
                <p className="text-3xl md:text-6xl font-bold">CANADA</p>
                <p className="mt-2 text-xl md:text-3xl">{calgaryTime}</p>
              </div>
              <Image
                src="/assets/calgary1.png"   // Change in light theme
                alt="Canada logo"
                width={112}
                height={112}
                className=" w-fit h-16 dark:hidden block sm:h-28"
              />
                  <Image
                src="/assets/calgary.png"          // change in dark theme
                alt="Canada logo"
                width={112}
                height={112}
                className=" w-fit h-16 dark:block hidden sm:h-28"
              />
            </div>
            <div className="flex gap-5 justify-start items-center text-base mt-2 md:mt-5 md:text-xl">
              <FaLocationDot className="text-base md:text-2xl text-red-600" />
              <p>Calgary</p>
            </div>
            <div className="flex gap-5 items-center mt-2 md:mt-5 text-base md:text-xl">
              <p>820 26 St NE Calgary AB, T2A 2M4, Canada</p>
            </div>
            <div className="space-y-2 md:space-y-5">
              <div className="flex gap-5 items-center mt-4 text-base md:text-xl">
                <FaEnvelope className="text-lg md:text-2xl" />
                <a href="mailto:hello@thesquirrels.ca">hello@thesquirrels.ca</a>
              </div>
              <div className="flex gap-5 items-center text-base md:text-xl">
                <FaPhone className="text-lg md:text-2xl" />
                <div>
                  <a href="tel:+15879623062">+1(587)962-3062</a>
                  <br />
                  <a href="tel:+15879623182">+1(587)962-3182</a>
                </div>
              </div>
            </div>
          </div>
          {/* India Section */}
          <div className="space-y-5 w-96">
            <div className="flex justify-between gap-10">
              <div className="">
                <p className="text-3xl md:text-6xl font-bold">INDIA</p>
                <p className="mt-2 text-xl md:text-3xl">{indiaTime}</p>
              </div>
              <Image
                src="/assets/indian.png"
                alt="India logo"
                width={112}
                height={112}
                className="w-fit h-16 sm:h-28 dark:hidden block"
              />
              <Image
                src="/assets/india.png"
                alt="India logo"
                width={112}
                height={112}
                className="w-fit h-16 sm:h-28 dark:block hidden"
              />
            </div>
            <div className="flex gap-5 items-center mt-2 md:mt-5 text-base md:text-xl">
              <FaLocationDot className="text-base md:text-2xl text-red-600" />
              <p>Hyderabad, Kolkata & Ranchi</p>
            </div>
            <div className="flex gap-5 items-center mt-2 md:mt-5 text-base md:text-xl">
              <p>Off No 208, Balaji Tower C, Miyapur X Roads, Hyderabad, Telengana, India</p>
            </div>
            <div className="flex gap-5 items-center mt-2 md:mt-5 text-base md:text-xl">
              <p>4th Floor, Brojodham Tower, Airport Gate No 1, Dumdum, Kolkata, India</p>
            </div>
            <div className="flex gap-5 items-center mt-2 md:mt-5 text-base md:text-xl">
              <FaEnvelope className="text-lg md:text-2xl" />
              <a href="mailto:hello@thesquirrels.ca">hello@thesquirrels.ca</a>
            </div>
            <div className="flex gap-5 items-center mt-2 md:mt-5 text-base md:text-xl">
              <FaPhone className="text-lg md:text-2xl" />
              <a href="tel:+919122823474">+91 9122823474</a>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-48 flex flex-col xl:flex-row items-center justify-between text-center py-5 md:py-10 bg-white">
        <div>
          <div className="text-xl md:text-3xl text-black font-semibold">
            <span className="">View our portfolio and</span>{' '}
            <span className="text-[#444BD3]">services for more insights.</span>
          </div>
        </div>
        <a href="/Brochure.pdf" target="_blank" rel="noopener noreferrer">
          <Button
            variant="primary"
            className="mt-4 px-6 rounded-lg bg-[#444BD3] hover:border-[#444BD3] hover:bg-transparent hover:text-black border-transparent border"
          >
            Our Brochure
          </Button>
        </a>
      </div>
    </div>
  );
};

export default ThankYou;
