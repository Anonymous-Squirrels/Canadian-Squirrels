import React from 'react';
import styles from '@/style/Services.module.css';
import Button from '../ui/Button';
import { LightArrowRight,DarkArrowRight, DownArrow } from '@/constants/Icons';
import Link from 'next/link';

function HeroSection() {
  return (
    <div className="h-[85vh] md:h-[100vh] relative w-full dark:bg-black bg-light-purple dark:text-white text-black flex flex-col items-center">
      <div className="relative top-1/2 w-full h-fit">
        <div className={`${styles.blob} md:w-[639px] w-[360px]`}></div>
        <div className="text-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 grid place-items-center gap-10">
          <div className="text-3xl dark:text-[#C1C1C1] text-dark-purple md:text-6xl font-semibold md:w-[50vw] w-[85vw]">
            We Provide Services. A Lot...
          </div>
          <div className="dark:text-[#C1C1C1] text-black text-sm md:text-lg">
            Enhance every aspect of your business sales, ensuring <br />
            satisfaction, loyalty, and unparalleled service.
          </div>

          <div className="grid place-items-center ">
            <Link href={'/contact'}>
              <Button
                variant="secondary"
                className="dark:text-white text-black hover:text-white flex items-center gap-3 group"
              >
                Contact Us
                <LightArrowRight className="group-active:rotate-45 hidden dark:block md:group-hover:rotate-45 transition-all duration-300" />
                <DarkArrowRight className="group-active:rotate-45 dark:hidden block md:group-hover:rotate-45 transition-all duration-300" />

              </Button>
            </Link>

            
          </div>
        </div>
      </div>

      <div className="z-20 absolute bottom-16 md:bottom-9">
        <Link href="#ui-design" className={'h-11 w-11 md:w-14 md:h-14'}>
          <DownArrow
            color="white"
            className="animate-bounce dark:block hidden h-11 w-11 md:w-14 md:h-14"
          />
                   <DownArrow
          color="black"
          className="animate-bounce dark:hidden block h-11 w-11 md:w-14 md:h-14"
        />
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
