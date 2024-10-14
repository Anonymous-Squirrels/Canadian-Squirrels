import React from 'react';
import Image from 'next/image';
import { UIUX } from '@/constants/services';

const Design = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-7 gap-5 border-black w-full mx-auto">
      <div className="col-span-1 md:col-span-2 flex flex-col gap-5 items-center justify-center">
        {UIUX.slice(0, 3).map((item, index) => (
          <div
            className="w-44 h-12 xl:w-72 xl:h-16 bg-[#D0D0D0] text-[#3F2068] text-xl xl:text-2xl font-semibold rounded-lg xl:rounded-2xl flex items-center justify-center"
            key={index}
          >
            <p>{item.name}</p>
          </div>
        ))}
      </div>

      <div className="ol-span-1 md:col-span-3 flex items-start justify-center">
        <div className="relative flex items-start justify-center">
          <Image
            src="/assets/figma.png"
            alt="logo"
            width={600}
            height={1000}
            className="h-[300px] w-auto md:h-[380px] xl:h-[520px] z-10"
          />
          <Image
            src="/assets/xd.png"
            alt="logo"
            width={300}
            height={300}
            className="absolute top-2 right-0 xl:-right-2 h-[100px] w-[100px] md:h-[150px] md:w-[150px] xl:h-[200px] xl:w-[200px]"
          />
          <Image
            src="/assets/ai.png"
            alt="logo"
            width={300}
            height={300}
            className="absolute bottom-0 right-0 h-[100px] w-[100px] md:h-[150px] md:w-[150px] xl:h-[200px] xl:w-[200px]"
          />
          <Image
            src="/assets/ps.png"
            alt="logo"
            width={300}
            height={300}
            className="absolute bottom-0 left-0 h-[100px] w-[100px] md:h-[150px] md:w-[150px] xl:h-[200px] xl:w-[200px]"
          />
        </div>
      </div>

      <div className="col-span-1 md:col-span-2 flex flex-col gap-5 items-center justify-center">
        {UIUX.slice(3, 6).map((item, index) => (
          <div
            className="w-44 h-12 xl:w-72 xl:h-16 bg-[#D0D0D0] leading-6 text-[#3F2068] text-xl xl:text-2xl font-semibold rounded-lg xl:rounded-2xl flex items-center justify-center text-center"
            key={index}
          >
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Design;
