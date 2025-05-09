import React from 'react';
import AccordionItem from '../ui/AccordionItem';

const FAQ = () => {
  const faqData = [
    {
      question: 'Can I use Landwind in open-source projects?',
      answer: (
        <>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Landwind is an open-source library of interactive components built on top of Tailwind CSS including buttons,
            dropdowns, modals, navbars, and more.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to{' '}
            <a href="#" className="text-purple-600 dark:text-purple-500 hover:underline">
              get started
            </a>{' '}
            and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </>
      ),
      isActive: true
    },
    {
      question: 'Is there a Figma file available?',
      answer: (
        <>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Landwind is first conceptualized and designed using the Figma software so everything you see in the library
            has a design equivalent in our Figma file.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out the{' '}
            <a href="#" className="text-purple-600 dark:text-purple-500 hover:underline">
              Figma design system
            </a>{' '}
            based on the utility classes from Tailwind CSS and components from Landwind.
          </p>
        </>
      )
    },
    {
      question: 'What are the differences between Landwind and Tailwind UI?',
      answer: (
        <>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Landwind are open source under the MIT license, whereas
            Tailwind UI is a paid product. Another difference is that Landwind relies on smaller and standalone
            components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Landwind, Landwind Pro, and even Tailwind UI as there is no
            technical reason stopping you from using the best of two worlds.
          </p>
        </>
      )
    },
    {
      question: 'What about browser support?',
      answer: "We ensure compatibility with the latest versions of major browsers including Chrome, Firefox, Safari, and Edge."
    }
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6">
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
          Frequently asked questions
        </h2>
        <div className="max-w-screen-md mx-auto">
          <div
            id="accordion-flush"
            data-accordion="collapse"
            data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            data-inactive-classes="text-gray-500 dark:text-gray-400"
          >
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                id={index + 1}
                question={faq.question}
                answer={faq.answer}
                isActive={faq.isActive}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 