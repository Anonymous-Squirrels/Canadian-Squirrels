"use client";
import HeroSection from "@/components/Project/HeroSection";
import Like from "@/components/Project/Like";
import Main from "@/components/Project/Main";
import React, {useState} from "react";
import {Blob} from "@/constants/Icons";
import MarqueeSlide from "@/components/Project/Page/MarqueeSlide";

function Page() {
  const [section, setSection] = useState("All");

  return (
    <div className="w-full overflow-hidden">
      <div className="w-full relative">
        <div className="absolute md:left-60 -translate-x-1/2 -top-96 md:-top-72 z-10">
          <Blob variant="violet"/>
        </div>
        <div className="absolute right-28 md:right-40 translate-x-1/2 top-60 z-10">
          <Blob variant="yellow"/>
        </div>
        <HeroSection section={section} setSection={setSection}/>
        {/*<Main section={section}/>*/}
        <MarqueeSlide/>
      </div>

      <Like/>
    </div>
  );
}

export default Page;
