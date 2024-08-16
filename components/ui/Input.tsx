"use client";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  classNameDiv?: string;
  classNameInput?: string;
  classNameText?: string;
  text?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({
  className,
  classNameDiv,
  classNameInput,
  classNameText,
  type,
  placeholder,
  text,
  ...rest
}, ref: any) => {

  return (
    <div className={className}>
      {text && <div className={`${classNameText}`}>{text}</div>}
      <div className={`overflow-hidden ${classNameDiv}`}>
        {type !== "textarea" && (
          <input
            type={type}
            placeholder={placeholder}
            ref={ref}
            className={`p-1.5 md:p-4 bg-transparent outline-none border-none w-full ${classNameInput}`}
            {...rest}
          />
        )}
      </div>
    </div>
  );
});

Input.displayName = "Input";

export default Input;
