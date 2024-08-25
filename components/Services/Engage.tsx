import React from "react";
import Button from "../ui/Button";

function Engage() {
  return (
    <div className="bg-[#8F00FF] flex flex-col items-center justify-center gap-y-4 md:gap-y-5 px-5 py-1 md:py-6 text-white text-xs md:text-base">
      <div className="text-xl md:text-3xl font-bold text-center">
        Engage Your Audience Grow Your Ideas.
      </div>
      <div className="px-4 text-center">
        Connect with Anonymous Squirrels today to boost your creativity and promote your brand with maximum potential.
      </div>
       {/* <Button className="bg-white rounded-md text-button-color transition-all duration-200  md:hover:bg-button-color md:hover:text-white active:bg-button-color active:text-white w-28 md:px-5 md:w-fit
        ">
          Connect with us
        </Button>*/}
    </div>
  );
}

export default Engage;
