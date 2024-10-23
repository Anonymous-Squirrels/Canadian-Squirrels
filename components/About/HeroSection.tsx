import { Blob, DownArrow, LightTextLogo, DarkTextLogo } from '@/constants/Icons';
import React from 'react';

function HeroSection() {
  return (
    <div className="dark:bg-black bg-light-purple h-screen md:h-[100vh] w-full grid place-items-center dark:text-white text-black relative px-10 overflow-hidden">
      <LightTextLogo
       className="absolute -left-16 hidden dark:block md:left-0 h-96 w-96 top-24 md:top-0" />  
          <DarkTextLogo
       className="absolute -left-16 md:left-0 dark:hidden block h-96 w-96 top-24 md:top-0" />  

      <div className="absolute md:hidden -left-64 -translate-x-1/2 overflow-hidden -top-[430px]">
        <Blob variant="violet" />
      </div>
      <div className="absolute md:hidden -right-32 translate-x-1/2 top-36">
        <Blob variant="yellow" />
      </div>
      <div className="mb-44 text-center">
        <span className="text-2xl md:text-3xl">
          Nice to meet you, we&apos;re
        </span>
        <br />
        <span className="text-5xl text-center md:text-8xl font-extrabold">
          Anonymous Squirrels
        </span>
      </div>
      <div className="absolute bottom-10 z-20 ">
        <DownArrow
          color="white"
          className="animate-bounce dark:block hidden h-11 w-11 md:w-14 md:h-14"
        />
           <DownArrow
          color="black"
          className="animate-bounce dark:hidden block h-11 w-11 md:w-14 md:h-14"
        />
      </div>
    </div>
  );
}

export default HeroSection;
