'use client';
import { Projects } from '@/constants/Projects';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import Button from '@/components/ui/Button';
import { LightArrowRight } from '@/constants/Icons';

interface projectTypes {
  name: string;
  tags: Array<string>;
  image: string;
  url: string;
}

function Main({ section }: { section: string }) {
  const [projectArray, setProjectArray] = useState<Array<projectTypes>>([
    ...Projects.slice(0, 4),
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    if (expand) {
      setIsLoading(true);
      setTimeout(() => {
        setProjectArray([...Projects]);
        setIsLoading(false);
      }, 1000);
    } else {
      setProjectArray([...Projects.slice(0, 4)]);
    }
  }, [expand]);

  return (
    <div className="dark:bg-black bg-light-purple dark:text-white text-black grid grid-cols-1 md:grid-cols-2 pb-7 pt-16 md:py-16 overflow-x-hidden relative">
      {projectArray
        .filter((i) => section === 'All' || i.tags?.includes(section))
        .map((i, index) => (
          <div
            key={index}
            className=" h-fit flex flex-col gap-y-1 md:gap-y-3 mb-9 md:mb-20 mx-9 md:mx-16 z-20"
          >
            <Link href={`/project/${i.url}`}>
              <Image
                src={i.image}
                alt={i.name}
                width={300}
                height={300}
                className="w-full rounded-md"
              />
            </Link>
            <div className="text-3xl font-medium my-2">
              <Link href={`/project/${i.url}`}>{i.name}</Link>
            </div>
            <div className="w-[80%] md:w-[60%] flex items-center justify-between gap-x-3">
              {i.tags?.map((j, index) => (
                <span
                  key={`${index}`}
                  className="px-1.5 py-1 border-[#7B61FF] border rounded-full text-xs md:text-base w-1/2 text-center"
                >
                  {j}
                </span>
              ))}
            </div>
          </div>
        ))}

      <div className="grid place-items-center md:col-span-2">
        {Projects.length > 4 && (
          <>
            {isLoading ? (
              <div
                aria-label="Loading..."
                role="status"
                className="flex items-center space-x-2"
              >
                <svg
                  className="h-6 w-6 md:h-10 md:w-10 animate-spin stroke-gray-500"
                  viewBox="0 0 256 256"
                >
                  <line
                    x1="128"
                    y1="32"
                    x2="128"
                    y2="64"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                  <line
                    x1="195.9"
                    y1="60.1"
                    x2="173.3"
                    y2="82.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                  <line
                    x1="224"
                    y1="128"
                    x2="192"
                    y2="128"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                  <line
                    x1="195.9"
                    y1="195.9"
                    x2="173.3"
                    y2="173.3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                  <line
                    x1="128"
                    y1="224"
                    x2="128"
                    y2="192"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                  <line
                    x1="60.1"
                    y1="195.9"
                    x2="82.7"
                    y2="173.3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                  <line
                    x1="32"
                    y1="128"
                    x2="64"
                    y2="128"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                  <line
                    x1="60.1"
                    y1="60.1"
                    x2="82.7"
                    y2="82.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                </svg>
                <span className="text-base md:text-3xl font-medium text-gray-500">
                  Loading...
                </span>
              </div>
            ) : (
              <Button
                variant="secondary"
                className="text-white text-sm md:text-xl flex items-center px-3 md:px-3.5 justify-around gap-3 group h-10 md:w-44 md:h-14"
                onClick={() => setExpand((prevState) => !prevState)}
              >
                {!expand ? 'View More' : 'View Less'}
                <LightArrowRight className="group-active:rotate-45 md:group-hover:rotate-45 transition-all duration-300 h-5 w-5 md:h-fit md:w-fit" />
              </Button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Main;
