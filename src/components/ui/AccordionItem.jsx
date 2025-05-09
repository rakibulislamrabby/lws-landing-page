import React, { useState } from 'react';

const AccordionItem = ({ question, answer, isActive = false, id }) => {
  const [isOpen, setIsOpen] = useState(isActive);

  return (
    <>
      <h3 id={`accordion-flush-heading-${id}`}>
        <button
          type="button"
          className={`flex items-center justify-between w-full py-5 font-medium text-left ${
            isOpen
              ? 'text-gray-900 bg-white dark:bg-gray-900 dark:text-white'
              : 'text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={`accordion-flush-body-${id}`}
        >
          <span>{question}</span>
          <svg
            data-accordion-icon=""
            className={`w-6 h-6 ${isOpen ? 'rotate-180' : ''} shrink-0`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </h3>
      <div
        id={`accordion-flush-body-${id}`}
        className={isOpen ? '' : 'hidden'}
        aria-labelledby={`accordion-flush-heading-${id}`}
      >
        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
          {typeof answer === 'string' ? (
            <p className="mb-2 text-gray-500 dark:text-gray-400">{answer}</p>
          ) : (
            answer
          )}
        </div>
      </div>
    </>
  );
};

export default AccordionItem; 