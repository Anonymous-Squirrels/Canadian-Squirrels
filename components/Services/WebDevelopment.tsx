import React from 'react';
import { RiNextjsLine } from "react-icons/ri";
import { FaWordpress, FaWix, FaShopify, FaReact, FaNode } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const WebDevelopment = () => {
  return (
    <div className='p-4 lg:w-1/2 col-span-1 bg-black flex flex-col justify-center items-center'>
      <div className='text-xl md:text-4xl font-semibold text-white text-center mb-5'>
        <span>WEB</span>
        <span className='text-[#9747FF] ml-2'>DEVELOPMENT</span>
      </div>
      
      <div className='flex flex-col gap-7 items-center justify-center'>
        <div className='relative px-5 pt-14 pb-5 mt-10 md:mt-24 bg-[#111111] rounded-xl'>
          <div className='-mt-20 md:-mt-24 lg:-mt-32 mb-2 flex justify-evenly gap-x-5 w-full'>
            <div className='w-12 h-12 md:w-24 md:h-24 p-1 md:p-3 rounded-full bg-slate-500 shadow-valuesContainerShadow'>
              <SiExpress className='text-white h-full w-full' />
            </div>
            <div className='w-12 h-12 md:w-24 md:h-24 p-1 md:p-3 rounded-full bg-zinc-900 shadow-valuesContainerShadow'>
              <SiMongodb className='text-lime-500 h-full w-full' />
            </div>
            <div className='w-12 h-12 md:w-24 md:h-24 p-1 md:p-3 rounded-full bg-zinc-900 shadow-valuesContainerShadow'>
              <FaReact className='text-blue-400 h-full w-full' />
            </div>
            <div className='w-12 h-12 md:w-24 md:h-24 p-1 md:p-3 rounded-full bg-zinc-900 shadow-valuesContainerShadow'>
              <FaNode className='text-lime-500 h-full w-full' />
            </div>
          </div>
          
          <div className='flex flex-col gap-y-5 w-full'>
            <div className='text-white text-center'>
              MERN Stack Development
            </div>
            <div className='text-[#969696] text-center'>
              We craft scalable, high-performance solutions using MongoDB, Express, React, and Node.js to meet your 
              business needs. We focus on creating easy-to-use, effective tools that help your business grow and 
              succeed.
            </div>
          </div>
        </div>
        
        <div className='flex flex-col md:flex-row gap-7 max-w-[1244px]'>
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
                <div className='text-center'>
                  <div className='w-20 h-20 p-2 rounded-xl bg-white shadow-valuesContainerShadow mb-4'>
                    <FaShopify className='text-lime-500 h-full w-full' />
                  </div>
                  <p className='text-white'>Shopify</p>
                </div>
              </div>
              <div className='text-[#969696] text-center'>
                Custom store designs to powerful integrations, we create user-friendly, conversion-optimized 
                online stores that drive sales and enhance your e-commerce brand.
              </div>
            </div>
          </div>
        </div>
        
        <div className='relative p-5 bg-[#111111] rounded-xl'>
          <div className='flex flex-col gap-y-5 items-center'>
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
      </div>
    </div>
  );
}

export default WebDevelopment;
