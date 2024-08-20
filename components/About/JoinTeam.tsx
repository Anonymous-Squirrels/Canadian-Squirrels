import React from "react";
import Button from "../ui/Button";
import Link from "next/link";

function JoinTeam() {
  return (
    <div className="bg-white mx-6 md:mx-56 flex flex-col md:flex-row items-start md:items-center justify-between my-5 md:my-10">
      <div className="z-20">
        <div className="text-xl md:text-3xl font-semibold">
          <span>Become a Squirrel.</span>{" "}
          <span className="text-[#444BD3]">Join our Team.</span>
        </div>
        <span className="text-xs md:text-sm font-light">
          We are looking for individuals with skills who could join our family
          of squirrels.
        </span>
      </div>
      <Link href="/contact" className="z-20">
        <Button
          variant="primary"
          className="mt-4 px-6 rounded-lg bg-[#444BD3] hover:border-[#444BD3] hover:bg-transparent hover:text-black border-transparent border "
        >
          Apply Now
        </Button>
      </Link>
    </div>
  );
}

export default JoinTeam;
