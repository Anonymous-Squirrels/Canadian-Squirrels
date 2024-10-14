import { Blob } from '@/constants/Icons';
import Image from 'next/image';
import React from 'react';

function HeroSection({
  title,
  image,
  tag,
}: {
  title: string | undefined;
  image: string | undefined;
  tag: string[] | undefined;
}) {
  return (
    <div className="h-fit md:h-[85vh] bg-black text-white flex flex-col md:flex-row items-center justify-around md:justify-between gap-10 overflow-hidden pt-12 md:pt-0">
      <div className="w-full md:w-2/5 md:pl-32 mb-5 md:mb-20 order-2 md:order-first z-10 px-6 md:px-0">
        <span className="text-4xl md:text-7xl font-medium">{title}</span>
        <div className="my-5">Brand Strategy Success Story</div>
        <div className="my-5">
          {tag?.map((i) => (
            <span
              key={i}
              className="px-2 mr-2 py-1 border-[#7B61FF] border rounded-full text-sm md:text-base text-center"
            >
              {i}
            </span>
          ))}
        </div>
      </div>

      <div className="md:relative z-10 md:top-0 ">
        {image && (
          <Image
            src={image}
            alt={title || 'title'}
            width={520}
            height={520}
            className=" z-10 relative w-[360px] h-64 md:w-full md:h-fit rounded-md md:rounded-none"
          />
        )}
        <div className="hidden md:block absolute z-0 border-4 border-white h-20 w-full top-0 translate-x-10 -translate-y-5"></div>
      </div>
    </div>
  );
}

export default HeroSection;
