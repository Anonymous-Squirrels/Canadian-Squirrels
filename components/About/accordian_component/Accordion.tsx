'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import ProcessAccordion from '@/components/About/accordian_component/ProcessAccordion';
import { data } from '@/constants/ProcessAccordianData';

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="w-full md:w-1/2 z-20">
        <ProcessAccordion
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          data={data}
        />
      </div>

      <div className="hidden md:flex md:h-fit md:w-1/2 ">
        <div className="w-full relative z-20">
          {activeIndex !== null ? (
            <Image
              src={`/${data[activeIndex].image}`}
              alt={data[activeIndex].image.replace('about_services/', '')}
              width={500}
              height={500}
              className="h-[500px] w-[500px]"
            />
          ) : (
            <Image
              src="/assets/gear.png"
              width={500}
              height={500}
              alt="gear"
              className="h-fit w-fit"
            />
          )}
        </div>
      </div>

      <div className="md:hidden w-[150%] h-[300px] md:h-fit md:w-1/2 ">
        <div className="w-full relative z-20">
          <Image
            src="/assets/gear.png"
            width={500}
            height={500}
            alt="gear"
            className="h-[480px] w-[480px] md:h-fit md:w-fit absolute md:static left-7 -top-10"
          />
        </div>
      </div>
    </>
  );
}
