import React from "react";
import FAB from "../ui/FAB";
import Image from "next/image";
import GlassMorphism from "../ui/GlassMorphism";

function Branding() {
  const images = [
    { src: "/dental/firm1.png", alt: "Image 1" },
    { src: "/dental/firm2.png", alt: "Image 2" },
    { src: "/dental/firm3.png", alt: "Image 3" },
    { src: "/dental/firm4.png", alt: "Image 4" },
    { src: "/dental/firm5.png", alt: "Image 5" },
    { src: "/dental/firm6.png", alt: "Image 6" },
  ]; 

  return (
    <div className="w-[100%] py-10 bg-black grid md:gap-y-8 place-items-center">
      <FAB variant="secondary" className="h-11 md:h-fit select-none">
        Branding
      </FAB>
      <div className="w-full md:flex flex-col items-center justify-center">
        <div className="w-full flex flex-col xl:flex-row items-center md:items-stretch justify-around md:gap-14">
          <div className="w-full xl:w-2/5 p-5 xl:p-0">
            <div className="mb-10 flex flex-col gap-3 w-full text-center">
              <span className="text-[#5237D8] text-2xl md:text-4xl font-bold">
                BRAND
              </span>
              <span className="text-white text-3xl md:text-5xl font-bold">
                IDENTITY
              </span>
            </div>

            <div className="flex w-full gap-5">
              <Image
                src="/assets/brandgroup.png"
                alt="doc"
                width={1000}
                height={100}
                className="w-full rounded-xl"
              />
            </div>

            <p className="text-sm md:text-lg text-gray-200 font-thin mx-auto my-4 md:leading-loose text-center md:text-start">
              From Crafting A <span className="text-white font-extrabold">Memorable Logo</span> To Developing A Cohesive <span className="text-white font-extrabold">Brand Message</span>
              , Our Team Of Experts Will Ensure Your Brand Stands Out In
              The Market. We&apos;ll Create A Visual Identity That Resonates With Your 
              <span className="text-white font-extrabold"> Target Audience </span> And Reflects Your <span className="text-white font-extrabold"> Brand&apos;s Unique Personality</span>.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {images.map((image, index) => (
                <div key={index} className="relative w-full h-40">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="w-full xl:w-2/5 p-5 xl:p-0">
            <div className="mb-2 md:mb-10 flex flex-col gap-1 md:gap-3 w-full text-center">
              <span className="text-white text-2xl md:text-4xl font-bold">
                PERSONAL
              </span>
              <span className="text-[#5237D8] text-3xl md:text-5xl font-bold">
                BRANDING
              </span>
            </div>
            <p className="text-sm md:text-lg text-gray-200 font-light mx-auto mb-4 md:leading-loose text-center md:text-start">
              From <span className="text-white font-extrabold"> entrepreneurs to influencers and industry leaders </span>, we help
              you carve a unique niche in the digital world. We craft tailored
              strategies to enhance your online presence, build a strong
              personal brand, and connect with your target audience. Our
              services include <span className="text-white font-extrabold">social media management, content creation,
              podcast development,</span> and more.
            </p>

            <div className="flex gap-x-10 justify-center items-center">
              <div className="relative">
                <Image
                  src="/logo/linkedinLogo.png"
                  width={160}
                  height={160}
                  alt="LinkedIn Logo"
                  className="w-[72px] h-[72px] md:w-[170px] md:h-[170px]"
                />
                <GlassMorphism
                  variant="light"
                  className="border border-white/25 overflow-hidden hidden md:flex absolute h-12 w-12 md:h-28 md:w-28 rounded-lg bottom-0 -translate-x-3 translate-y-3 md:-translate-x-8 md:translate-y-8"
                >
                  {" "}
                </GlassMorphism>
              </div>
              <div className="relative">
                <Image
                  src="/logo/youtubelogo.png"
                  width={160}
                  height={160}
                  alt="Youtube Logo"
                  className="w-[72px] h-[72px] md:w-[170px] md:h-[170px]"
                />
                <GlassMorphism
                  variant="light"
                  className="border border-white/25 overflow-hidden hidden md:flex absolute h-12 w-12 md:h-28 md:w-28 rounded-lg bottom-0 -translate-x-3 translate-y-3 md:-translate-x-8 md:translate-y-8"
                >
                  {" "}
                </GlassMorphism>
              </div>
              <div className="relative">
                <Image
                  src="/logo/instagramLogo.png"
                  width={160}
                  height={160}
                  alt="Instagram Logo"
                  className="w-[72px] h-[72px] md:w-[170px] md:h-[170px]"
                />
                <GlassMorphism
                  variant="light"
                  className="border border-white/25 overflow-hidden hidden md:flex absolute h-12 w-12 md:h-28 md:w-28 rounded-lg bottom-0 -translate-x-3 translate-y-3 md:-translate-x-8 md:translate-y-8"
                >
                  {" "}
                </GlassMorphism>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 mt-5 md:mt-16">
              <div className="col-span-1">
                <Image
                  src="/assets/personalbranding1.png"
                  alt="doc"
                  width={500}
                  height={600}
                  className="w-full h-[200px] md:h-[320px] rounded-sm md:rounded-xl object-contain"
                />
              </div>
              <div className="col-span-1 flex flex-row gap-3 md:flex-col md:gap-5">
                <div className="flex-1">
                  <Image
                    src="/assets/personalbranding2.png"
                    alt="doc"
                    width={500}
                    height={100}
                    className="w-full h-[120px] md:h-[150px] rounded-sm md:rounded-xl object-contain"
                  />
                </div>
                <div className="flex-1">
                  <Image
                    src="/assets/personalbranding3.png"
                    alt="doc"
                    width={500}
                    height={100}
                    className="w-full h-[120px] md:h-[150px] rounded-sm md:rounded-xl object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Branding;
