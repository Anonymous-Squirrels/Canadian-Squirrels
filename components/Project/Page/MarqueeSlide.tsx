'use client';

import React from 'react';
import Marquee from 'react-fast-marquee';
import {
  autoMobile,
  bfsi,
  edTech,
  healthCare,
  horeca,
  realEstate,
  row1Desktop,
  row2Desktop,
  rowMobile,
  services,
} from '@/constants/marqueeData';
import Image from 'next/image';
import GlassMorphism from '@/components/ui/GlassMorphism';
import { useEffect, useRef, useState } from 'react';

const MarqueeSlide = () => {
  const [brand, setBrand] = useState<number>(0);
  const [domain, setDomain] = useState<number>(0);
  const [country, setCountry] = useState<number>(0);
  const [intersecting, setIsIntersecting] = useState<boolean>(false);
  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (item) => {
        if (item[0].isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { threshold: 0.7 }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    if (intersecting && divRef.current) {
      observer.unobserve(divRef.current);
    }
  }, [intersecting]);

  useEffect(() => {
    if (brand < 54 && intersecting) {
      //54
      const id = setTimeout(() => {
        setBrand((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(id);
    }
  }, [brand, intersecting]);

  useEffect(() => {
    if (domain < 20 && intersecting) {
      const id = setTimeout(() => {
        setDomain((prev) => prev + 1);
      }, 200);
      return () => clearTimeout(id);
    }
  }, [domain, intersecting]);

  useEffect(() => {
    if (country < 4 && intersecting) {
      const id = setTimeout(() => {
        setCountry((prev) => prev + 1);
      }, 400);
      return () => clearTimeout(id);
    }
  }, [country, intersecting]);

  return (
    <div className="dark:bg-black bg-light-purple bg-lig dark:text-white text-black w-full h-fit" ref={divRef}>
      <div className=" sm:px-10 px-5 mx-auto">
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-xl md:text-4xl font-semibold dark:text-white text-black text-center mb-5">
              <span>HEALTH</span>
              <span className="text-[#9747FF] ml-2">CARE</span>
            </h2>

            <div>
     {/* dark theme */}
              <GlassMorphism
                variant="light"
                className="border border-white/25 hidden dark:block rounded-lg"
              >
                <Marquee className="w-full h-fit">
                  {healthCare.map((item, index) => (
                    <Image
                      key={index}
                      src={`/${item}`}
                      alt={item.replace('marquee/', '')}
                      height={250}
                      width={250}
                      className="mx-2 md:mx-7 w-[150px] h-[150px] md:w-[290px] md:h-[290px] rounded-md"
                    />
                  ))}
                </Marquee>
              </GlassMorphism>
           {/* light theme */}
              <GlassMorphism
                variant="dark"
                className="border border-white/25 dark:hidden block rounded-lg"
              >
                <Marquee className="w-full h-fit">
                  {healthCare.map((item, index) => (
                    <Image
                      key={index}
                      src={`/${item}`}
                      alt={item.replace('marquee/', '')}
                      height={250}
                      width={250}
                      className="mx-2 md:mx-7 w-[150px] h-[150px] md:w-[290px] md:h-[290px] rounded-md"
                    />
                  ))}
                </Marquee>
              </GlassMorphism>
            </div>
          </div>

          <div className="flex flex-col items-center gap-y-10 md:gap-y-16 font-bold md:my-10">
            <div className="w-full 2xl:px-56">
              <span className="text-base md:text-4xl px-5 text-center lg:px-56 inline-block w-full">
                We have also <span className="text-[#7B61FF]">worked with</span>
              </span>
            </div>
            <div className="flex w-full items-center justify-between md:justify-center gap-x-5 md:gap-20 px-7">
              <div className="border-b-4 md:border-b-8 border-[#7B61FF] text-center pb-8 md:w-44 w-24">
                <span className="text-[#7B61FF] text-4xl md:text-7xl">
                  54+
                </span>
                <br />
                {/* <span>Brands</span> */}
                <span className="text-xl">Brand</span>
              </div>
              <div className="border-b-4 md:border-b-8 border-[#7B61FF] text-center pb-8 md:w-44 w-24">
                <span className="text-[#7B61FF] text-4xl md:text-7xl">
                  20+
                </span>
                <br />
                {/* <span>Domains</span> */}
                <span className="text-xl">Industries</span>
              </div>
              <div className="border-b-4 md:border-b-8 border-[#7B61FF] text-center pb-8 md:w-44 w-24">
                <span className="text-[#7B61FF] text-4xl md:text-7xl">
                  4+
                </span>
                <br />
                {/* <span>Countries</span> */}
                <span className="text-xl">Countries</span>
              </div>
            </div>
            <div className="text-center text-base md:text-4xl px-5">
              Here are some of names in our{' '}
              <span className="text-[#7B61FF]">clientele</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-10 justify-between">
            <div className="md:w-[55%]">
              <h2 className="text-xl md:text-4xl font-semibold dark:text-white text-black text-center mb-5">
                <span>BF</span>
                <span className="text-[#9747FF]">SI</span>
              </h2>
            {/* dark theme */}
              <GlassMorphism
                variant="light"
                className="border border-white/25 rounded-lg hidden dark:block "
              >
                <Marquee className="w-full h-fit">
                  {bfsi.map((item, index) => (
                    <Image
                      key={index}
                      src={`/${item}`}
                      alt={item.replace('marquee/', '')}
                      height={180}
                      width={180}
                      className="m-2 w-[150px] h-[150px] md:w-[180px] md:h-[180px]"
                    />
                  ))}
                </Marquee>
              </GlassMorphism>
            {/* light theme */}
            <GlassMorphism
                variant="dark"
                className="border border-white/25 rounded-lg dark:hidden block "
              >
                <Marquee className="w-full h-fit">
                  {bfsi.map((item, index) => (
                    <Image
                      key={index}
                      src={`/${item}`}
                      alt={item.replace('marquee/', '')}
                      height={180}
                      width={180}
                      className="m-2 w-[150px] h-[150px] md:w-[180px] md:h-[180px]"
                    />
                  ))}
                </Marquee>
              </GlassMorphism>
            </div>
            <div className="md:w-[40%]">
              <h2 className="text-xl md:text-4xl font-semibold dark:text-white text-black text-center mb-5">
                <span>AUTO</span>
                <span className="text-[#9747FF] ml-2">MOBILE</span>
              </h2>
             {/* dark theme */}
              <GlassMorphism
                variant="light"
                className="border border-white/25 rounded-lg dark:block hidden"
              >
                <Marquee className="w-full h-fit" direction={'right'}>
                  {autoMobile.map((item, index) => (
                    <Image
                      key={index}
                      src={`/${item}`}
                      alt={item.replace('marquee/', '')}
                      height={180}
                      width={180}
                      className="m-2 w-[150px] h-[150px] md:w-[180px] md:h-[180px]"
                    />
                  ))}
                </Marquee>
              </GlassMorphism>
             {/* light theme */}
              <GlassMorphism
                variant="dark"
                className="border border-white/25 rounded-lg dark:hidden block"
              >
                <Marquee className="w-full h-fit" direction={'right'}>
                  {autoMobile.map((item, index) => (
                    <Image
                      key={index}
                      src={`/${item}`}
                      alt={item.replace('marquee/', '')}
                      height={180}
                      width={180}
                      className="m-2 w-[150px] h-[150px] md:w-[180px] md:h-[180px]"
                    />
                  ))}
                </Marquee>
              </GlassMorphism>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-10 justify-between">
            <div className="md:w-[55%]">
              <h2 className="text-xl md:text-4xl font-semibold dark:text-white text-black text-center mb-5">
                <span>REAL</span>
                <span className="text-[#9747FF] ml-2">ESTATE</span>
              </h2>
              {/* dark theme */}
              <GlassMorphism
                variant="light"
                className="border border-white/25 rounded-lg hidden dark:block"
              >
                <Marquee className="w-full h-fit" direction={'right'}>
                  {realEstate.map((item, index) => (
                    <Image
                      key={index}
                      src={`/${item}`}
                      alt={item.replace('marquee/', '')}
                      height={180}
                      width={180}
                      className="m-2 w-[150px] h-[150px] md:w-[180px] md:h-[180px]"
                    />
                  ))}
                </Marquee>
              </GlassMorphism>
              {/* light theme */}
              <GlassMorphism
                variant="dark"
                className="border border-white/25 rounded-lg dark:hidden block"
              >
                <Marquee className="w-full h-fit" direction={'right'}>
                  {realEstate.map((item, index) => (
                    <Image
                      key={index}
                      src={`/${item}`}
                      alt={item.replace('marquee/', '')}
                      height={180}
                      width={180}
                      className="m-2 w-[150px] h-[150px] md:w-[180px] md:h-[180px]"
                    />
                  ))}
                </Marquee>
              </GlassMorphism>
            </div>

            <div className="md:w-[40%]">
              <h2 className="text-xl md:text-4xl font-semibold dark:text-white text-black text-center mb-5">
                <span>Ed</span>
                <span className="text-[#9747FF]">TECH</span>
              </h2>
          {/* dark theme */}
              <GlassMorphism
                variant="light"
                className="border border-white/25 rounded-lg dark:block hidden"
              >
                <Marquee className="w-full h-fit">
                  {edTech.map((item, index) => (
                    <Image
                      key={index}
                      src={`/${item}`}
                      alt={item.replace('marquee/', '')}
                      height={180}
                      width={180}
                      className="m-2 w-[150px] h-[150px] md:w-[180px] md:h-[180px]"
                    />
                  ))}
                </Marquee>
              </GlassMorphism>
          {/* light theme */}
              <GlassMorphism
                variant="dark"
                className="border border-white/25 rounded-lg dark:hidden block"
              >
                <Marquee className="w-full h-fit">
                  {edTech.map((item, index) => (
                    <Image
                      key={index}
                      src={`/${item}`}
                      alt={item.replace('marquee/', '')}
                      height={180}
                      width={180}
                      className="m-2 w-[150px] h-[150px] md:w-[180px] md:h-[180px]"
                    />
                  ))}
                </Marquee>
              </GlassMorphism>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-4xl font-semibold dark:text-white text-black text-center mb-5">
              <span className="text-[#9747FF]">SERVICES</span>
              <span className="ml-2">and</span>
              <span className="text-[#9747FF] ml-2">D2C</span>
            </h2>
            <div>
              {/* dark theme */}
              <GlassMorphism
                variant="light"
                className="border border-white/25 rounded-lg hidden dark:block"
              >
                <Marquee className="w-full h-fit">
                  {services.map((item, index) => (
                    <Image
                      key={index}
                      src={`/${item}`}
                      alt={item.replace('marquee/', '')}
                      height={250}
                      width={250}
                      className="mx-2 md:mx-7 w-[150px] h-[150px] md:w-[290px] md:h-[290px]"
                    />
                  ))}
                </Marquee>
              </GlassMorphism>
              {/* light theme */}
              <GlassMorphism
                variant="dark"
                className="border border-white/25 rounded-lg dark:hidden block"
              >
                <Marquee className="w-full h-fit">
                  {services.map((item, index) => (
                    <Image
                      key={index}
                      src={`/${item}`}
                      alt={item.replace('marquee/', '')}
                      height={250}
                      width={250}
                      className="mx-2 md:mx-7 w-[150px] h-[150px] md:w-[290px] md:h-[290px]"
                    />
                  ))}
                </Marquee>
              </GlassMorphism>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-xl md:text-4xl font-semibold dark:text-white text-black text-center mb-5">
              <span className="text-[#9747FF]">HO</span>
              <span className="ml-2">-RE-</span>
              <span className="text-[#9747FF] ml-2">CA</span>
            </h2>
            <div>
              {/* dark theme */}
              <GlassMorphism
                variant="light"
                className="border border-white/25 rounded-lg dark:block hidden"
              >
                <Marquee className="w-full h-fit" direction={'right'}>
                  {horeca.map((item, index) => (
                    <Image
                      key={index}
                      src={`/${item}`}
                      alt={item.replace('marquee/', '')}
                      height={250}
                      width={250}
                      className="mx-2 md:mx-7 w-[150px] h-[150px] md:w-[290px] md:h-[290px]"
                    />
                  ))}
                </Marquee>
              </GlassMorphism>
              {/* light theme */}
              <GlassMorphism
                variant="dark"
                className="border border-white/25 rounded-lg dark:hidden block"
              >
                <Marquee className="w-full h-fit" direction={'right'}>
                  {horeca.map((item, index) => (
                    <Image
                      key={index}
                      src={`/${item}`}
                      alt={item.replace('marquee/', '')}
                      height={250}
                      width={250}
                      className="mx-2 md:mx-7 w-[150px] h-[150px] md:w-[290px] md:h-[290px]"
                    />
                  ))}
                </Marquee>
              </GlassMorphism>
            </div>
          </div>
        </div>

        <div className="pb-10 hidden md:block">
          <h2 className="text-xl md:text-4xl font-semibold dark:text-white text-black text-center mb-5">
            <span className="text-[#9747FF]">DRIVING</span>
            <span className="ml-2"> RESULTS</span>
            <br />
            <span className="text-[#828282] text-xl ml-2">
              Our Last 90-Day Recap
            </span>
          </h2>
          {/* dark theme */}
          <GlassMorphism
            variant="light"
            className="border border-white/25 rounded-lg dark:block hidden"
          >
            <Marquee className="w-full h-fit">
              {row1Desktop.map((item, index) => (
                <Image
                  key={index}
                  src={`/${item}`}
                  alt={item.replace('marquee/', '')}
                  height={290}
                  width={290}
                  className="mx-7 rounded-md object-cover w-[200px] h-[200px]"
                />
              ))}
            </Marquee>
          </GlassMorphism>

          {/* light theme */}
          <GlassMorphism
            variant="dark"
            className="border border-white/25 rounded-lg dark:hidden block"
          >
            <Marquee className="w-full h-fit">
              {row1Desktop.map((item, index) => (
                <Image
                  key={index}
                  src={`/${item}`}
                  alt={item.replace('marquee/', '')}
                  height={290}
                  width={290}
                  className="mx-7 rounded-md object-cover w-[200px] h-[200px]"
                />
              ))}
            </Marquee>
          </GlassMorphism>

{/* dark theme */}
          <GlassMorphism
            variant="light"
            className="border border-white/25 rounded-lg mt-7 dark:block hidden"
          >
            <Marquee className="w-full h-fit" direction={'right'}>
              {row2Desktop.map((item, index) => (
                <Image
                  key={index}
                  src={`/${item}`}
                  alt={item.replace('marquee/', '')}
                  height={290}
                  width={290}
                  className="mx-7 rounded-md object-cover w-[200px] h-[200px]"
                />
              ))}
            </Marquee>
          </GlassMorphism>

{/* light theme */}
          <GlassMorphism
            variant="dark"
            className="border border-white/25 rounded-lg mt-7 dark:hidden block"
          >
            <Marquee className="w-full h-fit" direction={'right'}>
              {row2Desktop.map((item, index) => (
                <Image
                  key={index}
                  src={`/${item}`}
                  alt={item.replace('marquee/', '')}
                  height={290}
                  width={290}
                  className="mx-7 rounded-md object-cover w-[200px] h-[200px]"
                />
              ))}
            </Marquee>
          </GlassMorphism>
        </div>

        <div className="w-full h-fit pb-5 block md:hidden">
          <h2 className="text-xl md:text-4xl font-semibold dark:text-white text-black text-center">
            <span className="text-[#9747FF]">DRIVING</span>
            <span className="ml-2"> RESULTS</span>
            <br />
            <span className="text-[#828282] text-xl ml-2">
              Our Last 90-Day Recap
            </span>
          </h2>
          {/* dark them */}
          <GlassMorphism
            variant="light"
            className="border border-white/25 rounded-lg hidden dark:block"
          >
            <Marquee className="w-full h-fit">
              {rowMobile.map((item, index) => (
                <Image
                  key={index}
                  src={`/${item}`}
                  alt={item.replace('marquee/', '')}
                  height={150}
                  width={150}
                  className="m-4 rounded-md"
                />
              ))}
            </Marquee>
          </GlassMorphism>

          {/* light theme */}
          <GlassMorphism
            variant="dark"
            className="border border-white/25 rounded-lg dark:hidden block"
          >
            <Marquee className="w-full h-fit" direction={'right'}>
              {rowMobile.map((item, index) => (
                <Image
                  key={index}
                  src={`/${item}`}
                  alt={item.replace('marquee/', '')}
                  height={150}
                  width={150}
                  className="m-4 rounded-md"
                />
              ))}
            </Marquee>
          </GlassMorphism>
        </div>
      </div>
    </div>
  );
};

export default MarqueeSlide;
