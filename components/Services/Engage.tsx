import React from "react";
import Button from "../ui/Button";
import Link from "next/link";

function Engage() {
  return (
    <div className="bg-[#8F00FF] flex flex-col items-center justify-center gap-y-4 md:gap-y-5 px-5 py-1 md:py-6 text-white text-xs md:text-base">
      <div className="text-xl md:text-3xl font-bold text-center">
        Engage With Your Audience & Grow Your Business.
      </div>
      <div className="px-4 text-center">
        Here are some of the brands who entrusted us.
      </div>
      <Link href="/project">
        <Button className="bg-white rounded-md text-button-color transition-all duration-200  md:hover:bg-button-color md:hover:text-white active:bg-button-color active:text-white w-28 md:px-4 py-2 md:w-fit
        ">
          Our Projects
        </Button>
      </Link>
       
    </div>
  );
}

export default Engage;
