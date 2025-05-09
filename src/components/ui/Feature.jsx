import React from 'react';
import CheckIcon from '../icons/CheckIcon';

const Feature = ({ text }) => {
  return (
    <li className="flex space-x-3">
      <CheckIcon className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" />
      <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">{text}</span>
    </li>
  );
};

export default Feature; 