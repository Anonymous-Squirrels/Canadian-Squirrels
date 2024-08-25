import React from "react";
import Button from "../ui/Button";

function Like() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 md:gap-5 bg-white md:my-11 px-4 py-2 md:mx-56 ">
      <div className="text-lg md:text-4xl text-center font-semibold">
        <span>Liked what you saw?</span>{" "}
        <span className="text-[#444BD3]">Get one for yourself.</span>
      </div>
      <div className="text-center">
        <Button className="bg-[#444BD3] text-white border border-[#444BD3] transition-all duration-200 md:hover:bg-white md:hover:text-[#444BD3] active:bg-white active:text-[#444BD3] text-xs md:text-base rounded-md md:rounded-lg px-2.5 py-2 md:px-8 md:py-3">
          Let&apos;s Discuss
        </Button>
      </div>
    </div>
  );
}

export default Like;
