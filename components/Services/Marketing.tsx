import React from "react";
import FAB from "../ui/FAB";
import { ContentMarketing, MarketingConsult, Tick } from "@/constants/Icons";

function Marketing() {
  return (
    <div className="w-[100%] py-10 bg-[#F0E9FB] grid gap-y-8 place-items-center">

      <FAB variant="secondary" className="self-start select-none">Marketing</FAB>
      <div className="w-full md:flex flex-col items-center justify-center">
        <div className="mb-10 w-full pl-6 md:pl-28 self-start">
          <span className="text-[#5C3095] font-bold">STRATEGIZE</span>
          <br />
          <span className="text-3xl text-black font-bold">Grow your Reach</span>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center md:items-stretch justify-around gap-10 md:gap-14">
          <div className="w-screen  md:w-2/5">
            <span className="text-[#5C3095] font-extrabold whitespace-nowrap px-6 md:px-0">
              Content Marketing & Brand Strategy
            </span>
            <div className="text-[#1211275c] mt-5 px-6 md:px-0">
              Develop a content strategy that aligns with your brand story and
              resonates with your target audience. We can help with social media
              management, content creation (blog posts, articles, etc.), and
              email marketing.
            </div>
            <ContentMarketing className="w-screen h-[300px] md:w-full md:h-fit"/>
            <span className="flex items-center gap-2 px-6 md:px-0">
              <Tick />
              Upgrade your customer experience instantly
            </span>
            <span className="flex items-center gap-2 px-6 md:px-0">
              <Tick />
              Start with done-for-you setup
            </span>
          </div>

          <div className="w-full  md:w-2/5">
            <span className="text-[#5C3095] font-extrabold whitespace-nowrap px-6 md:px-0">
              Marketing Consultation
            </span>
            <div className="text-[#1211275c] mt-5 px-6 md:px-0">
              Need guidance on your overall marketing strategy? Our experienced
              consultants can help you identify opportunities and develop a
              roadmap for success.
            </div>
            <MarketingConsult className="w-full h-[300px] md:w-full md:h-fit"/>
            <div>
              <span className="flex items-center gap-2 px-6 md:px-0">
                <Tick />
                Upgrade your customer experience instantly
              </span>
              <span className="flex items-center gap-2 px-6 md:px-0">
                <Tick />
                Start with done-for-you setup
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketing;
