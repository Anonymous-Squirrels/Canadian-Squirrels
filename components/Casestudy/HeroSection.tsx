import { Blob, DownArrow,  } from '@/constants/Icons';
import React from 'react';
import Image from 'next/image';

function HeroSection() {
  return (
    <div className="bg-[#F0E9FB] dark:bg-[#0E0E0E] h-[60vh] md:h-screen w-full grid place-items-center text-white relative px-10 overflow-hidden">
      <Image
        src="/logo/logoas.svg"
        alt="logo"
        width={200}
        height={500}
        className="absolute right-0 w-24 md:w-96 bottom-0"
      />
      <div className="absolute md:hidden -left-64 -translate-x-1/2 overflow-hidden -top-[430px]">
        <Blob variant="violet" />
      </div>
      <div className="absolute md:hidden -right-32 translate-x-1/2 top-36">
        <Blob variant="yellow" />
      </div>
      <div className="text-center flex flex-col md:gap-5 dark:text-white text-[#5C3095]">
        <span className="text-2xl md:text-6xl font-bold">
          We have completed over
        </span>
        <span className="text-3xl text-center md:text-7xl font-extrabold underline  text-[#905FCF]">
          350+
        </span>
        <span className="text-2xl md:text-6xl font-bold">
          Projects till date.
        </span>
      </div>
      <div className="absolute bottom-10 z-20 ">
        <DownArrow
          color="black"
          className="animate-bounce dark:hidden block h-11 w-11 md:w-14 md:h-14"
        />
                <DownArrow
          color="white"
          className="animate-bounce dark:block hidden h-11 w-11 md:w-14 md:h-14"
        />
      </div>
    </div>
  );
}

export default HeroSection;
