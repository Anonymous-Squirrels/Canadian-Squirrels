import React from "react";
import Button from "../ui/Button";
import Link from "next/link";

// Define the props interface
interface JoinTeamProps {
  content1: string;
  content2: string;
  detail: string;
  link1: string;
  button: string;
}

const JoinTeam: React.FC<JoinTeamProps> = ({ content1, content2, detail, link1, button }) => {
  return (
    <div className="mx-6 md:mx-48 flex flex-col xl:flex-row items-center justify-between text-center my-5 md:my-10">
      <div>
        <div className="text-xl md:text-3xl font-semibold">
          <span>{content1}</span>{" "}
          <span className="text-[#444BD3]">{content2}</span>
        </div>
        <span className="text-xs md:text-sm font-light">
          {detail}
        </span>
      </div>
      <Link href={link1}>
          <Button
            variant="primary"
            className="mt-4 px-6 rounded-lg bg-[#444BD3] hover:border-[#444BD3] hover:bg-transparent hover:text-black border-transparent border"
          >
            {button}
          </Button>
      </Link>
    </div>
  );
};

export default JoinTeam;
