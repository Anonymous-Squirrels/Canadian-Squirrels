import React from "react";

function GlassMorphism({
  className,
  children,
  variant,
  id
}: {
  className?: string;
  children: React.ReactNode;
  variant: "light" | "dark";
  id?: string
}) {
  let glassCss = "";
  switch (variant) {
    case "dark":
      glassCss = "bg-black bg-opacity-10";
      break;
    case "light":
      glassCss = "bg-white bg-opacity-10";
      break;
    default:
      glassCss = "bg-white bg-opacity-10";
  }
  return (
    <div id={id} className={`p-4 backdrop-blur-sm h-fit  ${glassCss} ${className} `}>
      {children}
    </div>
  );
}

export default GlassMorphism;
