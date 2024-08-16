import { InvertedComma } from "@/constants/Icons";
import React from "react";

function Box({
  className,
  children,
}: {
  className?: string;
  children: Readonly<React.ReactNode>;
}) {
  return (
    <div
      className={`bg-white text-black relative p-6 m-6 rounded-sm w-2/5 ${className}`}
    >
      <InvertedComma
        variant="open"
        className="absolute scale-75 -top-5 -left-5"
      />
      <InvertedComma
        variant="close"
        className="absolute scale-75 -bottom-5 -right-5"
      />
      <div>{children}</div>
    </div>
  );
}

export default Box;
