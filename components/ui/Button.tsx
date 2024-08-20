import React from "react";

function Button({
  className,
  children,
  variant,
  onClick,
  isSubmitting
}: {
  className?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
  onClick?: () => void;
  isSubmitting?: boolean
}) {
  let btnStyle;
  switch (variant) {
    case "primary":
      btnStyle = "bg-sq-violet text-white  p-3";
      break;
    case "secondary":
      btnStyle =
        "bg-transparent border-2 border-sq-violet p-2 md:p-4 text-sq-violet active:bg-sq-violet active:border-white md:hover:bg-sq-violet md:hover:border-white";
      break;
    case "light":
      btnStyle = "bg-white p-2 md:p-4 text-black";
      break;
  }
  return (
    <button
      onClick={onClick}
      type="submit"
      disabled={isSubmitting}
      className={`transition-all duration-300  rounded-full ${btnStyle} ${className} `}
    >
      {children}
    </button>
  );
}

export default Button;
