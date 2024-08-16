import React from 'react';
import Marquee from "react-fast-marquee";
import {row1Desktop, row2Desktop, rowMobile} from "@/constants/marqueeData";
import Image from "next/image";

function MarqueeSlide() {
  return (
    <>
      <div className="w-full h-fit text-white bg-black pb-10 hidden md:block">
        <Marquee className="w-full h-fit">
          {row1Desktop.map((item, index) =>
            <Image
              key={index} src={`/${item}`} alt={item.replace("marquee/", "")}
              height={350} width={350} className="m-7"/>)}
        </Marquee>

        <Marquee className="w-full h-fit" direction={"right"}>
          {row2Desktop.map((item, index) =>
            <Image
              key={index} src={`/${item}`} alt={item.replace("marquee/", "")}
              height={350} width={350} className="m-7"/>)}
        </Marquee>
      </div>
      <div className="w-full h-fit text-white bg-black pb-5 block md:hidden">
        <Marquee className="w-full h-fit">
          {rowMobile.map((item, index) =>
            <Image
              key={index} src={`/${item}`} alt={item.replace("marquee/", "")}
              height={150} width={150} className="m-4"/>)}
        </Marquee>
      </div>
    </>
  );
}

export default MarqueeSlide;