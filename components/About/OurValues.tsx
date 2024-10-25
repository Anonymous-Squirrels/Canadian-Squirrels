import { Sparkle } from '@/constants/Icons';
import Image from 'next/image';
import React from 'react';
import OurValuesCard from './OurValuesCard';
import { FaStar } from 'react-icons/fa';
import { IoPeople } from 'react-icons/io5';
import { FaHandshake } from 'react-icons/fa';

function OurValues() {
  return (
    <div className="dark:bg-black bg-[#dad9ff] dark:text-white text-black md:py-12 overflow-hidden">
      <div className=" w-full text-3xl py-9 px-7">
        <div className="w-fit flex items-center gap-x-3.5 justify-center md:absolute md:left-24">
          <Sparkle />{' '}
          <span className="uppercase text-2xl md:text-2xl">OUR VALUES</span>
        </div>

        <div className="flex flex-col md:flex-row md:flex-wrap gap-[20px] xl:gap-[30px] 2xl:gap-[50px] mt-[30px] md:mt-[100px] mx-auto justify-center">
          <div className="flex justify-center">
            <OurValuesCard
              icon={
                <IoPeople className="text-[30px] md:text-[40px]"></IoPeople>
              }
              label="Transparency"
              Classname=""
              content="Open communication and clarity are essential to our business philosophy. We believe in maintaining transparency in all our dealings, from project updates to financial reporting. Our clients always know where their project stands."
            />
          </div>
          <div className="flex justify-center">
            <OurValuesCard
              icon={
                <FaHandshake className=" text-[30px] md:text-[40px]"></FaHandshake>
              }
              label="Trust"
              Classname=""
              content="Trust is the cornerstone of every successful team. We believe in building relationships with our clients, founded on honesty, reliability, and integrity. Our team is committed to delivering on our promises and exceeding expectations."
            />
          </div>
          <div className="flex justify-center">
            <OurValuesCard
              icon={<FaStar className="text-[30px] md:text-[40px]"></FaStar>}
              label="Loyalty"
              Classname=""
              content={
                'We are dedicated to building long-lasting partnerships with our clients. Our loyalty lies in their success, and we are committed to supporting their growth and achieving their business goals. Our team is invested in the success of every client.'
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurValues;
