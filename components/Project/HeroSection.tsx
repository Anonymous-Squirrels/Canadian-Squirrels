import { Blob } from '@/constants/Icons';
import { Tags } from '@/constants/Projects';
import React from 'react';

function HeroSection({
  section,
  setSection,
}: {
  section: string;
  setSection: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="h-[50vh] md:h-[100vh] dark:bg-black bg-light-purple dark:text-white text-black grid place-items-center relative overflow-hidden">
      <span className="text-3xl md:text-7xl text-center font-semibold w-3/4 md:w-2/5 r-2">
        Here&apos;s some work we are{' '}
        <span className="text-[#5c3095] dark:text-[#7B61FF]">proud of</span>.
      </span>
      {/*<div className="flex items-center justify-center md:w-screen gap-5 md:gap-10 px-8 flex-wrap z-20">
        {Tags.map((i, index) => (
          <React.Fragment key={index}>
            <span
              className={`${
                section === i && "text-[#9747FF]"
              } cursor-pointer whitespace-nowrap`}
              onClick={() => setSection(i)}
            >
              {i}
            </span>
            {index < Tags.length - 1 && (
              <span
                className="border-[#5C3095] border-r border-l h-5"
              ></span>
            )}
          </React.Fragment>
        ))}
      </div>*/}
    </div>
  );
}

export default HeroSection;
