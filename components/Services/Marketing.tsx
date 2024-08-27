import FAB from "../ui/FAB";
import Image from "next/image";
import { Tick } from "@/constants/Icons";

function Marketing() {
  return (
    <div className="w-[100%] py-10 bg-[#F0E9FB] grid md:gap-y-8 place-items-center">
      <FAB variant="secondary" className="self-start select-none">
        Marketing
      </FAB>
      <div className="w-full md:flex flex-col items-center justify-center">
        <div className="w-full flex flex-col xl:flex-row items-center md:items-stretch justify-around md:gap-14">
          <div className="w-full xl:w-2/5 p-5 xl:p-0">
            <div className="mb-10 w-full text-center">
              <span className="text-[#5237D8] text-2xl md:text-4xl font-bold">MARKETING</span>
              <br />
              <span className="text-black text-2xl md:text-4xl font-bold">&</span>
              <br />
              <span className="text-[#5237D8] text-2xl md:text-4xl font-bold">ADVERTISING</span>
              <br />
              <br />
              <span className="text-[#5C3095] font-bold">STRATEGIZE</span>
              <br />
              <span className="text-2xl md:text-3xl leading-6 text-black font-bold">Grow your Reach</span>
            </div>

            <div className="flex w-full gap-5">
              <div className="w-1/2">
                <Image
                  src="/assets/Rectangle 2873.svg"
                  alt="doc"
                  width={300}
                  height={300}
                  className="w-full shadow-ContainerShadow rounded-xl"
                />
              </div>
              <div className="w-1/2">
                <Image
                  src="/assets/Content2.svg"
                  alt="doc"
                  width={300}
                  height={300}
                  className="w-full shadow-ContainerShadow rounded-xl"
                />
              </div>
            </div>

            <p className="text-sm font-light md:w-5/6 mx-auto my-4 md:leading-loose text-center md:text-start">
              Our expert consultants craft tailored strategies, designs, and professional feel to elevate your brand.
            </p>

            <Image
              src="/assets/contentbanner.png"
              alt="doc"
              width={1000}
              height={100}
              className="w-full rounded-xl"
            />
          </div>

          <div className="w-full xl:w-2/5 p-5 xl:p-0">
            <div className="mb-10 w-full text-center">
              <span className="text-[#5237D8] text-2xl md:text-4xl font-bold">CONTENT </span>
              <span className="text-black text-2xl md:text-4xl font-bold">Marketing</span>
              <div className="mt-2">
                <span className="text-black text-2xl md:text-4xl font-bold">& Brand</span>
                <span className="text-[#5237D8] text-2xl md:text-4xl font-bold"> STRATEGY</span>
              </div>
            </div>
            <p className="text-sm font-light mx-auto md:mt-2 md:leading-loose text-center md:text-start">
              We craft compelling content that resonates with your audience and drives results. Social Media, content creation to strategy, we do it all.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 justify-center">
              <div className="col-span-1 pt-4 md:pt-32">
                <div className="text-sm font-extralight">
                  <span className="flex items-center gap-2 md:gap-2 md:px-0">
                    <Tick />
                    Upgrade your customer experience instantly
                  </span>
                  <span className="flex items-center gap-2 md:px-0 mt-3">
                    <Tick />
                    Start with done-for-you setup
                  </span>
                  <Image
                    src="/assets/content4.png"
                    alt="doc"
                    width={300}
                    height={300}
                    className="h-[180px] w-[230px] shadow-ContainerShadow rounded-xl mt-10 mx-auto md:mx-0"
                  />
                </div>
              </div>
              <div className="col-span-1">
                <Image
                  src="/assets/content3.png"
                  alt="doc"
                  width={300}
                  height={300}
                  className="w-screen h-[300px] md:w-full md:h-fit shadow-ContainerShadow rounded-xl mt-10 md:mb-32"
                />
                <Image
                  src="/assets/content5.png"
                  alt="doc"
                  width={400}
                  height={400}
                  className="w-screen h-[300px] md:w-full md:h-fit shadow-ContainerShadow rounded-xl mt-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketing;
