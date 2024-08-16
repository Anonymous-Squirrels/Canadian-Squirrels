import { Sparkle } from "@/constants/Icons";
import Image from "next/image";
import React from "react";

function OurValues() {
  return (
    <div className="min-h-screen bg-white py-12 md:py-16 overflow-hidden">
      <div className="flex w-full items-center justify-center text-3xl py-9">
        <div className="w-fit flex items-center gap-x-3.5 justify-center md:absolute md:left-24">
          <Sparkle /> <span className="uppercase font-bold">OUR VALUES</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-between px-7 md:p-24 gap-y-8">
        <div className="w-full md:w-fit rounded-lg grid place-items-center">
          <div className="w-full md:w-fit flex flex-col items-center justify-around gap-y-5 rounded-lg shadow-xl p-6 md:mr-20">
            <span className="uppercase self-start md:self-auto font-bold">Trust</span>
            <span className="text-sm leading-7 w-full md:w-3/4">
              Cultivating Enduring Relationships Through Unwavering Integrity
              and Reliability.
            </span>
          </div>
          <div className="w-fit md:relative right-9">
            <Image
              src="/assets/handshake.png"
              width={500}
              height={500}
              alt="handshake"
              className="w-fit"
            />
          </div>
        </div>

        <div className="w-full md:w-fit flex flex-col items-start justify-around rounded-lg shadow-xl p-6 md:mr-20">
          <span className="uppercase font-bold">Loyalty</span>
          <br />
          <span className="text-sm leading-7 w-full md:w-3/4">
            Fostering Deep, Long-Lasting Partnerships Built on Commitment and
            Dedication.
          </span>
          <div className="grid place-items-center">
            <Image
              src="/assets/loyalty.png"
              width={400}
              height={400}
              alt="handshake"
              className="my-8 md:w-full w-[80%]"
            />
          </div>
        </div>

        <div className="w-full md:w-fit rounded-lg">
          <div className="w-full md:w-fit flex flex-col items-start justify-around rounded-lg shadow-xl p-6">
            <span className="uppercase font-bold">Transparency</span>
            <br />
            <span className="text-sm leading-7 w-full md:w-3/4">
              Promoting Open, Honest Communication to Ensure Clarity and Mutual
              Success.
            </span>
          </div>
          <div className="w-full -translate-y-10">
            <Image
              src="/assets/transparency.png"
              width={400}
              height={400}
              alt="handshake"
              className="md:w-full w-[80%] md:translate-x-24 translate-x-32"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurValues;
