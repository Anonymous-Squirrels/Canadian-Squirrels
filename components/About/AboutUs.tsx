'use client';
import { Sparkle } from '@/constants/Icons';
import React, { useEffect, useRef, useState } from 'react';

function AboutUs() {
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
    if (brand < 34 && intersecting) {
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
    <div
      id="about-us"
      className="md:min-h-screen w-full dark:bg-black  bg-light-purple dark:text-white text-black py-9 md:py-16 flex flex-col items-center relative md:overflow-hidden"
      ref={divRef}
    >
      <div className="flex w-full items-center justify-center text-2xl py-9 md:relative">
        <div className="w-fit flex items-center justify-center md:absolute md:left-24 gap-2">
          <Sparkle /> <span className="uppercase">About US</span>
        </div>
      </div>
      <div className="h-full w-full flex flex-col items-center gap-y-20 md:gap-y-24 font-bold">
        <div className="w-full md:px-56">
          <span className="text-xl md:text-3xl px-5 text-center md:px-56 inline-block w-full">
            We are a{' '}
            <span className="text-[#7B61FF]">
              team of storytellers, creative wizards and tech geeks
            </span>{' '}
            who help you convey{' '}
            <span className="text-[#7B61FF]">your story better</span>
          </span>
        </div>
        <div className="flex w-full items-center justify-between md:justify-center gap-x-5 md:gap-20 px-7">
          <div className="border-b-4 md:border-b-8 border-[#7B61FF] text-center pb-8 md:w-44 w-32 flex flex-col gap-5 min-h-36">
            <span className="text-[#7B61FF] text-4xl md:text-7xl">
              {brand}+
            </span>
            
            {/* <span>Brands</span> */}
            <span>Dental Clinics</span>
          </div>
          <div className="border-b-4 md:border-b-8 border-[#7B61FF] text-center pb-8 md:w-44 w-32 flex flex-col gap-5 min-h-36">
            <span className="text-[#7B61FF] text-4xl md:text-7xl">
              {domain}+
            </span>

            {/* <span>Domains</span> */}
            <span>Healthcare Chains</span>
          </div>
          <div className="border-b-4 md:border-b-8 border-[#7B61FF] text-center pb-8 md:w-44 w-32 flex flex-col gap-5 min-h-36">
            <span className="text-[#7B61FF] text-4xl md:text-7xl">
              {country}+
            </span>
            
            {/* <span>Countries</span> */}
            <span>Countries</span>
          </div>
        </div>
        <div className="md:mx-72 w-full md:px-52 px-6 text-center dark:text-white text-[#7B61FF] font-normal text-base text-md md:text-lg">
          {/* We are a Brand Strategy and Content Marketing agency, helping
          companies to brand better with tailored strategies and convey their
          business stories better than ever. */}
          We&apos;re your partners in healthcare and dental marketing. Our team
          of skilled professionals will develop effective branding strategies,
          create engaging content, and leverage the latest digital technologies
          to help your practice stand out.
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
