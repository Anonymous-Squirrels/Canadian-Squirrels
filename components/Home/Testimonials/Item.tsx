import GlassMorphism from '@/components/ui/GlassMorphism';
import Image from 'next/image';
import React from 'react';
import { ImQuotesRight } from 'react-icons/im';

function Item({
  content,
  image,
  designation1,
  designation2,
  rating,
  name,
}: {
  content: string;
  image: string;
  designation1: string;
  designation2: string;
  rating: number;
  name: string;
}) {
  return (
    <div className="bg-[#161616] rounded-lg md:rounded-2xl w-[310px] md:w-full h-full flex flex-col justify-between gap-2 px-2 py-5">
      <div className="w-full text-left text-sm md:text-base 2xl:text-lg 2xl:leading-2 md:px-6">
        {content}
      </div>
      <div className="flex items-center justify-between text-sm font-light md:px-3">
        <div className="flex items-center gap-2 md:gap-x-6">
          <div className="flex-shrink-0 h-12 w-12 md:h-14 md:w-14 mb-auto relative">
            <Image
              src={image}
              alt={name}
              className="rounded-full object-cover"
              fill
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="text-sm md:text-xl text-left w-full">{name}</span>
            <span className="text-sm md:text-base font-thin text-left w-full">
              {designation1}
            </span>
            <span className="text-sm md:text-base font-thin text-left w-full">
              {designation2}
            </span>
            {/* <div className="w-full">
          <span className="w-fit grid grid-cols-5">
            {Array(rating)
              .fill(null)
              .map((_, index) => (
                <span key={index}>⭐</span>
              ))}
          </span>
        </div> */}
          </div>
        </div>
        {/* <ImQuotesRight className="h-10 w-10 md:h-20 md:w-20 text-[#434343]"/> */}
      </div>
    </div>
  );
}

export default Item;
