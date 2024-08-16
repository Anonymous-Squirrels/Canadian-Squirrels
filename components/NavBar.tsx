"use client";
import React from "react";
import GlassMorphism from "./ui/GlassMorphism";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {NavLinks} from "@/constants/Navbar";
import {Logo} from "@/constants/Icons";
import {FiMenu} from "react-icons/fi";
import {IoMdClose} from "react-icons/io";

function NavBar() {
  const path = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="h-20 md:h-fit bg-black z-50 relative flex items-center justify-center pt-8 md:pt-0 ">
      <div className="w-full px-4 md:p-4 fixed md:static">
        <div className={`w-full h-fit ${isOpen && "mt-60"} md:mt-0`}>
          <GlassMorphism
            variant="light"
            className={`text-white rounded-lg md:px-8 min-h-16 md:h-20 w-full backdrop-blur-xl bg-opacity-[0.09]
            ${
              !isOpen ? "flex items-center" : "bg-opacity-30 backdrop-blur-xl"
            }`}
          >
            <div className="flex items-center justify-between w-full relative">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="h-fit w-fit hidden md:flex element z-20 -ml-5 px-5 py-4">
                  <Logo className="h-9 md:h-fit"/>
                </div>
                <div
                  className="font-semibold text-lg hidden md:flex flex-col absolute z-10 group-hover:opacity-100 opacity-0 duration-300 group-hover:left-20 left-0">
                  <span>Anonymous</span>
                  <span>Squirrels</span>
                </div>

                <div className="h-fit w-fit flex md:hidden element z-20 -ml-5 px-5 ">
                  <Logo className="h-8"/>
                </div>
                <div className="font-semibold text-base flex flex-col md:hidden absolute z-10 left-14">
                  <span>Anonymous</span>
                  <span>Squirrels</span>
                </div>
              </Link>
              <ul className="hidden md:flex items-center gap-10 group text-lg">
                {NavLinks.map((item) => (
                  <Link
                    href={item.path}
                    key={item.tag}
                    className={`${
                      path === item.path &&
                      "text-sq-violet group-hover:text-white"
                    }
             hover:text-sq-violet  transition-all duration-300`}
                  >
                    {item.tag}
                  </Link>
                ))}
              </ul>

              <div onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                {!isOpen ? (
                  <FiMenu className="h-8 w-8"/>
                ) : (
                  <IoMdClose className="h-8 w-8"/>
                )}
              </div>
            </div>
            {isOpen && (
              <div className="rounded-lg mt-6 mb-2 md:hidden">
                {NavLinks.map((item) => (
                  <Link
                    href={item.path}
                    key={item.tag}
                    className="block text-center font-medium text-lg my-4"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.tag}
                  </Link>
                ))}
              </div>
            )}
          </GlassMorphism>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
