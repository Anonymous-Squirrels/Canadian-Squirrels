'use client';
import React, { useRef } from 'react';
import styles from '@/style/StepProcess.module.css';
import { IoMdAdd } from 'react-icons/io';
import { FaMinus } from 'react-icons/fa6';

function ProcessAccordion({
  activeIndex,
  setActiveIndex,
  data,
}: {
  activeIndex: number | null;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
  data: Array<{ question: string; answer: string }>;
}) {
  const handleItemClick = (index: number | null) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.container}>
      {data.map((item, index: number) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
          currIndex={index}
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
  currIndex: number;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
  currIndex,
}) => {
  const contentHeight = useRef<HTMLDivElement>(null);

  return (
    <div className={`${styles.wrapper} text-[FFFFFF]`}>
      <button
        className={`${styles.question_container}  ${
          isOpen ? styles.active : ''
        } p-2.5 md:px-5 md:py-3`}
        onClick={onClick}
      >
        <div
          className={`font-bold  border-[#5C3095] text-2xl md:text-3xl py-4 w-full`}
        >
          <span className="border text-center h-10 w-10 inline-block mr-4">
            {currIndex + 1}
          </span>
          <span>{question}</span>
          <p className="border-b-8 relative top-6 w-[110%] border-[#5C3095]"></p>
        </div>
        {!isOpen ? <IoMdAdd /> : <FaMinus />}
      </button>

      <div
        ref={contentHeight}
        className={`${styles.answer_container} text-sm px-96`}
        style={
          isOpen
            ? {
                height: contentHeight.current
                  ? `${contentHeight.current.scrollHeight}px`
                  : 'auto',
              }
            : { height: '0px' }
        }
      >
        <p className={`${styles.answer_content}`}>{answer}</p>
      </div>
    </div>
  );
};

export default ProcessAccordion;
