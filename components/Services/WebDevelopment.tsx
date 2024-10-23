import React from 'react';
import { RiNextjsLine } from 'react-icons/ri';
import { FaWordpress, FaWix, FaShopify, FaReact, FaNode } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';

const WebDevelopment = () => {
  return (
    <div className="p-4 lg:w-1/2 col-span-1">
      <div className="text-xl md:text-4xl font-semibold dark:text-white text-center mb-5">
        <span>WEB</span>
        <span className="text-[#9747FF] ml-2">DEVELOPMENT</span>
      </div>

      <div className="flex flex-col gap-7 items-center justify-center">
        <div className="relative px-5 pt-14 pb-5 mt-10 md:mt-24 dark:bg-[#111111] bg-white rounded-xl">
          <div className="-mt-20 md:-mt-24 lg:-mt-32 mb-2 flex justify-evenly gap-x-5 w-full">
            <div className="w-12 h-12 md:w-24 md:h-24 p-1 md:p-3 rounded-full bg-slate-500 shadow-valuesContainerShadow">
              <SiExpress className="text-white h-full w-full" />
            </div>
            <div className="w-12 h-12 md:w-24 md:h-24 p-1 md:p-3 rounded-full bg-zinc-900 shadow-valuesContainerShadow">
              <SiMongodb className="text-lime-500 h-full w-full" />
            </div>
            <div className="w-12 h-12 md:w-24 md:h-24 p-1 md:p-3 rounded-full bg-zinc-900 shadow-valuesContainerShadow">
              <FaReact className="text-blue-400 h-full w-full" />
            </div>
            <div className="w-12 h-12 md:w-24 md:h-24 p-1 md:p-3 rounded-full bg-white dark:bg-zinc-900 shadow-valuesContainerShadow">
              <FaNode className="dark:text-lime-500 text-black h-full w-full" />
            </div>
          </div>

          <div className="flex flex-col gap-y-5 w-full">
            <div className="dark:text-white text-black text-center">MERN Stack Development</div>
            <p className="dark:text-[#969696] text-black text-center">
              We craft{' '}
              <span className="dark:text-[#c4c2c2] text-black font-extrabold">
                scalable, high-performance
              </span>{' '}
              solutions using MongoDB, Express, React, and Node.js to meet your
              <span className="dark:text-[#c4c2c2] text-black font-extrabold">
                {' '}
                business needs
              </span>
              . We focus on creating{' '}
              <span className="dark:text-[#c4c2c2] text-black font-extrabold">
                {' '}
                easy-to-use, effective tools{' '}
              </span>{' '}
              that help your business grow and succeed.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-7 max-w-[1244px]">
          <div className="relative p-5 dark:bg-[#111111] bg-white rounded-xl">
            <div className="flex flex-col gap-y-5 max-w-2xl items-center">
              <div className="flex gap-x-9">
                <div className="text-center">
                  <div className="w-20 h-20 p-2 rounded-xl bg-black shadow-valuesContainerShadow mb-4">
                    <RiNextjsLine className="text-white h-full w-full" />
                  </div>
                  <p className="  text-black dark:text-white">Next.JS</p>
                </div>
              </div>
              <div className="  text-black dark:text-[#969696] text-center">
                Elevate your web presence with our cutting-edge
                <span className="  text-black dark:text-[#c4c2c2] font-extrabold">
                  {' '}
                  React.js and Next.js{' '}
                </span>{' '}
                development services.
              </div>
            </div>
          </div>

          <div className="relative p-5 dark:bg-[#111111] bg-white rounded-xl">
            <div className="flex flex-col gap-y-5 max-w-2xl items-center">
              <div className="flex gap-x-9">
                <div className="text-center">
                  <div className="w-20 h-20 p-2 rounded-xl dark:bg-white bg-black shadow-valuesContainerShadow mb-4">
                    <FaShopify className="text-lime-500 h-full w-full" />
                  </div>
                  <p className="text-black dark:text-white">Shopify</p>
                </div>
              </div>
              <div className="text-black dark:text-[#969696] text-center">
                Custom store designs to powerful integrations, we create
                <span className="text-black dark:text-[#c4c2c2] font-extrabold">
                  {' '}
                  user-friendly
                </span>
                , conversion-{' '}
                <span className="text-black dark:text-[#c4c2c2] font-extrabold"></span>optimized
                online stores that drive sales and enhance your{' '}
                <span className="text-black dark:text-[#c4c2c2] font-extrabold">
                  e-commerce brand
                </span>
                .
              </div>
            </div>
          </div>
        </div>

        <div className="relative p-5 dark:bg-[#111111] bg-white rounded-xl">
          <div className="flex flex-col gap-y-5 items-center">
            <div className="flex gap-x-9">
              <div>
                <div className="w-20 h-20 p-2 rounded-xl bg-white shadow-valuesContainerShadow mb-4">
                  <FaWordpress className="text-black h-full w-full" />
                </div>
                <p className="text-black dark:text-white">WordPress</p>
              </div>
              <div>
                <div className="w-20 h-20 p-2 rounded-xl bg-white shadow-valuesContainerShadow mb-4">
                  <FaWix className="text-black h-full w-full" />
                </div>
                <p className="text-black dark:text-white">Wix Studio</p>
              </div>
            </div>
            <div className="text-black dark:text-[#969696] text-center">
              Step into your basic online presence with our{' '}
              <span className="text-black dark:text-[#c4c2c2] font-extrabold">
                {' '}
                custom WordPress{' '}
              </span>{' '}
              solutions & stands out in a crowded{' '}
              <span className="text-black dark:text-[#c4c2c2] font-extrabold">
                {' '}
                digital landscape{' '}
              </span>{' '}
              with our{' '}
              <span className="text-black dark:text-[#c4c2c2] font-extrabold">
                {' '}
                Wordpress and Wix Studio{' '}
              </span>{' '}
              solutions to stand out in a crowded
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
