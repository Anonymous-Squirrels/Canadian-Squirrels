"use client";
import React, {useRef,} from "react";
import styles from "@/style/Services.module.css";
import {IoMdAdd} from "react-icons/io";
import {FaMinus} from "react-icons/fa6";

function ServiceAccordian({activeIndex, setActiveIndex, data}: {
  activeIndex: number | null;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
  data: Array<{question: string; answer: string}>
}) {

  const handleItemClick = (index: number | null) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.container}>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
}

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  const contentHeight = useRef<HTMLDivElement>(null);

  return (
    <div className={`${styles.wrapper} text-[#1D054F]`}>
      <button
        className={`${styles.question_container} ${
          isOpen ? styles.active : ""
        }`}
        onClick={onClick}
      >
        <p className={`${styles.question_content} font-bold`}>{question}</p>
        {!isOpen ? <IoMdAdd/> : <FaMinus/>}
      </button>

      <div
        ref={contentHeight}
        className={`${styles.answer_container} text-sm`}
        style={
          isOpen
            ? {
              height: contentHeight.current
                ? `${contentHeight.current.scrollHeight}px`
                : "auto",
            }
            : {height: "0px"}
        }
      >
        <p className={styles.answer_content}>{answer}</p>
      </div>
    </div>
  );
};

export default ServiceAccordian;
