import React from "react";

function FAB({
  className,
  children,
  variant,
}: {
  className?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  let btnStyle;
  switch (variant) {
    case "primary":
      btnStyle = "bg-sq-violet text-white";
      break;
    case "secondary":
      btnStyle = "text-[#1D054F] active:bg-[#1D054F] active:text-white md:hover:bg-[#1D054F] md:hover:text-white";
      break;
  }
  return (
    <div
      className={`cursor-default text-[#1D054F] group text-lg bg-[#D9D9D9] transition-all duration-300 p-4 rounded-xl font-bold inline-flex items-center gap-3 ${btnStyle} ${className}`}
    >
      <svg
        width="9"
        height="8"
        viewBox="0 0 9 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=" bg-[#1D054F] group-hover:bg-white"
      >
        <path d="M0.868394 0.604779H8.3877V8H0.868394V0.604779Z" fill="none" />
      </svg>
      {children}
    </div>
  );
}

export default FAB;
