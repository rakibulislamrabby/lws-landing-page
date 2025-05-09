import React from 'react';
import Feature from '../ui/Feature';

const FeatureSection = ({ title, description, features, image, imageAlt, isReversed = false }) => {
  return (
    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
      {!isReversed ? (
        <>
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">{title}</h2>
            <p className="mb-8 font-light lg:text-xl">{description}</p>

            <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
              {features.map((feature, index) => (
                <Feature key={index} text={feature} />
              ))}
            </ul>
            <p className="mb-8 font-light lg:text-xl">{description}</p>
          </div>
          <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={image} alt={imageAlt} />
        </>
      ) : (
        <>
          <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={image} alt={imageAlt} />
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">{title}</h2>
            <p className="mb-8 font-light lg:text-xl">{description}</p>

            <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
              {features.map((feature, index) => (
                <Feature key={index} text={feature} />
              ))}
            </ul>
            <p className="font-light lg:text-xl">{description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default FeatureSection; 