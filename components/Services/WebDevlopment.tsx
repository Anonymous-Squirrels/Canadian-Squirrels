import React from 'react';
import FAB from "../ui/FAB";
import { WebDevData } from '@/constants/WebDev';
import { RiNextjsLine } from "react-icons/ri";
import { FaWordpress, FaWix } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";

const WebDevelopment = () => {
  return (
    <div className='w-full p-4 md:p-10 bg-black flex flex-col justify-center items-center'>
      <FAB variant="secondary" className="self-center select-none">
        Web Development
      </FAB>
      
      <div className='relative px-5 pt-14 pb-5 mt-7 md:mt-28 mb-7 md:mb-20 bg-[#111111] rounded-xl'>
        <div className='flex flex-col gap-y-5 max-w-2xl'>
          <div className='text-white text-center'>
            MERN Stack Development
          </div>
          <div className='text-[#969696] text-center'>
            We craft scalable, high-performance solutions using MongoDB, Express, React, and Node.js 
            to meet your business needs. We craft scalable, high-performance solutions using MongoDB, 
            Express, React, and Node.js to meet your business needs.
          </div>
        </div>
        <div className='absolute -top-16 left-0 hidden md:flex justify-evenly gap-x-5 w-[710px]'>
            <div className='w-24 h-24 p-3 rounded-full bg-slate-500 shadow-valuesContainerShadow'>
                <SiExpress className='text-white h-full w-full' />
            </div>
            <div className='w-24 h-24 p-3 rounded-full bg-zinc-900 shadow-valuesContainerShadow'>
                <SiMongodb className='text-lime-500 h-full w-full' />
            </div>
            <div className='w-24 h-24 p-3 rounded-full bg-zinc-900 shadow-valuesContainerShadow'>
                <FaReact className='text-blue-400 h-full w-full' />
            </div>
            <div className='w-24 h-24 p-3 rounded-full bg-zinc-900 shadow-valuesContainerShadow'>
                <FaNode className='text-lime-500 h-full w-full' />
            </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-7 mb-20 max-w-[1244px]'>
        <div className='relative p-5 bg-[#111111] rounded-xl'>
          <div className='flex flex-col gap-y-5 max-w-2xl items-center'>
            <div className='flex gap-x-9'>
              <div className='text-center'>
                <div className='w-20 h-20 p-2 rounded-xl bg-black shadow-valuesContainerShadow mb-4'>
                <RiNextjsLine className='text-white h-full w-full' />
                </div>
                <p className='text-white'>Next.JS</p>
              </div>
            </div>
            <div className='text-[#969696] text-center'>
              Elevate your web presence with our cutting-edge 
              React.js and Next.js development services.
            </div>
          </div>
        </div>

        <div className='relative p-5 bg-[#111111] rounded-xl'>
          <div className='flex flex-col gap-y-5 max-w-2xl items-center'>
            <div className='flex gap-x-9'>
              <div>
                <div className='w-20 h-20 p-2 rounded-xl bg-white shadow-valuesContainerShadow mb-4'>
                  <FaWordpress className='text-black h-full w-full' />
                </div>
                <p className='text-white'>WordPress</p>
              </div>
              <div>
                <div className='w-20 h-20 p-2 rounded-xl bg-white shadow-valuesContainerShadow mb-4'>
                  <FaWix className='text-black h-full w-full' />
                </div>
                <p className='text-white'>Wix Studio</p>
              </div>
            </div>
            <div className='text-[#969696] text-center'>
            Step into your basic online presence with our custom WordPress solutions & stands out in a 
            crowded digital landscape with our Wordpress and Wix Studio solutions to stand out in a crowded
            </div>
          </div>
        </div>

        <div className='relative p-5 bg-[#111111] rounded-xl'>
          <div className='flex flex-col gap-y-5 max-w-2xl items-center'>
            <div className='flex gap-x-9'>
              <div className='text-center'>
                <div className='w-20 h-20 p-2 rounded-xl bg-white shadow-valuesContainerShadow mb-4'>
                <FaShopify className='text-lime-500 h-full w-full' />
                </div>
                <p className='text-white'>Next.JS</p>
              </div>
            </div>
            <div className='text-[#969696] text-center'>
            Custom store designs to powerful integrations, we create user-friendly, conversion-optimized 
            online stores that drive sales and enhance your e-commerce brand.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebDevelopment;
