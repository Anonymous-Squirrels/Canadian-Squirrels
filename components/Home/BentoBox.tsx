"use client";
import React from "react";
import { BentoItems } from "@/constants/BentoBox";
import GlassMorphism from "@/components/ui/GlassMorphism";

export function BentoBox() {
  return (
    <div className="bg-[url('/assets/baltic-rose.webp')] bg-cover text-white p-10 md:p-32">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-10 ">
        {BentoItems.map((item, i) => (
          <GlassMorphism
            key={i}
            variant={"light"}
            className={`h-72 md:h-[400px] overflow-hidden rounded-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:-white/[0.2] space-y-4 w-full place-items-center
            ${i === 3 || i === 4 ? "md:col-span-3" : "md:col-span-2"}`}
          >
            <div className={`text-sm transition duration-200 w-full flex flex-col items-center`}>
              <p className="text-center text-xl font-bold block mb-5">
                {item.title}
              </p>

              <p className="text-center text-xs md:text-lg inline-block text-[#D2D2D2]">
                {item.description}
              </p>
            </div>

            <div className="grid place-items-center items-center  w-full h-fit">
              {item.content}
            </div>
          </GlassMorphism>
        ))}
      </div>
    </div>
  );
}
