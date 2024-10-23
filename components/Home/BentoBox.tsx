'use client';
import React from 'react';
import { BentoItems } from '@/constants/BentoBox';
import GlassMorphism from '@/components/ui/GlassMorphism';

export function BentoBox() {
  return (
    <div className="bg-[url('/assets/baltic-rose.webp')] bg-cover text-white p-10 lg:p-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
        {/* Render all four boxes */}
        {BentoItems.slice(0, 2).map((item, i) => (
          <GlassMorphism
            key={i}
            variant={'light'}
            className=" md:min-h-[400px] h-full overflow-hidden rounded-xl transition duration-200 shadow-input dark:shadow-none p-4 space-y-4 w-full place-items-center"
          >
            <div className="text-sm transition duration-200 w-full flex flex-col items-center">
              <p className="text-center text-xl font-bold block mb-5">
                {item.title}
              </p>

              <p className="text-center text-xs md:text-lg inline-block text-[#D2D2D2]">
                {item.description}
              </p>
            </div>

            <div className="grid place-items-center items-center w-full">
              {item.content}
            </div>
          </GlassMorphism>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 mt-5 md:mt-10">
        {BentoItems.slice(2, 4).map((item, i) => (
          <GlassMorphism
            key={i}
            variant={'light'}
            className={` md:min-h-[400px] h-full overflow-hidden rounded-xl transition duration-200 shadow-input dark:shadow-none p-4 md:space-y-4 w-full place-items-center 
        ${i === 0 ? 'md:col-span-1' : ''}
        ${i === 1 ? 'md:col-span-2' : ''}`}
          >
            <div className="text-sm transition duration-200 w-full flex flex-col items-center">
              <p className="text-center text-xl font-bold block mb-5">
                {item.title}
              </p>
              <p className="text-center text-xs md:text-lg inline-block text-[#D2D2D2]">
                {item.description}
              </p>
            </div>
            <div className="grid place-items-center items-center w-full">
              {item.content}
            </div>
          </GlassMorphism>
        ))}
      </div>
    </div>
  );
}
