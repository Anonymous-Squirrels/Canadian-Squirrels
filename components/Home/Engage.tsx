"use client";
import React, { useEffect, useRef, useState } from "react";
import "@/style/EngageAnimation.css";

export default function Engage() {
  const divRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const [cursorAnimation, setCursorAnimation] = useState<boolean>(false);

  useEffect(() => {
    const link = document.querySelectorAll("div > .hover-this");
    const cursor = document.querySelector(".cursor") as HTMLElement;

    const animateIt = function (this: HTMLElement, e: MouseEvent) {
      const span = this.querySelector("span");
      if (!span) return;
      const { offsetX: x, offsetY: y } = e,
        { offsetWidth: width, offsetHeight: height } = this,
        move = 25,
        xMove = (x / width) * (move * 2) - move,
        yMove = (y / height) * (move * 2) - move;

      span.style.transform = `translate(${xMove}px, ${yMove}px)`;

      if (e.type === "mouseleave") span.style.transform = "";
    };

    const editCursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      if (cursor) {
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
      }
    };

    link.forEach((b) =>
      b.addEventListener("mousemove", animateIt as EventListener)
    );
    link.forEach((b) =>
      b.addEventListener("mouseleave", animateIt as EventListener)
    );
    window.addEventListener("mousemove", editCursor);

    return () => {
      link.forEach((b) =>
        b.removeEventListener("mousemove", animateIt as EventListener)
      );
      link.forEach((b) =>
        b.removeEventListener("mouseleave", animateIt as EventListener)
      );
      window.removeEventListener("mousemove", editCursor);
    };
  }, [cursorAnimation]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsIntersecting(true);
      }
    });
    if (divRef.current) {
      observer.observe(divRef.current);
    }
  }, []);

  return (
    <div
      className="nav-wrapper grid place-items-center border cursor-none"
      onMouseEnter={() => setCursorAnimation(true)}
      onMouseLeave={() => setCursorAnimation(false)}
    >
      <div
        className={"w-[1000px] flex flex-col items-center justify-center"}
        ref={divRef}
      >
        <p
          className={`hover-this text-8xl font-medium self-start flex items-center justify-around gap-3 relative -left-[70%] ${
            isIntersecting && "brand"
          } `}
        >
          <span className={"span-text"}>
            Brand Identity
            <span className="bg-black h-4 w-4 text-white inline-block" />
          </span>
        </p>
        <p className="hover-this text-[230px] font-bold self-start flex items-center justify-around gap-3">
          <span className={"span-text"}>
            ENGAGE
            <span className="bg-black h-7 w-7 inline-block" />
          </span>
        </p>
        <p className="hover-this text-8xl font-medium self-end">
          <span
            className={`span-text relative -right-[70%] ${
              isIntersecting && "content"
            }`}
          >
            Content Marketing
          </span>
        </p>
        {cursorAnimation && <p className="cursor" />}
      </div>
    </div>
  );
}
