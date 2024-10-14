import Image from "next/image";

const Google = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-center items-center p-5 bg-black">
      <div className="flex-shrink-0">
        <Image
          src="/assets/Google.jpg"
          alt="google"
          width={350}
          height={350}
          className="h-[150px] w-[150px] md:h-[350px] md:w-[350px] rounded-xl object-cover"
        />
      </div>
      <div className="text-white max-w-[900px] flex flex-col gap-5 text-center md:text-left">
        <p className="text-3xl text-gray-400 font-bold">
          We are a Google Partner 2024
        </p>
        <h2 className="text-5xl md:text-6xl text-orange-700 font-bold">
          That&apos;s a BIG
        </h2>
        <h6 className="text-2xl md:text-3xl text-violet-700 font-bold">
          ADVANTAGE for YOU
        </h6>
        <p className="text-base md:text-lg">
          We have been handling ad spends of over $400,000 every month only for
          our dental clients and know how to exactly maximize the ROI.
        </p>
      </div>
    </div>
  );
};

export default Google;