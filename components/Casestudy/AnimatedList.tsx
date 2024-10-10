"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from '../ui/animated-list';
import Image from "next/image";


interface List {
  icon: string;
  data: string;
  detail: string;
}


// notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ icon, data, detail }: List) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-xl p-1 md:p-3",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_4px_5px_3px_rgba(157,141,255),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles0px 0px 5px 5px rgb(211,177,255)
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3 min-h-16">
        <Image
            src={icon}
            alt="logo"
            width={80}
            height={80}
            className="w-14 md:w-20"
        />
        <div className=" overflow-hidden">
          <span className="text-xl md:text-2xl text-[#5C3095] font-semibold">{data} </span>
          <span className="text-xs md:text-sm font-normal dark:text-white/60">
            {detail}
          </span>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({
  className, listItems = []
}: {
  className?: string;
  listItems?: List[];
}) {
  return (
    <div
      className={cn(
        "relative flex h-[265px] md:h-[430px] w-full md:w-[50%] xl:w-[40%] flex-col p-2 lg:p-4 overflow-hidden",
        className,
      )}
    >
      <AnimatedList>
        {listItems.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
